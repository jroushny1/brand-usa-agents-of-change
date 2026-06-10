import { getAi, tmdbSearchFirst, posterUrl, parseModelJson, withRetry, isTransientAiError } from '@/lib/storytelling'

export const runtime = 'nodejs'
export const maxDuration = 60

type Element = { id: string; name: string }

export async function POST(req: Request) {
  try {
    let body: { movieTitle?: unknown; elements?: unknown }
    try {
      body = await req.json()
    } catch {
      return Response.json({ error: 'Invalid JSON body' }, { status: 400 })
    }
    const movieTitle = typeof body.movieTitle === 'string' ? body.movieTitle.trim() : ''
    if (!movieTitle) {
      return Response.json({ error: 'Missing movie title' }, { status: 400 })
    }
    const elements: Element[] = Array.isArray(body.elements) ? (body.elements as Element[]) : []

    const movie = await tmdbSearchFirst(movieTitle)
    if (!movie) {
      // 404 (standard) rather than the non-standard 444, which a CDN/edge could rewrite.
      return Response.json({ error: 'Not Found' }, { status: 404 })
    }

    const catalogue = elements.map((e) => `${e.id} = ${e.name}`).join('\n')
    const validIds = new Set(elements.map((e) => e.id))

    const analyzerAI = await withRetry(() => getAi().models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Analyze this film: ${movie.title}. Synopsis: "${movie.overview || '(no synopsis available)'}"\n\nValid storytelling element IDs (choose ONLY from this list, copy IDs verbatim):\n${catalogue}`,
      config: {
        systemInstruction:
          'Identify 3 to 6 storytelling elements embedded in this plot. Output ONLY a valid JSON object matching this schema: {"identifiedElementIds": ["id1", "id2"], "analyses": [{"id": "id1", "reason": "1 sentence explanation"}]}. Every "id" MUST be an exact-match ID copied verbatim from the supplied list. Do not invent IDs. Do not use markdown backticks.',
        responseMimeType: 'application/json',
        temperature: 0.1,
      },
    }))

    let payload: { identifiedElementIds?: unknown; analyses?: unknown }
    try {
      payload = parseModelJson(analyzerAI.text)
    } catch (e) {
      console.error('[storytelling/analyze] parse failed:', e)
      return Response.json({ error: 'The AI returned an unexpected response. Please try again.' }, { status: 502 })
    }

    const rawIds = Array.isArray(payload?.identifiedElementIds) ? (payload.identifiedElementIds as string[]) : []
    const rawAnalyses = Array.isArray(payload?.analyses)
      ? (payload.analyses as { id: string; reason: string }[])
      : []
    // Drop any hallucinated IDs the model invented outside the supplied catalogue.
    const elementsFound = validIds.size ? rawIds.filter((id) => validIds.has(id)) : rawIds
    const breakdowns = validIds.size ? rawAnalyses.filter((a) => a && validIds.has(a.id)) : rawAnalyses

    return Response.json({
      title: `${movie.title} (${movie.release_date ? movie.release_date.split('-')[0] : 'N/A'})`,
      synopsis: movie.overview || '',
      poster: posterUrl(movie.poster_path),
      elementsFound,
      breakdowns,
    })
  } catch (e) {
    console.error('[storytelling/analyze] error:', e)
    if (isTransientAiError(e)) {
      return Response.json({ error: 'The AI is busy right now — wait a few seconds and try again.' }, { status: 429 })
    }
    return Response.json({ error: 'Request failed. Please try again.' }, { status: 500 })
  }
}
