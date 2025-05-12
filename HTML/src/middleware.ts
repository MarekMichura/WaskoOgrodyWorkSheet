import {type NextRequest} from 'next/server'
import createMiddleware from 'next-intl/middleware'

import {routing} from '@/locale/routing'

const handleI18nRouting = createMiddleware(routing)
export default async function middleware(request: NextRequest) {
  const result = handleI18nRouting(request)
  return result
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
