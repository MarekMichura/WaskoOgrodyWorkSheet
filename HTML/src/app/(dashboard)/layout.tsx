import {dehydrate, HydrationBoundary} from '@tanstack/react-query'
import {cookies, headers} from 'next/headers'
import {redirect} from 'next/navigation'

import {type ILoginQuery} from '@/app/login/_type/ILoginPageProps'
import {serverGetProfile} from '@/utils/action/user/serverGetProfile'
import {getLocale} from '@/utils/locale/_help/getLocale'
import {getQueryClient} from '@/utils/query/qetQueryClient'
import {ECookies} from '@/utils/type/ECookies'
import {EHeaders} from '@/utils/type/EHeaders'
import {EQueries} from '@/utils/type/EQueries'
import {ERoutes} from '@/utils/type/ERoutes'
import {type IChildren} from '@/utils/type/props/IChildren'

import Nav from './_nav/nav'
import s from './css.module.scss'

async function DashboardSiteLayout({children}: IChildren) {
  const [cookieStore, header, locale] = await Promise.all([cookies(), headers(), getLocale()])
  const {response, body} = await serverGetProfile(cookieStore.get(ECookies.identity)?.value)
  const queryClient = getQueryClient()
  const path = ERoutes[locale]

  if (!response?.ok || body === undefined) {
    const url = path.login
    const query = 'redirect' as keyof ILoginQuery
    const currPath = header.get(EHeaders.X_URL) ?? path.login

    redirect(`${url}?${query}=${currPath}`)
  }

  queryClient.prefetchQuery({
    queryKey: EQueries.profil,
    initialData: body,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className={s.container}>
        <main className={s.main}>{children}</main>
        <header className={s.header} />
        <Nav />
      </div>
    </HydrationBoundary>
  )
}

export default DashboardSiteLayout
