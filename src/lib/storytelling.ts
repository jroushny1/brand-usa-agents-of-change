import { GoogleGenAI } from '@google/genai'

// Shared server-side helpers for the /storytelling API routes.
function requireEnv(name: string): string {
  const v = process.env[name]
  if (!v) throw new Error(`Missing required environment variable: ${name}`)
  return v
}

// Constructed lazily so a missing key fails with a clear error at request time, not at import.
let _ai: GoogleGenAI | undefined
export function getAi(): GoogleGenAI {
  return (_ai ??= new GoogleGenAI({ apiKey: requireEnv('GEMINI_API_KEY') }))
}
const TMDB_BASE = 'https://api.themoviedb.org/3'
const TMDB_IMG = 'https://image.tmdb.org/t/p/w500'
const TMDB_TIMEOUT_MS = 8000

export function posterUrl(path: string | null | undefined): string | null {
  return path ? `${TMDB_IMG}${path}` : null
}

const RATE_RE = /429|rate.?limit|quota|exhaust|resource_exhausted|503|unavailable|overloaded|too many requests/i

export function isTransientAiError(e: unknown): boolean {
  return RATE_RE.test(String((e as Error)?.message ?? e))
}

/** Retry a flaky AI/network call on transient (rate-limit / overloaded / 5xx) errors with backoff. */
export async function withRetry<T>(fn: () => Promise<T>, tries = 3): Promise<T> {
  let lastErr: unknown
  for (let i = 0; i < tries; i++) {
    try {
      return await fn()
    } catch (e) {
      lastErr = e
      if (i === tries - 1 || !isTransientAiError(e)) throw e
      await new Promise((r) => setTimeout(r, 1200 * (i + 1) + Math.floor(Math.random() * 400)))
    }
  }
  throw lastErr
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
  const apiKey = requireEnv('TMDB_API_KEY')
  try {
    const yq = year ? `&year=${encodeURIComponent(year)}` : ''
    const url = `${TMDB_BASE}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}${yq}`
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
