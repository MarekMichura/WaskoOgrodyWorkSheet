'use server'

import {cookies, headers} from 'next/headers'
import {redirect} from 'next/navigation'

import {switchTheme} from '@/utils/style/theme/switchTheme'
import {ECookies} from '@/utils/type/ECookies'
import {EHeaders} from '@/utils/type/EHeaders'

import {serverGetTheme} from './serverGetTheme'

export async function serverChangeTheme() {
  const [theme, header, cookieStore] = await Promise.all([serverGetTheme(), headers(), cookies()])

  const path = header.get(EHeaders.X_URL)
  const newTheme = switchTheme(theme)

  cookieStore.set(ECookies.theme, newTheme)
  redirect(path ?? '/')
}
