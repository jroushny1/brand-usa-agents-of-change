import { getAi, parseModelJson, withRetry, isTransientAiError } from '@/lib/storytelling'

export const runtime = 'nodejs'
export const maxDuration = 60

type Element = { name: string; variant?: string | null }

const BANNED =
  'luxury, paradise, bucket list, curated, authentic, immersive, breathtaking, unforgettable, once-in-a-lifetime, hidden gem'

// The deliverable each mode produces: the copy, its label, the action, and how to make the creative leap.
function modeBrief(mode: unknown): { copy: string; useAs: string; move: string; leap: string } {
  if (mode === 'dest') {
    return {
      copy: 'a destination invitation or social line - place copy that puts the reader inside one concrete moment and makes them want to go. Address the reader as "you", or evoke the scene in the third person.',
      useAs: 'a short label for where this copy goes, such as "Destination invitation", "Social caption", or "Campaign line".',
      move: 'a marketing move - what to build the campaign or the post around.',
      leap: 'Make the leap a single specific, concrete scene in the place - a particular time of day, a texture, a sound, a ritual. The place is the given; do not invent a different destination.',
    }
  }
  if (mode === 'advisor') {
    return {
      copy: 'a pitch opener a travel advisor could send to one specific client - one to three sentences, second person, built around the feeling and the change the client is after. If a client is named in the elements, write it for them.',
      useAs: 'a short label such as "Advisor email opener" or "Client pitch opener".',
      move: 'an advisor move - what to lead the pitch with, or what to build the trip around.',
      leap: 'Make the leap by committing to a concrete candidate within the United States - name a specific kind of place, region, or property the trip points to (for example: a cedar hot-springs lodge in the Colorado Rockies, a working ranch in Montana, a fish camp in the Florida Keys, a desert casita outside Marfa, Texas). The advisor can swap it; your job is a specific, surprising starting point. Anchor it with one concrete sensory particular - a time of day, a texture, a ritual.',
    }
  }
  return {
    copy: 'a vivid story hook - one to three sentences that make a travel audience feel the trip, evoking a specific person and a specific moment.',
    useAs: 'a short label such as "Story hook".',
    move: 'one line on what to do with it - what to lead with.',
    leap: 'Make the leap by committing to a specific place-type within the United States, or a single concrete, surprising scene the traveler steps into, anchored by one sensory particular.',
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
            `You are the synthesis engine for the Periodic Table of Travel Storytelling. From a few story elements you produce a "Story Starter" - a small, usable deliverable for a destination marketer or a travel advisor. You never hand back a plain description, and you never simply reword the inputs.\n` +
            `Return four parts:\n` +
            `- "angle": a short, sharp phrase under about 12 words naming what this story is really about - the human truth or emotional engine. Write it like a headline at the top of a creative brief (for example: "Permission to get lost" or "Proof you've still got it"). Never begin with "This story is about" or "It's about", and never restate the element names.\n` +
            `- "useAs": ${brief.useAs}\n` +
            `- "copy": ${brief.copy} ${brief.leap} Assume the elements are true and build PAST them - never restate, list, or paraphrase them. Avoid empty reassurance like "a memory only you share", "a place made just for you", "a truly special place", or "a tranquility all your own"; use a concrete particular instead. Open on a concrete physical scene at the named place - a specific sight, sound, smell, or texture in the first sentence; do not open with how they feel or what they are leaving behind. Keep every sentence concrete; do not end on a sentence that summarizes the feeling or lists abstractions.\n` +
            `- "move": ${brief.move} Make it a clear, concrete action the person can take.\n` +
            `Hard rules:\n` +
            `- This tool is for Brand USA, which promotes travel to the United States. Every place, region, or property you name must be in the USA. Never name a destination outside the United States.\n` +
            `- Lead with the two or three strongest elements and let the rest lightly color it. Never just list or restate the inputs.\n` +
            `- Plain, declarative voice in present or near-future tense. State what the moment is. No contrast constructions of any kind: avoid "not X but Y", "not just X, but Y", "more than just X", and "X, but Y". No tidy metaphor closers, no rule-of-three lists. Use plain hyphens, never em-dashes.\n` +
            `- Before you finish, re-read the copy and delete any "not X but Y", "not just X, but Y", or "more than just X" - state it directly instead.\n` +
            `- Never use any of these words: ${BANNED}.\n` +
            `Output ONLY a valid JSON object with keys "angle", "useAs", "copy", "move". Do not wrap values in quotation marks. Do not use markdown backticks.`,
          responseMimeType: 'application/json',
          temperature: 0.85,
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
