import { GoogleGenAI } from '@google/genai'

// Shared server-side helpers for the /storytelling API routes.
export const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

const TMDB_API_KEY = process.env.TMDB_API_KEY
const TMDB_BASE = 'https://api.themoviedb.org/3'
const TMDB_IMG = 'https://image.tmdb.org/t/p/w500'
const TMDB_TIMEOUT_MS = 8000

export function posterUrl(path: string | null | undefined): string | null {
  return path ? `${TMDB_IMG}${path}` : null
}

/** Parse a model's text output as JSON, tolerating ```json fences / whitespace. Throws on empty or invalid. */
export function parseModelJson<T = unknown>(text: string | null | undefined): T {
  let s = (text ?? '').trim()
  if (s.startsWith('```')) {
    s = s.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim()
  }
  if (!s) throw new Error('Model returned empty output')
  return JSON.parse(s) as T
}

type TmdbMovie = {
  title: string
  overview?: string | null
  release_date?: string | null
  poster_path?: string | null
}

/** Search TMDB and return the first result, or null on no-result / upstream error / timeout. */
export async function tmdbSearchFirst(query: string, year?: string): Promise<TmdbMovie | null> {
  try {
    const yq = year ? `&year=${encodeURIComponent(year)}` : ''
    const url = `${TMDB_BASE}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}${yq}`
    const res = await fetch(url, { signal: AbortSignal.timeout(TMDB_TIMEOUT_MS) })
    if (!res.ok) return null
    const data = await res.json()
    return data?.results?.[0] ?? null
  } catch {
    return null
  }
}

/** Verify a film exists on TMDB; returns a normalized record or null. */
export async function verifyMovie(title: string, expectedYear: string) {
  const m = await tmdbSearchFirst(title, expectedYear)
  if (!m) return null
  return {
    title: m.title,
    year: m.release_date ? m.release_date.split('-')[0] : String(expectedYear),
    poster: posterUrl(m.poster_path),
  }
}
