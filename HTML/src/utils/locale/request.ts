import {cookies, headers} from 'next/headers'
import {getRequestConfig} from 'next-intl/server'

import {ECookies} from '../type/ECookies'
import {EHeaders} from '../type/EHeaders'

import {type ILocale, isLocale} from './locales'
import {type ILocalization} from './locales/en'

const defLocale = 'pl'
async function loadLocaleMessages(locale: ILocale) {
  const messages = (await import(`@/utils/locale/locales/${locale}.ts`)).default as ILocalization
  return {locale, messages}
}

function parseAcceptLanguage(header: string | null): string[] {
  if (header === null) return []

  return header
    .split(',')
    .map((lang) => lang.split(';')[0].trim().split('-')[0].toLowerCase())
    .filter((lang) => lang.length === 2)
}

export async function serverGetLang() {
  const [cookieStore, header] = await Promise.all([cookies(), headers()])

  const cookieLocale = cookieStore.get(ECookies.locale)?.value
  if (cookieLocale && isLocale(cookieLocale)) {
    return cookieLocale
  }

  const acceptLanguage = parseAcceptLanguage(header.get(EHeaders.ACCEPT_LANGUAGE))
  acceptLanguage.forEach((lang) => {
    if (lang && isLocale(lang)) return lang
  })

  return defLocale
}

type IResult = Promise<{
  locale: ILocale
  messages: ILocalization
}>
export default getRequestConfig(async (): IResult => {
  return loadLocaleMessages(await serverGetLang())
})
