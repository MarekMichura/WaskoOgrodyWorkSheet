import Image from 'next/image'
import {getTranslations, setRequestLocale} from 'next-intl/server'

import logoFull from '@/components/img/logo/logoFull.png'
import {redirect} from '@/locale/navigation'
import {type IPaths} from '@/locale/routing'
import {getProfilServer} from '@/utils/request/getProfil/getProfilServer'

import LoginPageClientForm from './_com/clientForm'
import {type ILoginPageProps} from './_type/ILoginPageProps'
import s from './css.module.scss'

export const dynamic = 'auto'
export async function generateMetadata() {
  const t = await getTranslations('login')

  return {title: t('pageTitle')}
}

async function LoginPage({params, searchParams}: ILoginPageProps) {
  const [{locale}, {error, redirect: path, userName}] = await Promise.all([params, searchParams])
  setRequestLocale(locale)
  const t = await getTranslations('login')

  const profil = await getProfilServer()
  if (profil.response?.status === 200) {
    return redirect({href: (path as IPaths) ?? '/profil', locale})
  }

  return (
    <div className={s.container}>
      <div className={s.content}>
        <Image alt={'Logo'} src={logoFull} priority className={s.logo} />
        <h1 className={s.title}>{t('title')}</h1>
        <main>
          <LoginPageClientForm error={error as string} userName={userName as string} redirect={path as IPaths} />
        </main>
      </div>
    </div>
  )
}

export default LoginPage
