import { GoogleGenAI } from '@google/genai'

export const runtime = 'nodejs'
export const maxDuration = 60

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
const TMDB_API_KEY = process.env.TMDB_API_KEY

type Element = { id: string; name: string; desc?: string }
type Verified = { title: string; year: string; poster: string | null; explanation: string }

async function verifyMovieWithTMDB(title: string, expectedYear: string) {
  try {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(title)}&year=${expectedYear}`
    const res = await fetch(url)
    if (!res.ok) return null
    const data = await res.json()
    if (data.results && data.results.length > 0) {
      const m = data.results[0]
      return {
        title: m.title,
        year: m.release_date ? m.release_date.split('-')[0] : expectedYear,
        posterPath: m.poster_path ? `https://image.tmdb.org/t/p/w500${m.poster_path}` : null,
      }
    }
    return null
  } catch {
    return null
  }
}

export async function POST(req: Request) {
  try {
    const { elements } = (await req.json()) as { elements: Element[] }
    if (!elements || elements.length === 0) {
      return Response.json({ error: 'Missing elements' }, { status: 400 })
    }

    const elementNames = elements.map((e) => e.name).join(', ')
    const elementContext = elements.map((e) => (e.desc ? `[${e.name}]: ${e.desc}` : `- ${e.name}`)).join('\n')

    // Stage 1: Creative generation (must use every element).
    const creativeAI = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Devise one original story concept that fuses ALL of the following storytelling elements into a single premise. Every element listed must be reflected in the premise — do not drop any:\n${elementContext}`,
      config: {
        systemInstruction:
          'You are an elite Hollywood script doctor. Distil the concept into a title and ONE punchy strapline — a single-sentence logline, like a movie-poster tagline. Output ONLY a valid JSON object with exactly two keys: "title" and "logline". The "logline" MUST be a single sentence. Do NOT include a plot summary, synopsis, or any other keys. Do not use markdown backticks.',
        responseMimeType: 'application/json',
        temperature: 0.85,
      },
    })
    const creativeOutput = JSON.parse((creativeAI.text || '').trim())

    // Stage 2: Factual indexing (zero temperature).
    const archivistAI = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Identify 3 real-world mainstream movies famous for combining or highlighting these tropes: ${elementNames}`,
      config: {
        systemInstruction:
          'You are a precise Pop-Culture Archivist. Output ONLY a valid JSON array of objects with keys: "title", "year", "explanation". Do not use markdown backticks.',
        responseMimeType: 'application/json',
        temperature: 0.0,
      },
    })
    const rawRecs = JSON.parse((archivistAI.text || '').trim()) as { title: string; year: string; explanation: string }[]

    // Stage 3: Live TMDB verification.
    const verifiedExamples: Verified[] = []
    for (const movie of rawRecs) {
      const v = await verifyMovieWithTMDB(movie.title, movie.year)
      if (v) verifiedExamples.push({ title: v.title, year: v.year, poster: v.posterPath, explanation: movie.explanation })
    }
    if (verifiedExamples.length === 0) {
      verifiedExamples.push({
        title: 'Inception', year: '2010', poster: 'https://image.tmdb.org/t/p/w500/l94wVf8iI89S6ST7wYgSSTFsXf0.jpg',
        explanation: 'A reliable fallback baseline displaying advanced structural narrative engineering.',
      })
    }

    return Response.json({ ...creativeOutput, realWorldExamples: verifiedExamples })
  } catch (e) {
    return Response.json({ error: e instanceof Error ? e.message : 'Unknown error' }, { status: 500 })
  }
}
