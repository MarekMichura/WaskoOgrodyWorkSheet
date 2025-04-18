import {HydrationBoundary, dehydrate} from '@tanstack/react-query'
import {cookies, headers} from 'next/headers'
import {redirect} from 'next/navigation'

import MySuspense from '@/components/loading/mySuspense'
import SuspenseLoading from '@/components/loading/suspenseLoading'
import {profilServerGET} from '@/utils/actions/getProfil'
import {ECookieNames} from '@/utils/type/common/ECookiesNames'
import {EHeaders} from '@/utils/type/common/EHeaders'
import {EQuery} from '@/utils/type/common/EQuery'
import {IChildren} from '@/utils/type/common/IChildren'

import {getQueryClient} from '../queryClient'

import Nav from './(nav)/nav'
import s from './cssEmployee.module.scss'

async function EmployeeLayout({children}: IChildren) {
  const identity = (await cookies()).get(ECookieNames.identity)?.value
  const {body, response} = await profilServerGET(identity)
  const queryClient = getQueryClient()

  if (!response?.ok || body === undefined) {
    const path = (await headers()).get(EHeaders.X_URL)
    redirect(`/login?redirect=${path}`)
  }

  queryClient.prefetchQuery({
    queryKey: EQuery.profil,
    initialData: body,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className={s.container}>
        <main className={s.main}>
          <MySuspense fallback={<SuspenseLoading />}>{children}</MySuspense>
        </main>
        <header className={s.header} />
        <Nav />
      </div>
    </HydrationBoundary>
  )
}

export default EmployeeLayout
