import {type Metadata} from 'next'
import {getMessages, setRequestLocale} from 'next-intl/server'

import {routing} from '@/locale/routing'
import {type ILocaleParam} from '@/utils/types/ILocaleParam'

import RootLayoutContent from './_com/layoutContent'
import {metadata} from './_data/metadata/metadata'
import {type IRootLayoutProps} from './_type/IRootLayoutProps'

export const dynamic = 'force-static'
export const dynamicParams = false
export function generateStaticParams() {
  const locales = routing.locales
  return locales.map((locale) => ({locale}))
}

export async function generateMetadata({params}: ILocaleParam): Promise<Metadata> {
  const {locale} = await params
  return metadata[locale]
}

async function RootLayout({params, children}: IRootLayoutProps) {
  const locale = (await params).locale
  const messages = await getMessages({locale: locale})
  setRequestLocale(locale)

  return (
    <RootLayoutContent lang={locale} messages={messages}>
      {children}
    </RootLayoutContent>
  )
}

export default RootLayout
