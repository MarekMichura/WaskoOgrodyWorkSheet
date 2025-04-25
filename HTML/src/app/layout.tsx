import './global.scss'

import {dehydrate, HydrationBoundary} from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import {NextIntlClientProvider} from 'next-intl'

import JsAwareSuspense from '@/components/suspense/jsAwareSuspense'
import {serverGetTheme} from '@/utils/action/theme/serverGetTheme'
import {getLocale} from '@/utils/locale/_help/getLocale'
import {getQueryClient} from '@/utils/query/qetQueryClient'
import {EQueries} from '@/utils/type/EQueries'
import {type IChildren} from '@/utils/type/props/IChildren'

import JsCheckerCookie from './_com/jsChecker'
import QueryProvider from './_com/queryProvider'
import {bricolage, lato} from './_data/font'
import {metadata as _metadata} from './_data/metadata'
import {viewport as _viewport} from './_data/viewport'

const MelonLoading = dynamic(() => import('@/components/suspense/melonLoading'))
const CustomToaster = dynamic(() => import('./_com/toaster/customToaster'))
const ReactQueryDevtools =
  process.env.NODE_ENV === 'development' ? dynamic(() => import('@tanstack/react-query-devtools').then((a) => a.ReactQueryDevtools)) : () => null

export const metadata = {..._metadata}
export const viewport = {..._viewport}

async function RootLayout({children}: IChildren) {
  const theme = await serverGetTheme()
  const lang = await getLocale()
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery({
    queryKey: EQueries.theme,
    initialData: theme,
  })

  return (
    <html lang={lang} data-theme={theme}>
      <body className={`${bricolage.className} ${lato.className}`}>
        <QueryProvider>
          <NextIntlClientProvider>
            <JsCheckerCookie />
            <HydrationBoundary state={dehydrate(queryClient)}>
              <JsAwareSuspense fallback={<MelonLoading />}>{children}</JsAwareSuspense>
            </HydrationBoundary>
            <ReactQueryDevtools />
            <CustomToaster />
          </NextIntlClientProvider>
        </QueryProvider>
      </body>
    </html>
  )
}

export default RootLayout
