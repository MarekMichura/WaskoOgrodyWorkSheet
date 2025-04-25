'use client'

import clientSetCookie from '@/utils/cookie/clientSetCookie'
import {switchTheme} from '@/utils/style/theme/switchTheme'
import {ECookies} from '@/utils/type/ECookies'

import {clientGetTheme} from './clientGetTheme'

export async function clientChangeTheme() {
  const theme = await clientGetTheme()
  const newTheme = switchTheme(theme)

  clientSetCookie(ECookies.theme, newTheme)
  document.documentElement.setAttribute('data-theme', newTheme)

  return newTheme
}
