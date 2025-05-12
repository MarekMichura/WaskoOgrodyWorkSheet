'use client'

import {type ECookieValues} from '@/utils/enums/ECookies'

export function getCookieClient(name: ECookieValues) {
  return document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith(name))
    ?.split('=')
    .at(1)
}
