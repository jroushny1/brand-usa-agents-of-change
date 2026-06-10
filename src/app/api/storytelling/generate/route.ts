import { getAi, verifyMovie, parseModelJson, withRetry, isTransientAiError } from '@/lib/storytelling'

export const runtime = 'nodejs'
export const maxDuration = 60

type Element = { id: string; name: string; desc?: string }
type Rec = { title: string; year: string | number; explanation: string }
type Verified = { title: string; year: string; poster: string | null; explanation: string }

export async function POST(req: Request) {
  try {
    let body: { elements?: Element[]; steer?: unknown }
    try {
      body = await req.json()
    } catch {
      return Response.json({ error: 'Invalid JSON body' }, { status: 400 })
    }
    const elements = body.elements
    if (!Array.isArray(elements) || elements.length === 0) {
      return Response.json({ error: 'Missing elements' }, { status: 400 })
    }
    // Optional freeform creative direction (e.g. "about tourism"). Capped to bound prompt size.
    const steer = typeof body.steer === 'string' ? body.steer.trim().slice(0, 200) : ''

    const elementNames = elements.map((e) => e.name).join(', ')
    const elementContext = elements.map((e) => (e.desc ? `[${e.name}]: ${e.desc}` : `- ${e.name}`)).join('\n')
    const steerLine = steer ? `\n\nAdditional creative direction (the concept MUST honor this): ${steer}` : ''

    // Stage 1: title + one-line strapline (must use every element).
    const creativeAI = await withRetry(() => getAi().models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Devise one original story concept that fuses ALL of the following storytelling elements into a single premise. Every element listed must be reflected in the premise — do not drop any:\n${elementContext}${steerLine}`,
      config: {
        systemInstruction:
          'You are an elite Hollywood script doctor. Distil the concept into a title and ONE punchy strapline — a single-sentence logline, like a movie-poster tagline. Output ONLY a valid JSON object with exactly two keys: "title" and "logline". The "logline" MUST be a single sentence. Do NOT include a plot summary, synopsis, or any other keys. Do not use markdown backticks.',
        responseMimeType: 'application/json',
        temperature: 0.85,
      },
    }))
    let creative: { title?: unknown; logline?: unknown }
    try {
      creative = parseModelJson(creativeAI.text)
    } catch (e) {
      console.error('[storytelling/generate] stage-1 parse failed:', e)
      return Response.json({ error: 'The AI returned an unexpected response. Please try again.' }, { status: 502 })
    }
    if (!creative || typeof creative.title !== 'string' || typeof creative.logline !== 'string') {
      return Response.json({ error: 'The AI returned an incomplete response. Please try again.' }, { status: 502 })
    }

    // Stage 2: real-world comps (low temperature). Parse defensively — failure here is non-fatal.
    let rawRecs: Rec[] = []
    try {
      const archivistAI = await withRetry(() => getAi().models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Identify 3 real-world mainstream movies famous for combining or highlighting these tropes: ${elementNames}`,
        config: {
          systemInstruction:
            'You are a precise Pop-Culture Archivist. Output ONLY a valid JSON array of objects with keys: "title", "year", "explanation". Do not use markdown backticks.',
          responseMimeType: 'application/json',
          temperature: 0.0,
        },
      }))
      const parsed = parseModelJson<unknown>(archivistAI.text)
      const arr = Array.isArray(parsed)
        ? parsed
        : ((parsed as { movies?: unknown[]; results?: unknown[] })?.movies ??
           (parsed as { results?: unknown[] })?.results ?? [])
      rawRecs = (arr as Rec[]).filter((r) => r && typeof r.title === 'string')
    } catch (e) {
      console.error('[storytelling/generate] stage-2 parse failed (non-fatal):', e)
      rawRecs = []
    }

    // Stage 3: TMDB verification, in parallel.
    const verifiedExamples: Verified[] = (
      await Promise.all(
        rawRecs.slice(0, 5).map(async (movie) => {
          const v = await verifyMovie(movie.title, String(movie.year))
          return v ? { ...v, explanation: movie.explanation ?? '' } : null
        }),
      )
    ).filter((v): v is Verified => v !== null)

    if (verifiedExamples.length === 0) {
      verifiedExamples.push({
        title: 'Inception',
        year: '2010',
        poster: null,
        explanation: 'A reliable fallback baseline displaying advanced structural narrative engineering.',
      })
    }

    return Response.json({ title: creative.title, logline: creative.logline, realWorldExamples: verifiedExamples })
  } catch (e) {
    console.error('[storytelling/generate] error:', e)
    if (isTransientAiError(e)) {
      return Response.json({ error: 'The AI is busy right now — wait a few seconds and try again.' }, { status: 429 })
    }
    return Response.json({ error: 'Request failed. Please try again.' }, { status: 500 })
  }
}
