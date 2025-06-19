import {type NextRequest} from 'next/server'
import createMiddleware from 'next-intl/middleware'

import {routing} from '@/locale/routing'

import {EHeaders} from './utils/enum/EHeaders'

const handleI18nRouting = createMiddleware(routing)
export default async function middleware(request: NextRequest) {
  const response = handleI18nRouting(request)
  if (!request.url.includes('/_next/')) {
    const url = new URL(request.url)
    response.headers.set(EHeaders.X_URL, url.pathname + url.search)
    response.headers.set(EHeaders.X_QUERY, url.search.slice(1))
  }
  return response
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
