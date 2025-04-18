import {NextRequest, NextResponse} from 'next/server'

import {ECookieNames} from './utils/type/common/ECookiesNames'
import {EHeaders} from './utils/type/common/EHeaders'

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()
  if (!request.url.includes('_next/static')) {
    if (!request.cookies.has(ECookieNames.theme)) {
      response.headers.set(EHeaders.SYSTEM_THEME_SET, 'Sec-CH-Prefers-Color-Scheme')
    }
    const url = new URL(request.url)
    response.headers.set(EHeaders.X_URL, url.pathname + url.search)
    response.headers.set(EHeaders.X_QUERY, url.search.slice(1))
  }
  return response
}
