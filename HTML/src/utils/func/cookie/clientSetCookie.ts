'use client'

import {type ECookie} from '@/utils/enum/ECookies'

export function clientSetCookie(name: ECookie, value: string, date?: Date) {
  const expires = date === undefined ? '' : `expires=${date.toUTCString()};`

  document.cookie = `${name}=${value};${expires}path=/;SameSite=Lax;`
}
