import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function isAuthenticated(request: NextRequest): boolean {
  const userCookie = request.cookies.get('user')?.value
  if (!userCookie) return false

  try {
    const user = JSON.parse(userCookie)
    return !!user?.name?.first
  } catch {
    return false
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  console.log(`[Middleware] Pathname: ${pathname}`)

  const isAuth = isAuthenticated(request)

  // Private routes
  const privateRoutes = ['/', '/dashboard']
  if (privateRoutes.includes(pathname)) {
    if (!isAuth) {
      console.log(`[Middleware] Unauthorized access to ${pathname}, redirecting to /auth`)
      return NextResponse.redirect(new URL('/auth', request.url))
    }
  }

  // Redirect logged-in user away from /auth
  if (pathname === '/auth' && isAuth) {
    console.log(`[Middleware] Logged-in user on /auth, redirecting to /dashboard`)
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/dashboard', '/auth'],
}
