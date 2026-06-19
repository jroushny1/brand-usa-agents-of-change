import { getAi, parseModelJson, withRetry, isTransientAiError } from '@/lib/storytelling'

export const runtime = 'nodejs'
export const maxDuration = 60

type Element = { name: string; variant?: string | null }

const BANNED =
  'luxury, paradise, bucket list, curated, authentic, immersive, breathtaking, unforgettable, once-in-a-lifetime, hidden gem'

// The deliverable each mode produces: the copy, its label, and the action.
function modeBrief(mode: unknown): { copy: string; useAs: string; move: string } {
  if (mode === 'dest') {
    return {
      copy: 'a destination invitation or social line - place copy that puts the reader inside one concrete moment and makes them want to go. Address the reader as "you", or evoke the scene in the third person.',
      useAs: 'a short label for where this copy goes, such as "Destination invitation", "Social caption", or "Campaign line".',
      move: 'a marketing move - what to build the campaign or the post around.',
    }
  }
  if (mode === 'advisor') {
    return {
      copy: 'a pitch opener a travel advisor could send to one specific client - one to three sentences, second person, built around the feeling and the change the client is after. If a client is named in the elements, write it for them.',
      useAs: 'a short label such as "Advisor email opener" or "Client pitch opener".',
      move: 'an advisor move - what to lead the pitch with, or what to build the trip around.',
    }
  }
  return {
    copy: 'a vivid story hook - one to three sentences that make a travel audience feel the trip, evoking a specific person and a specific moment.',
    useAs: 'a short label such as "Story hook".',
    move: 'one line on what to do with it - what to lead with.',
  }
}

export async function POST(req: Request) {
  try {
    let body: { elements?: Element[]; mode?: unknown }
    try {
      body = await req.json()
    } catch {
      return Response.json({ error: 'Invalid JSON body' }, { status: 400 })
    }

    const elements = Array.isArray(body.elements) ? body.elements.filter((e) => e && typeof e.name === 'string') : []
    if (elements.length === 0) {
      return Response.json({ error: 'No reactive elements selected.' }, { status: 400 })
    }

    const brief = modeBrief(body.mode)
    const elementLines = elements.map((e) => (e.variant ? `${e.name}: ${e.variant}` : e.name)).join('\n')

    const ai = await withRetry(() =>
      getAi().models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Story elements to work from:\n${elementLines}\n\nBuild a Story Starter from them.`,
        config: {
          systemInstruction:
            `You are the synthesis engine for the Periodic Table of Travel Storytelling. From a few story elements you produce a "Story Starter" - a small, usable deliverable for a destination marketer or a travel advisor. You never hand back a plain description.\n` +
            `Return four parts:\n` +
            `- "angle": a short, sharp phrase under about 12 words naming what this story is really about - the human truth or emotional engine. Write it like a headline at the top of a creative brief (for example: "Permission to get lost" or "Proof you've still got it"). Never begin with "This story is about" or "It's about", and never restate the element names.\n` +
            `- "useAs": ${brief.useAs}\n` +
            `- "copy": ${brief.copy} It MUST make a creative leap - introduce one specific, concrete, sensory detail that the elements imply but do not state. Show the moment; do not reuse the element labels or their wording (such as "stretch", "comfort zone", "disorientation") in the copy. Never paraphrase the input list back.\n` +
            `- "move": ${brief.move} Make it a clear, concrete action the person can take.\n` +
            `Hard rules:\n` +
            `- Lead with the two or three strongest elements and let the rest lightly color it. Never just list or restate the inputs.\n` +
            `- Plain, declarative voice in present or near-future tense. No contrast constructions of any kind: avoid "not X but Y", "more than just X", and "X, but Y". No hedging words (could, might, may, perhaps). No tidy metaphor closers, no rule-of-three lists. Use plain hyphens, never em-dashes.\n` +
            `- Never use any of these words: ${BANNED}.\n` +
            `Output ONLY a valid JSON object with keys "angle", "useAs", "copy", "move". Do not wrap values in quotation marks. Do not use markdown backticks.`,
          responseMimeType: 'application/json',
          temperature: 0.8,
        },
      }),
    )

    let p: { angle?: unknown; useAs?: unknown; copy?: unknown; move?: unknown }
    try {
      p = parseModelJson(ai.text)
    } catch (e) {
      console.error('[travel-storytelling/generate] parse failed:', e)
      return Response.json({ error: 'The AI returned an unexpected response. Please try again.' }, { status: 502 })
    }
    const clean = (v: unknown) => (typeof v === 'string' ? v.trim().replace(/^["“]|["”]$/g, '') : '')
    const copy = clean(p?.copy)
    if (!copy) {
      return Response.json({ error: 'The AI returned an incomplete response. Please try again.' }, { status: 502 })
    }

    return Response.json({
      angle: clean(p?.angle),
      useAs: clean(p?.useAs),
      copy,
      move: clean(p?.move),
    })
  } catch (e) {
    console.error('[travel-storytelling/generate] error:', e)
    if (isTransientAiError(e)) {
      return Response.json({ error: 'The AI is busy right now — wait a few seconds and try again.' }, { status: 429 })
    }
    return Response.json({ error: 'Request failed. Please try again.' }, { status: 500 })
  }
}
