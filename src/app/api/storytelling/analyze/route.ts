import { GoogleGenAI } from '@google/genai'

export const runtime = 'nodejs'
export const maxDuration = 60

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
const TMDB_API_KEY = process.env.TMDB_API_KEY

type Element = { id: string; name: string }

export async function POST(req: Request) {
  try {
    const { movieTitle, elements } = (await req.json()) as { movieTitle: string; elements: Element[] }

    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(movieTitle)}`
    const searchRes = await fetch(searchUrl)
    const searchData = await searchRes.json()
    if (!searchData.results || searchData.results.length === 0) {
      return Response.json({ error: 'Not Found' }, { status: 444 })
    }

    const movie = searchData.results[0]
    const catalogue = (elements || []).map((e) => `${e.id} = ${e.name}`).join('\n')

    const analyzerAI = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Analyze this film: ${movie.title}. Synopsis: "${movie.overview}"\n\nValid storytelling element IDs (choose ONLY from this list, copy IDs verbatim):\n${catalogue}`,
      config: {
        systemInstruction:
          'Identify 3 to 6 storytelling elements embedded in this plot. Output ONLY a valid JSON object matching this schema: {"identifiedElementIds": ["id1", "id2"], "analyses": [{"id": "id1", "reason": "1 sentence explanation"}]}. Every "id" MUST be an exact-match ID copied verbatim from the supplied list. Do not invent IDs. Do not use markdown backticks.',
        responseMimeType: 'application/json',
        temperature: 0.1,
      },
    })

    const payload = JSON.parse((analyzerAI.text || '').trim()) as {
      identifiedElementIds: string[]
      analyses: { id: string; reason: string }[]
    }

    return Response.json({
      title: `${movie.title} (${movie.release_date ? movie.release_date.split('-')[0] : 'N/A'})`,
      synopsis: movie.overview,
      poster: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null,
      elementsFound: payload.identifiedElementIds,
      breakdowns: payload.analyses,
    })
  } catch (e) {
    return Response.json({ error: e instanceof Error ? e.message : 'Unknown error' }, { status: 500 })
  }
}
