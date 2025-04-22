import { NextResponse } from 'next/server'

export function middleware(request) {
  const pathname = request.nextUrl.pathname

  if (pathname === '/') {
    const acceptLang = request.headers.get('accept-language') || ''
    if (acceptLang.toLowerCase().startsWith('ko')) {
      const url = request.nextUrl.clone()
      url.pathname = '/invest-ko'
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}