'use client'

import {setCookieClient} from '@/utils/clientCookie/setCookie'
import {ECookieNames} from '@/utils/type/common/ECookiesNames'

import {getChangedTheme} from '../getChangedTheme'

import {getThemeClient} from './getThemeClient'

export function updateThemeClient() {
  const {currentTheme, defaultTheme} = getThemeClient()
  const theme = getChangedTheme(currentTheme, defaultTheme)

  setCookieClient(ECookieNames.theme, theme)
  if (document.documentElement.getAttribute('data-theme') !== theme) {
    document.documentElement.setAttribute('data-theme', theme)
  }

  return theme
}
