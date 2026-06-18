import { getAi, parseModelJson, withRetry, isTransientAiError } from '@/lib/storytelling'

export const runtime = 'nodejs'
export const maxDuration = 60

type Element = { sym: string; name: string }

const INERT =
  'luxury, bucket list, paradise, hidden gem, authentic, curated, immersive, breathtaking, unforgettable, once-in-a-lifetime, and similar empty abstractions'

function lensFor(mode: unknown): string {
  if (mode === 'dest') return 'This is destination/place marketing — weight possibility, identity, and counter-narrative.'
  if (mode === 'advisor')
    return "This is a travel advisor's client-facing copy — weight specificity and one real person."
  return 'General travel storytelling.'
}

export async function POST(req: Request) {
  try {
    let body: { copy?: unknown; elements?: unknown; mode?: unknown }
    try {
      body = await req.json()
    } catch {
      return Response.json({ error: 'Invalid JSON body' }, { status: 400 })
    }

    const copy = typeof body.copy === 'string' ? body.copy.trim() : ''
    if (copy.length < 12) {
      return Response.json({ error: 'Paste a longer passage — at least a sentence or two.' }, { status: 400 })
    }

    const elements: Element[] = Array.isArray(body.elements)
      ? (body.elements as Element[]).filter((e) => e && typeof e.sym === 'string' && typeof e.name === 'string')
      : []
    const catalogue = elements.map((e) => `${e.sym}=${e.name}`).join('; ')
    const validIds = new Set(elements.map((e) => e.sym))

    const ai = await withRetry(() =>
      getAi().models.generateContent({
        model: 'gemini-2.5-flash',
        contents:
          `Analyze this travel marketing copy against the Periodic Table of Travel Storytelling. ${lensFor(body.mode)}\n` +
          `CATALOG (symbol=name): ${catalogue}.\n` +
          `INERT CLICHÉS (noble gases): ${INERT}.\n` +
          `COPY: """${copy}"""`,
        config: {
          systemInstruction:
            `You are a precise storytelling diagnostician. Output ONLY a valid JSON object with these keys: ` +
            `"present" (array of catalog SYMBOLS clearly evident in the copy, copied verbatim from the catalog), ` +
            `"missing" (array of 3-5 catalog SYMBOLS with the highest storytelling value that are absent and would most improve it, verbatim from the catalog), ` +
            `"inert_terms" (array of the actual cliché/abstract phrases found in the copy, verbatim), ` +
            `"inert_pct" (integer 0-100: how much of the copy's emotional weight rests on inert/abstract language), ` +
            `"verdict" (one dry, specific, expert sentence telling them exactly what to fix). ` +
            `Every symbol MUST be an exact-match copied verbatim from the supplied catalog. Do not invent symbols. Do not use markdown backticks.`,
          responseMimeType: 'application/json',
          temperature: 0.2,
        },
      }),
    )

    let j: {
      present?: unknown
      missing?: unknown
      inert_terms?: unknown
      inert_pct?: unknown
      verdict?: unknown
    }
    try {
      j = parseModelJson(ai.text)
    } catch (e) {
      console.error('[travel-storytelling/analyze] parse failed:', e)
      return Response.json({ error: 'The AI returned an unexpected response. Please try again.' }, { status: 502 })
    }

    const onlyValid = (arr: unknown): string[] =>
      Array.isArray(arr)
        ? (arr as unknown[]).filter((s): s is string => typeof s === 'string' && (validIds.size === 0 || validIds.has(s)))
        : []
    const strings = (arr: unknown): string[] =>
      Array.isArray(arr) ? (arr as unknown[]).filter((s): s is string => typeof s === 'string') : []
    const pct = Math.max(0, Math.min(100, parseInt(String(j?.inert_pct), 10) || 0))

    return Response.json({
      present: onlyValid(j?.present),
      missing: onlyValid(j?.missing),
      inert_terms: strings(j?.inert_terms),
      inert_pct: pct,
      verdict: typeof j?.verdict === 'string' ? j.verdict : '',
    })
  } catch (e) {
    console.error('[travel-storytelling/analyze] error:', e)
    if (isTransientAiError(e)) {
      return Response.json({ error: 'The AI is busy right now — wait a few seconds and try again.' }, { status: 429 })
    }
    return Response.json({ error: 'Request failed. Please try again.' }, { status: 500 })
  }
}
