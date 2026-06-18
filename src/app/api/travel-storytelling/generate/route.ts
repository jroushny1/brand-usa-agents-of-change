import { getAi, parseModelJson, withRetry, isTransientAiError } from '@/lib/storytelling'

export const runtime = 'nodejs'
export const maxDuration = 60

type Element = { name: string; variant?: string | null }

const BANNED =
  'luxury, paradise, bucket list, curated, authentic, immersive, breathtaking, unforgettable, once-in-a-lifetime, hidden gem'

// What artifact each mode should produce, and the point of view it takes.
function modeBrief(mode: unknown): { artifact: string; pov: string } {
  if (mode === 'dest') {
    return {
      artifact:
        'a destination invitation — one or two short sentences of place copy that make a reader want to go.',
      pov: 'Address the reader as "you" and put them inside the scene. Name what they will feel or who they become there, anchored in one concrete sensory moment. A landscape with no person in it is scenery, not an invitation.',
    }
  }
  if (mode === 'advisor') {
    return {
      artifact:
        'a pitch seed a travel advisor could send to one specific client — one or two short sentences that frame the trip around who that client is and what they quietly want.',
      pov: 'Write about the client in the third person, or address them as "you". If a specific client is named in the elements (for example "the Hendersons, 30th anniversary"), write it for them by name. Sell the feeling first.',
    }
  }
  return {
    artifact: 'a single, vivid story hook that makes a travel audience feel the trip.',
    pov: 'Evoke a specific traveler and a specific moment in the second or third person.',
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

    const { artifact, pov } = modeBrief(body.mode)
    const elementLines = elements.map((e) => (e.variant ? `${e.name}: ${e.variant}` : e.name)).join('\n')

    const ai = await withRetry(() =>
      getAi().models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Story elements to work from:\n${elementLines}\n\nWrite ${artifact}`,
        config: {
          systemInstruction:
            `You are the synthesis engine for the Periodic Table of Travel Storytelling. You turn a few story elements into copy a destination marketer or a travel advisor could actually use.\n` +
            `Point of view: ${pov}\n` +
            `Hard rules:\n` +
            `- Never write in the first person. No "I", "we", "us", "our". You evoke someone else's story so a reader can step into it; you do not narrate your own.\n` +
            `- Lead with the two or three strongest elements and let the rest lightly color the scene. Do not force every element in — a sentence stuffed with all of them reads as a list.\n` +
            `- One or two short sentences. Concrete and sensory. Real human stakes. Imply a specific person or place, never a generic one.\n` +
            `- Plain, declarative voice in present or near-future tense. State what the moment is. No contrast constructions of any kind: avoid "not X but Y", "more than just X", and "X, but Y". No tidy metaphor closers, no "from X to Y" wind-ups, no rule-of-three lists.\n` +
            `- Write with conviction. Avoid hedging words: could, might, may, perhaps, maybe.\n` +
            `- Never use any of these words: ${BANNED}.\n` +
            `Output ONLY a valid JSON object with exactly one key, "hook", whose value is the copy with no surrounding quotation marks. Do not use markdown backticks.`,
          responseMimeType: 'application/json',
          temperature: 0.8,
        },
      }),
    )

    let parsed: { hook?: unknown }
    try {
      parsed = parseModelJson(ai.text)
    } catch (e) {
      console.error('[travel-storytelling/generate] parse failed:', e)
      return Response.json({ error: 'The AI returned an unexpected response. Please try again.' }, { status: 502 })
    }
    if (!parsed || typeof parsed.hook !== 'string' || !parsed.hook.trim()) {
      return Response.json({ error: 'The AI returned an incomplete response. Please try again.' }, { status: 502 })
    }

    const hook = parsed.hook.trim().replace(/^["“]|["”]$/g, '')
    return Response.json({ hook })
  } catch (e) {
    console.error('[travel-storytelling/generate] error:', e)
    if (isTransientAiError(e)) {
      return Response.json({ error: 'The AI is busy right now — wait a few seconds and try again.' }, { status: 429 })
    }
    return Response.json({ error: 'Request failed. Please try again.' }, { status: 500 })
  }
}
