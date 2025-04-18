'use server'

import {cookies, headers} from 'next/headers'
import {cache} from 'react'

import {ECookieNames} from '@/utils/type/common/ECookiesNames'
import {EHeaders} from '@/utils/type/common/EHeaders'
import {DARK_THEME, ITheme} from '@/utils/type/common/iTheme'

import {isValidTheme} from '../isValidTheme'

export const getThemeServer = cache(async () => {
  let currentTheme = (await cookies()).get(ECookieNames.theme)?.value as ITheme | undefined
  let defaultTheme = (await headers()).get(EHeaders.SYSTEM_THEME_GET) as ITheme | undefined

  currentTheme = isValidTheme(currentTheme) ? currentTheme : undefined
  defaultTheme = isValidTheme(defaultTheme) ? defaultTheme : undefined
  const theme = currentTheme ?? defaultTheme ?? DARK_THEME

  return {currentTheme, defaultTheme, theme}
})
