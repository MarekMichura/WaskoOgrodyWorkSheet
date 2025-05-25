'use client'

import {type ECookie} from '@/utils/enum/ECookies'

export function getCookieClient(name: ECookie) {
  return document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith(name))
    ?.split('=')
    .at(1)
}
