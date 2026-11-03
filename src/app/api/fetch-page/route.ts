// Server-side page fetcher for the AI audit tool (/ai-audit).
// Replaces the public allorigins.win proxy, which fails intermittently (522s)
// and is blocked by many sites. Returns { contents, status } — the same
// `contents` shape allorigins returned, so the client code barely changes.
// Guarded against SSRF: http(s) on standard ports only, every redirect hop
// re-checked, and no private, loopback or link-local addresses.

import { lookup } from 'node:dns/promises'
import { isIP } from 'node:net'

export const runtime = 'nodejs'
export const maxDuration = 30

const MAX_BYTES = 5_000_000
const TIMEOUT_MS = 15_000
const MAX_REDIRECTS = 5

const BROWSER_HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
  Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,text/plain;q=0.8,*/*;q=0.5',
  'Accept-Language': 'en-US,en;q=0.9',
}

function isPrivateAddress(ip: string): boolean {
  if (isIP(ip) === 4) {
    const [a, b] = ip.split('.').map(Number)
    return (
      a === 0 || a === 10 || a === 127 ||
      (a === 100 && b >= 64 && b <= 127) ||
      (a === 169 && b === 254) ||
      (a === 172 && b >= 16 && b <= 31) ||
      (a === 192 && b === 168) ||
      a >= 224
    )
  }
  const v6 = ip.toLowerCase()
  if (v6.startsWith('::ffff:')) return isPrivateAddress(v6.slice(7))
  return (
    v6 === '::' || v6 === '::1' ||
    v6.startsWith('fc') || v6.startsWith('fd') ||
    v6.startsWith('fe8') || v6.startsWith('fe9') || v6.startsWith('fea') || v6.startsWith('feb') ||
    v6.startsWith('ff')
  )
}

async function assertPublicUrl(raw: string): Promise<URL> {
  const url = new URL(raw)
  if (url.protocol !== 'http:' && url.protocol !== 'https:') throw new Error('Only http and https URLs are supported')
  if (url.port && url.port !== '80' && url.port !== '443') throw new Error('Only standard ports are supported')
  if (url.username || url.password) throw new Error('URLs with credentials are not supported')
  const host = url.hostname.replace(/^\[|\]$/g, '')
  if (host === 'localhost' || host.endsWith('.localhost') || host.endsWith('.internal')) {
    throw new Error('That address is not allowed')
  }
  const addresses = isIP(host) ? [{ address: host }] : await lookup(host, { all: true })
  if (!addresses.length || addresses.some((a) => isPrivateAddress(a.address))) {
    throw new Error('That address is not allowed')
  }
  return url
}

async function readCapped(res: Response): Promise<string> {
  if (!res.body) return ''
  const reader = res.body.getReader()
  const chunks: Uint8Array[] = []
  let total = 0
  for (;;) {
    const { done, value } = await reader.read()
    if (done) break
    total += value.byteLength
    if (total > MAX_BYTES) {
      await reader.cancel()
      break
    }
    chunks.push(value)
  }
  return new TextDecoder().decode(Buffer.concat(chunks))
}

export async function GET(req: Request) {
  const target = new URL(req.url).searchParams.get('url')
  if (!target) return Response.json({ error: 'Missing url parameter' }, { status: 400 })

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
  try {
    let current = await assertPublicUrl(target)
    for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
      const res = await fetch(current, { headers: BROWSER_HEADERS, redirect: 'manual', signal: controller.signal })
      const location = res.headers.get('location')
      if (res.status >= 300 && res.status < 400 && location) {
        current = await assertPublicUrl(new URL(location, current).toString())
        continue
      }
      const contents = res.ok ? await readCapped(res) : ''
      return Response.json(
        { contents, status: res.status, finalUrl: current.toString() },
        { headers: { 'Cache-Control': 'no-store' } },
      )
    }
    return Response.json({ contents: '', status: 310, error: 'Too many redirects' })
  } catch (err) {
    const message = controller.signal.aborted ? 'Timed out' : err instanceof Error ? err.message : 'Fetch failed'
    return Response.json({ contents: '', status: 0, error: message })
  } finally {
    clearTimeout(timer)
  }
}
