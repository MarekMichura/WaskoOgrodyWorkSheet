'use client'

import {ECookieNames} from '../type/common/ECookiesNames'

export function setCookieClient(name: ECookieNames, value: string, date?: Date) {
  const expires = date === undefined ? '' : `expires=${date.toUTCString()};`
  document.cookie = `${name}=${value};${expires} path=/; SameSite=Lax; Secure`
}
