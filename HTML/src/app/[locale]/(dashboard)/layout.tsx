import {dehydrate, HydrationBoundary} from '@tanstack/react-query'
import {headers} from 'next/headers'
import {getLocale} from 'next-intl/server'

import {redirect} from '@/locale/navigation'
import {EHeaders} from '@/utils/enum/EHeaders'
import {EQueries} from '@/utils/enum/EQueries'
import {getQueryClient} from '@/utils/query/qetQueryClient'
import QueryProvider from '@/utils/query/queryProvider'
import {getProfilServer} from '@/utils/request/getProfil/getProfilServer'
import {type IChildren} from '@/utils/type/IChildren'

import DashboardNav from './_com/nav'

export const dynamic = 'auto'
async function DashboardLayout({children}: IChildren) {
  const [header, profil] = await Promise.all([headers(), getProfilServer()])
  const queryClient = getQueryClient()
  const locale = await getLocale()

  if (profil.response?.status !== 200 || !profil.body) {
    redirect({href: {pathname: '/login', query: {redirect: header.get(EHeaders.X_URL)}}, locale})
    return
  }

  queryClient.prefetchQuery({
    queryKey: EQueries.profil,
    initialData: profil.body,
  })

  return (
    <QueryProvider>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <DashboardNav>{children}</DashboardNav>
      </HydrationBoundary>
    </QueryProvider>
  )
}

export default DashboardLayout
