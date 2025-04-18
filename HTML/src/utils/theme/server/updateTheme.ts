'use server'

import {cookies, headers} from 'next/headers'
import {redirect} from 'next/navigation'

import {ECookieNames} from '@/utils/type/common/ECookiesNames'
import {EHeaders} from '@/utils/type/common/EHeaders'

import {getChangedTheme} from '../getChangedTheme'

import {getThemeServer} from './getTheme'

export async function updateTheme() {
  const cookieStore = await cookies()
  const header = await headers()

  const {currentTheme, defaultTheme} = await getThemeServer()
  const path = header.get(EHeaders.X_URL)

  const theme = getChangedTheme(currentTheme, defaultTheme)

  cookieStore.set(ECookieNames.theme, theme)
  redirect(path ?? '/')
}
