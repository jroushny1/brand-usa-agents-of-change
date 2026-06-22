import { getAi, parseModelJson, withRetry, isTransientAiError } from '@/lib/storytelling'

export const runtime = 'nodejs'
export const maxDuration = 60

type Answer = { q?: string; a?: string }
type Element = { sym: string; name: string }

const BANNED =
  'luxury, paradise, bucket list, curated, authentic, immersive, breathtaking, unforgettable, once-in-a-lifetime, hidden gem'

export async function POST(req: Request) {
  try {
    let body: { answers?: unknown; elements?: unknown; mode?: unknown }
    try {
      body = await req.json()
    } catch {
      return Response.json({ error: 'Invalid JSON body' }, { status: 400 })
    }

    const answers: Answer[] = Array.isArray(body.answers)
      ? (body.answers as Answer[]).filter((x) => x && typeof x.a === 'string' && x.a.trim())
      : []
    if (answers.length === 0) {
      return Response.json({ error: 'Add a few notes from the call first.' }, { status: 400 })
    }

    const elements: Element[] = Array.isArray(body.elements)
      ? (body.elements as Element[]).filter((e) => e && typeof e.sym === 'string' && typeof e.name === 'string')
      : []
    const catalogue = elements.map((e) => `${e.sym}=${e.name}`).join('; ')
    const validIds = new Set(elements.map((e) => e.sym))

    const notes = answers.map((x) => `- ${x.q ? x.q + ': ' : ''}${(x.a as string).trim()}`).join('\n')

    const ai = await withRetry(() =>
      getAi().models.generateContent({
        model: 'gemini-2.5-flash',
        contents:
          `An advisor's notes from a client discovery call:\n${notes}\n\n` +
          `Storytelling element catalog (symbol=name): ${catalogue}.\n\n` +
          `Map this client to the catalog and build the Story Starter the advisor will design and sell.`,
        config: {
          systemInstruction:
            `You are an intake analyst for travel advisors. From an advisor's discovery-call notes you do two things.\n` +
            `1. Choose the 3 to 6 catalog elements that best capture THIS specific client. Use only symbols copied verbatim from the catalog. For each, write a short "variant" phrase drawn from the notes (the concrete specifics of this client), not a generic restatement.\n` +
            `2. Write a "Story Starter" the advisor can use:\n` +
            `   - "angle": a short, sharp phrase under about 12 words naming what this trip is really about - the human truth underneath. Write it like a headline. Never begin with "This story is about".\n` +
            `   - "useAs": a short label, "Client pitch opener".\n` +
            `   - "copy": one to three sentences, second person, addressed to the client, built around the feeling and the change they are after. Make a creative leap - one concrete sensory moment the notes imply but do not state. Never restate the notes.\n` +
            `   - "move": one concrete action - what the advisor should lead the pitch with, or build the trip around.\n` +
            `Voice rules: plain, declarative, present or near-future tense. No contrast constructions ("not X but Y", "more than just X", "X, but Y"). No hedging (could, might, may). No tidy metaphor closers, no rule-of-three lists. Use plain hyphens, never em-dashes. Never use any of these words: ${BANNED}.\n` +
            `Output ONLY a valid JSON object: {"selected":[{"sym":"...","variant":"..."}], "angle":"...", "useAs":"...", "copy":"...", "move":"..."}. Every "sym" must be an exact match from the catalog. Do not use markdown backticks.`,
          responseMimeType: 'application/json',
          temperature: 0.7,
        },
      }),
    )

    let p: { selected?: unknown; angle?: unknown; useAs?: unknown; copy?: unknown; move?: unknown }
    try {
      p = parseModelJson(ai.text)
    } catch (e) {
      console.error('[travel-storytelling/intake] parse failed:', e)
      return Response.json({ error: 'The AI returned an unexpected response. Please try again.' }, { status: 502 })
    }

    const clean = (v: unknown) => (typeof v === 'string' ? v.trim().replace(/^["“]|["”]$/g, '') : '')
    const selected = Array.isArray(p?.selected)
      ? (p.selected as { sym?: unknown; variant?: unknown }[])
          .filter((s) => s && typeof s.sym === 'string' && (validIds.size === 0 || validIds.has(s.sym)))
          .map((s) => ({ sym: s.sym as string, variant: typeof s.variant === 'string' ? s.variant.trim() : '' }))
          .slice(0, 6)
      : []
    const copy = clean(p?.copy)
    if (!copy) {
      return Response.json({ error: 'The AI returned an incomplete response. Please try again.' }, { status: 502 })
    }

    return Response.json({
      selected,
      angle: clean(p?.angle),
      useAs: clean(p?.useAs) || 'Client pitch opener',
      copy,
      move: clean(p?.move),
    })
  } catch (e) {
    console.error('[travel-storytelling/intake] error:', e)
    if (isTransientAiError(e)) {
      return Response.json({ error: 'The AI is busy right now — wait a few seconds and try again.' }, { status: 429 })
    }
    return Response.json({ error: 'Request failed. Please try again.' }, { status: 500 })
  }
}
