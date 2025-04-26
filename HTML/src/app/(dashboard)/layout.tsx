import {dehydrate, HydrationBoundary} from '@tanstack/react-query'
import {headers} from 'next/headers'
import {redirect} from 'next/navigation'

import {type ILoginQuery} from '@/app/login/_type/ILoginPageProps'
import {serverGetProfile} from '@/utils/action/user/serverGetProfile'
import {getTranslations} from '@/utils/locale/_help/getTranslations'
import {getQueryClient} from '@/utils/query/qetQueryClient'
import {EHeaders} from '@/utils/type/EHeaders'
import {EQueries} from '@/utils/type/EQueries'
import {type IChildren} from '@/utils/type/props/IChildren'

import Nav from './_nav/nav'
import s from './css.module.scss'

async function DashboardSiteLayout({children}: IChildren) {
  const [header, route, {body}] = await Promise.all([headers(), getTranslations('route'), serverGetProfile()])
  const queryClient = getQueryClient()

  if (body === undefined) {
    const url = route('login')
    const query = 'redirect' as keyof ILoginQuery
    const currPath = header.get(EHeaders.X_URL) ?? route('profil')

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
