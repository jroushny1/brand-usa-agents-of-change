import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Password protection disabled - site is now public
// To re-enable, uncomment the middleware function below

// List of public paths that don't need the access code
// const PUBLIC_PATHS = ['/enter', '/api', '/_next', '/favicon.ico', '/brandusa-logo.png']

export function middleware(req: NextRequest) {
  // Password protection disabled - allow all access
  return NextResponse.next()

  // Uncomment below to re-enable password protection:
  /*
  const { pathname } = req.nextUrl

  // Allow public paths
  if (PUBLIC_PATHS.some(path => pathname.startsWith(path))) {
    return NextResponse.next()
  }

  // Check for access code cookie
  const hasAccess = req.cookies.get('partner_access')?.value === 'GoTeamUSA'

  if (!hasAccess) {
    // Redirect to enter page
    const url = req.nextUrl.clone()
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
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
