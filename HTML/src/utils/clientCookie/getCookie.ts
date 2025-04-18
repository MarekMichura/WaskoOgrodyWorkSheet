'use client'

import {ECookieNames} from '../type/common/ECookiesNames'
import {ITheme} from '../type/common/iTheme'

export function getCookieClient(name: ECookieNames): ITheme | undefined {
  return document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith(name))
    ?.split('=')
    .at(1) as ITheme | undefined
}
