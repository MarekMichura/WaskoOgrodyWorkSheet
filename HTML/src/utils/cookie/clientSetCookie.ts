'use client'

import {type ECookieValues} from '@/utils/type/ECookies'

function clientSetCookie(name: ECookieValues, value: string, date?: Date) {
  const expires = date === undefined ? '' : `expires=${date.toUTCString()};`

  document.cookie = `${name}=${value};${expires} path=/; SameSite=Lax; Secure`
}

export default clientSetCookie
