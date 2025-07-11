import {type Metadata} from 'next'
import {NextIntlClientProvider} from 'next-intl'
import {getMessages, setRequestLocale} from 'next-intl/server'
import {NuqsAdapter} from 'nuqs/adapters/next'

import {routing} from '@/locale/routing'
import {type IChildren} from '@/utils/type/IChildren'

import {type IParamsLocale} from '../../utils/enum/IParamsLocale'

import RootLayout from './_com/rootLayout'
import {metadata, metadataLang} from './_data/metadata'

// import ClientProvider from '@/components/redux'

export const dynamic = 'force-static'
export const dynamicParams = false
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}))
}

export async function generateMetadata({params}: IParamsLocale): Promise<Metadata> {
  const {locale} = await params
  const metadataLocale = metadataLang[locale]

  return {
    ...metadata,
    ...metadataLocale,
    openGraph: {...metadata.openGraph, ...metadataLocale.openGraph},
    twitter: {...metadata.twitter, ...metadataLocale.twitter},
  }
}

async function LocaleLayout({children, params}: IChildren & IParamsLocale) {
  const {locale} = await params
  const messages = await getMessages({locale})
  setRequestLocale(locale)

  return (
    // <ClientProvider>
    <NextIntlClientProvider locale={locale} messages={messages}>
      <NuqsAdapter>
        <RootLayout>{children}</RootLayout>
      </NuqsAdapter>
    </NextIntlClientProvider>
    // </ClientProvider>
  )
}

export default LocaleLayout
