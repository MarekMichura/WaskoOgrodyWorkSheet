import {cookies} from 'next/headers'
import Image, {getImageProps} from 'next/image'
import {redirect} from 'next/navigation'

import logoFull from '@/components/icon/png/logoFull.png'
import logoText from '@/components/icon/png/logoText.png'
import ChangeThemeBtn from '@/components/theme/changeThemeBtn'
import {profilServerGET} from '@/utils/actions/getProfil'
import {ECookieNames} from '@/utils/type/common/ECookiesNames'
import {ISearchProps} from '@/utils/type/common/ISsearchProps'

import s from './cssLoginPage.module.scss'
import {ELoginPageQuery} from './ELoginPageQuery'
import LoginPageForm from './form'

async function LoginPage({searchParams}: ISearchProps) {
  const identity = (await cookies()).get(ECookieNames.identity)?.value
  const {body, response} = await profilServerGET(identity)
  const search = await searchParams
  const urlRedirect = (search[ELoginPageQuery.redirect] ?? '/profil') as string
  const error = search[ELoginPageQuery.error] as string | undefined
  const userName = search[ELoginPageQuery.userName] as string | undefined

  if (response?.ok && body) {
    redirect(urlRedirect)
  }
  const common = {
    alt: 'Logo',
    width: 400,
    height: 200,
    priority: true,
  }
  const textLogo = getImageProps({
    ...common,
    src: logoText,
  })

  return (
    <div className={s.container}>
      <div className={s.content}>
        <header>
          <ChangeThemeBtn type="submit">
            <picture>
              <source media="(max-height:560px)" srcSet={textLogo.props.src} />
              <Image src={logoFull} {...common} alt="Logo" />
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
