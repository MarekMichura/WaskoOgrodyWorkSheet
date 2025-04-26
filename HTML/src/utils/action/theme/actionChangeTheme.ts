'use server'

import {cookies, headers} from 'next/headers'
import {redirect} from 'next/navigation'

import {serverGetTheme} from '@/utils/action/theme/serverGetTheme'
import {switchTheme} from '@/utils/style/theme/switchTheme'
import {ECookies} from '@/utils/type/ECookies'
import {EHeaders} from '@/utils/type/EHeaders'

export async function actionChangeTheme() {
  const [theme, cookieStore, header] = await Promise.all([serverGetTheme(), cookies(), headers()])
  const newTheme = switchTheme(theme)

  cookieStore.set(ECookies.theme, newTheme)
  redirect(header.get(EHeaders.X_URL) ?? '/')
}
