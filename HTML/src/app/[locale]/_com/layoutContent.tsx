import clsx from 'clsx'
import dynamic from 'next/dynamic'
import {NextIntlClientProvider} from 'next-intl'
import {NuqsAdapter} from 'nuqs/adapters/next'

import {ELang} from '@/utils/enums/ELang'
import {themeLoadStrScript} from '@/utils/style/themeLoad'

import {bricolage, lato} from '../_data/font'
import {type IRootLayoutContentProps} from '../_type/IRootLayoutContentProps'
import s from '../css.module.scss'

import QueryProvider from './queryProvider'

const CustomToaster = dynamic(() => import('./toaster/customToaster'))
const ReactQueryDevtools =
  process.env.NODE_ENV === 'development'
    ? dynamic(() => import('@tanstack/react-query-devtools').then((a) => a.ReactQueryDevtools))
    : () => null

function RootLayoutContent({lang, messages, children}: IRootLayoutContentProps) {
  return (
    <html lang={ELang[lang]} className={clsx(bricolage.className, s.html)} suppressHydrationWarning>
      <head>
        <script>{themeLoadStrScript}</script>
      </head>
      <body className={clsx(lato.className, s.body)}>
        <NextIntlClientProvider locale={lang} messages={messages}>
          <NuqsAdapter>
            <QueryProvider>
              {children}
              <CustomToaster />
              <ReactQueryDevtools />
            </QueryProvider>
          </NuqsAdapter>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayoutContent
