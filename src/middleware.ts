import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'
import { matchAiBot } from '@/lib/ai-bots'

// AI bot-hit log (30-day AI-visibility test, started 2026-11-24).
// Every request from a known AI crawler or agent writes one structured line to
// the runtime log: {"event":"ai_bot_hit","bot":...,"path":...,"ts":...}.
// When the GA4_API_SECRET env var is set, the same hit also goes to GA4 through
// the Measurement Protocol as an `ai_bot_hit` event (params: bot_name, page_path).
// Logging only: the response is the same for every visitor and every bot.
const GA4_MEASUREMENT_ID = process.env.GA4_MEASUREMENT_ID || 'G-DXWHJGXCKD'

function logAiBotHit(req: NextRequest, event: NextFetchEvent) {
  const bot = matchAiBot(req.headers.get('user-agent'))
  if (!bot) return

  const path = req.nextUrl.pathname
  console.log(JSON.stringify({ event: 'ai_bot_hit', bot, path, ts: new Date().toISOString() }))

  const secret = process.env.GA4_API_SECRET
  if (!secret) return
  event.waitUntil(
    fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${GA4_MEASUREMENT_ID}&api_secret=${secret}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // One fixed client per bot, so GA4 counts each crawler as a single user.
          client_id: `aibot.${bot.toLowerCase()}`,
          events: [
            {
              name: 'ai_bot_hit',
              params: {
                bot_name: bot,
                page_path: path,
                page_location: `https://janetteroush.com${path}`,
              },
            },
          ],
        }),
      }
    ).catch(() => undefined)
  )
}

// Password protection disabled - site is now public
// To re-enable, uncomment the middleware function below

// List of public paths that don't need the access code
// const PUBLIC_PATHS = ['/enter', '/api', '/_next', '/favicon.ico', '/brandusa-logo.png']

export function middleware(_req: NextRequest, event: NextFetchEvent) {
  // Logging must never affect the response.
  try {
    logAiBotHit(_req, event)
  } catch {
    // ignore
  }

  // Password protection disabled - allow all access
  return NextResponse.next()

  // Uncomment below to re-enable password protection:
  /*
  const { pathname } = _req.nextUrl

  // Allow public paths
  if (PUBLIC_PATHS.some(path => pathname.startsWith(path))) {
    return NextResponse.next()
  }

  // Check for access code cookie
  const hasAccess = _req.cookies.get('partner_access')?.value === 'GoTeamUSA'

  if (!hasAccess) {
    // Redirect to enter page
    const url = _req.nextUrl.clone()
    url.pathname = '/enter'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
  */
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|ipw/).*)',
  ],
}
