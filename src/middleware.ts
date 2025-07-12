import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getUserCookie } from './lib/auth'

export function middleware(request: NextRequest) {
  const user = getUserCookie()
  const { pathname } = request.nextUrl

  if (['/', '/dashboard'].includes(pathname) && !user) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }

  if (pathname === '/auth' && user) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/dashboard', '/auth'],
}
