'use server'

import {cookies, headers} from 'next/headers'
import {cache} from 'react'

import {isInPrimitiveArray} from '@/utils/type/helpTypes/_isPrimitiveArray'
import {ECookies} from '@/utils/type/ECookies'
import {EHeaders} from '@/utils/type/EHeaders'
import {EThemes, type EThemeValues} from '@/utils/type/EThemes'

export const serverGetTheme = cache(async (): Promise<EThemeValues> => {
  const [cookieStore, header] = await Promise.all([cookies(), headers()])
  const currentTheme = cookieStore.get(ECookies.theme)?.value
  const defaultTheme = header.get(EHeaders.SYSTEM_THEME_GET)

  if (isInPrimitiveArray(currentTheme, Object.values(EThemes))) return currentTheme
  if (isInPrimitiveArray(defaultTheme, Object.values(EThemes))) return defaultTheme
  return EThemes.dark
})
