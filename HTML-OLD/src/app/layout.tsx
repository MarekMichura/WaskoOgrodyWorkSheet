import '@/utils/style/globals.scss'

import {dehydrate, HydrationBoundary} from '@tanstack/react-query'
import {Metadata, Viewport} from 'next'
import dynamic from 'next/dynamic'

import {bricolage, lato} from '@/utils/style/font'
import {getThemeServer} from '@/utils/theme/server/getTheme'

import {getQueryClient} from '../utils/query/queryClient'

import {metadata as rootMetadata} from './_com/metadata'
import QueryProvider from './_com/queryProvider'
import {viewport as rootViewPort} from './_com/viewport'

const JsChecker = dynamic(() => import('@/components/loading/controlJS'))
const MySuspense = dynamic(() => import('@/components/loading/mySuspense'))
const SuspenseLoading = dynamic(() => import('@/components/loading/suspenseLoading'))
const Toaster = dynamic(() => import('react-hot-toast').then((mod) => mod.Toaster))
const ReactQueryDevtools =
  process.env.NODE_ENV === 'development' ? dynamic(() => import('@tanstack/react-query-devtools').then((mod) => mod.ReactQueryDevtools)) : () => null

export const metadata: Metadata = {...rootMetadata}
export const viewport: Viewport = {...rootViewPort}

export default async function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  const {theme} = await getThemeServer()
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['theme'],
    initialData: theme,
  })

  return (
    <html lang="pl" data-theme={theme}>
      <body className={`${lato.className} ${bricolage.className}`}>
        <JsChecker />
        <QueryProvider>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <MySuspense fallback={<SuspenseLoading />}>{children}</MySuspense>
          </HydrationBoundary>
          <ReactQueryDevtools />
          <Toaster position="bottom-right" toastOptions={{duration: 3000}} />
        </QueryProvider>
      </body>
    </html>
  )
}
