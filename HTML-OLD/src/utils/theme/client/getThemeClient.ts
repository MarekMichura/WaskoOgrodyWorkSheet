'use client'

import {getCookieClient} from '@/utils/clientCookie/getCookie'
import {ECookieNames} from '@/utils/type/common/ECookiesNames'
import {DARK_THEME, ITheme, LIGHT_THEME} from '@/utils/type/common/iTheme'

function getSystemPreferredTheme(): ITheme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK_THEME : LIGHT_THEME
}

export function getThemeClient() {
  const currentTheme = getCookieClient(ECookieNames.theme)
  const defaultTheme = getSystemPreferredTheme()
  const theme = currentTheme ?? defaultTheme

  return {currentTheme, defaultTheme, theme}
}
