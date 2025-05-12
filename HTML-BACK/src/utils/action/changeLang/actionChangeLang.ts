'use server'

import {cookies, headers} from 'next/headers'
import {redirect} from 'next/navigation'

import {isLocale} from '@/utils/locale/locales'
import {ECookies} from '@/utils/type/ECookies'
import {EHeaders} from '@/utils/type/EHeaders'

export async function actionChangeLang(a: FormData) {
  const [cookieStore, header] = await Promise.all([cookies(), headers()])
  const newLocale = a.get('Language')?.toString()

  if (isLocale(newLocale) && cookieStore.get(ECookies.locale)?.value !== newLocale) {
    cookieStore.set(ECookies.locale, newLocale)

    redirect(header.get(EHeaders.X_URL) ?? '/')
  }
}
