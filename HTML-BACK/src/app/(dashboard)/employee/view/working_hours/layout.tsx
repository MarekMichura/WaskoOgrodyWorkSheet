import {headers} from 'next/headers'
import {redirect} from 'next/navigation'

import {type ILoginQuery} from '@/app/login/_type/ILoginPageProps'
import {serverGetProfile} from '@/utils/action/user/serverGetProfile'
import {getTranslations} from '@/utils/locale/_help/getTranslations'
import {EHeaders} from '@/utils/type/EHeaders'
import {type IChildren} from '@/utils/type/props/IChildren'

async function EmployeeRedirectIfNotEmployeeLayout({children}: IChildren) {
  const [{body}, route, header] = await Promise.all([serverGetProfile(), getTranslations('route'), headers()])

  if (body === undefined) {
    const url = route('login')
    const query = 'redirect' as keyof ILoginQuery
    const currPath = header.get(EHeaders.X_URL) ?? route('profil')

    redirect(`${url}?${query}=${currPath}`)
  }
  if (!body.roles.includes('Employer')) {
    redirect(route('profil'))
  }

  return <>{children}</>
}

export default EmployeeRedirectIfNotEmployeeLayout
