import { NextResponse } from 'next/server'

export function middleware(request) {
  const path = request.nextUrl.pathname
  
  // Define public paths that don't require authentication
  const isPublicPath = path === '/login' || path === '/register' || path === '/auth/login' || path === '/auth/register'
  
  // Get the session token from cookies
  const token = request.cookies.get('auth_session')?.value || ''

  // Handle the root path specific logic
  if (path === '/') {
      if (token) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
      } else {
        return NextResponse.redirect(new URL('/login', request.url))
      }
  }

  // If user is not logged in and tries to access a protected path
  if (!isPublicPath && !token) {
     return NextResponse.redirect(new URL('/login', request.url))
  }

  // If user is logged in and tries to access login/register, redirect to dashboard
  if (isPublicPath && token) {
     return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - img (public images folder)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|img).*)',
  ],
}
