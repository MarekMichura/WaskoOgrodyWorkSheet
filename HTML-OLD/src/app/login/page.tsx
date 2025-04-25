import {cookies} from 'next/headers'
import Image, {getImageProps, ImageProps} from 'next/image'
import {redirect, RedirectType} from 'next/navigation'

import logoFull from '@/components/icon/png/logoFull.png'
import logoText from '@/components/icon/png/logoText.png'
import ChangeThemeBtn from '@/components/theme/changeThemeBtn'
import {profilServerGET} from '@/utils/actions/getProfil'
import {ECookieNames} from '@/utils/type/common/ECookiesNames'
import {ERoute} from '@/utils/type/common/ERoute'

import LoginPageForm from './_com/form'
import {ILoginPageProps} from './_type/ILoginPageProps'
import {validateLoginPageQuery} from './_zod/queryPropsValidate'
import s from './css.module.scss'

const common = {
  alt: 'Logo',
  width: 400,
  height: 200,
  priority: true,
} as ImageProps

const textLogo = getImageProps({
  ...common,
  src: logoText,
})

async function LoginPage({searchParams}: ILoginPageProps) {
  // get query props
  const {success, data} = validateLoginPageQuery.safeParse(await searchParams)
  if (!success) redirect(ERoute.login, RedirectType.replace)

  // check profil
  const identity = (await cookies()).get(ECookieNames.identity)?.value
  const {body, response} = await profilServerGET(identity)

  // if is logged then redirect
  const urlRedirect = (data.redirect ?? '/profil') as string
  if (response?.ok && body) {
    redirect(urlRedirect)
  }

  // get data from server
  const error = data.error as string | undefined
  const userName = data.userName as string | undefined

  return (
    <div className={s.container}>
      <div className={s.content}>
        <header>
          <ChangeThemeBtn type="submit">
            <picture>
              <source media="(max-height:560px)" srcSet={textLogo.props.src} />
              <Image {...common} src={logoFull} alt="Logo" />
            </picture>
          </ChangeThemeBtn>
          <div>
            <h1 className={s.title}>Zaloguj się</h1>
          </div>
        </header>
        <main>
          <LoginPageForm url={urlRedirect} error={error} userName={userName} />
        </main>
      </div>
    </div>
  )
}

export default LoginPage
