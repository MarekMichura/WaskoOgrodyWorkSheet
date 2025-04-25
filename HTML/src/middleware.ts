import {NextResponse, type NextRequest} from 'next/server'

import {ECookies} from '@/utils/type/ECookies'
import {EHeaders} from '@/utils/type/EHeaders'

import {checkIfRouteIsExtraAndParseToDefault} from './utils/locale/_routeHelper/routeHelper'

function redirectPaths(request: NextRequest, response: NextResponse<unknown>) {
  const {pathname} = request.nextUrl
  const clone = request.nextUrl.clone()

  const newPath = checkIfRouteIsExtraAndParseToDefault(pathname)
  if (newPath === undefined) return response

  clone.pathname = newPath
  return NextResponse.rewrite(clone)
}

export async function middleware(request: NextRequest) {
  let response = NextResponse.next()
  if (!request.url.includes('/_next/')) {
    response = redirectPaths(request, response)
    if (!request.cookies.has(ECookies.theme)) response.headers.set(EHeaders.SYSTEM_THEME_SET, 'Sec-CH-Prefers-Color-Scheme')

    const url = new URL(request.url)
    response.headers.set(EHeaders.X_URL, url.pathname + url.search)
    response.headers.set(EHeaders.X_QUERY, url.search.slice(1))
  }
  return response
}
