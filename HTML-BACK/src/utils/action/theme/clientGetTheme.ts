'use client'

import {getCookieClient} from '@/utils/cookie/clientGetCookie'
import {ECookies} from '@/utils/type/ECookies'
import {EThemes, type EThemeValues} from '@/utils/type/EThemes'
import {isInPrimitiveArray} from '@/utils/type/helpTypes/_isPrimitiveArray'

export function clientGetTheme(): EThemeValues {
  const currentTheme = getCookieClient(ECookies.theme)
  const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? EThemes.dark : EThemes.light

  if (isInPrimitiveArray(currentTheme, Object.values(EThemes))) return currentTheme
  if (isInPrimitiveArray(defaultTheme, Object.values(EThemes))) return defaultTheme
  return EThemes.dark
}
