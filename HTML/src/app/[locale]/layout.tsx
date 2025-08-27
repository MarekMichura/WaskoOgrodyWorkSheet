import {type Metadata} from 'next'
import {NextIntlClientProvider} from 'next-intl'
import {getMessages, setRequestLocale} from 'next-intl/server'

import {type ILocale, routing} from '@/locale/routing'
import {ELang} from '@/utils/enum/ELang'
import {clsx} from '@/utils/func/clsx'
import {playfair} from '@/utils/style/_font/bold'
import {nunito} from '@/utils/style/_font/normal'
import {type IChildren} from '@/utils/type/IChildren'
import {type IParams} from '@/utils/type/IParams'

import {type IParamsLocale} from '../../utils/type/IParamsLocale'
import {metadata} from '../_metadata/metadata'
import {switchMetadata} from '../_metadata/switchMetadata'

import InitGSAP from './_con/initGSAP/initGSAP'
import s from './css.module.scss'

export function generateStaticParams(): Array<{locale: ILocale}> {
  return routing.locales.map((locale) => ({locale}))
}

export async function generateMetadata({params}: IParamsLocale): Promise<Metadata> {
  const {locale} = await params
  const metadataLocale = switchMetadata[locale]

  return {
    ...metadata,
    ...metadataLocale,
    openGraph: {...metadata.openGraph, ...metadataLocale.openGraph},
    twitter: {...metadata.twitter, ...metadataLocale.twitter},
  }
}

export const dynamic = 'force-static'
export const dynamicParams = false
async function HomeLayout({children, params}: IChildren & IParams<{locale: string}>) {
  const fetchedParams = await params
  const locale = fetchedParams.locale as ILocale
  if (locale === undefined) throw new Error('Locale is undefined')

  const messages = await getMessages({locale})
  setRequestLocale(locale)

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <html lang={ELang[locale]} className={clsx(s.html, playfair.className)}>
        <body className={clsx(s.body, nunito.className)}>
          <InitGSAP>{children}</InitGSAP>
        </body>
      </html>
    </NextIntlClientProvider>
  )
}

export default HomeLayout
