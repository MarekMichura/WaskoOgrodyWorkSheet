import Image, {getImageProps} from 'next/image'
import {redirect} from 'next/navigation'

import ChangeThemeBtn from '@/components/form/btn/_changeTheme/changeThemeBtn'
import logoFull from '@/components/image/png/logoFull.png'
import logoText from '@/components/image/png/logoText.png'
import {serverGetProfile} from '@/utils/action/user/serverGetProfile'
import {getTranslations} from '@/utils/locale/_help/getTranslations'

import LoginPageClientForm from './_com/clientForm'
import {type ILoginPageProps} from './_type/ILoginPageProps'
import {validateLoginPageQuery} from './_type/queryPropsValidate'
import s from './css.module.scss'

const logoImgProps = {alt: 'Logo', width: 400, height: 200} as const
const textLogo = getImageProps({...logoImgProps, src: logoText})

export async function generateMetadata() {
  const t = await getTranslations('login')

  return {title: t('pageTitle')}
}

async function LoginPage({searchParams}: ILoginPageProps) {
  const [params, path, t, {body: profile}] = await Promise.all([searchParams, getTranslations('route'), getTranslations('login'), serverGetProfile()])
  const query = await validateLoginPageQuery.safeParseAsync({redirect: params.redirect, error: params.error, userName: params.userName})

  if (!query.success) redirect(path('login')) // redirect if query data not valid
  const url = query.data.redirect ?? path('profil')
  const error = query.data?.error ? 'errorAuth' : undefined
  const userName = query.data?.userName

  if (profile) redirect(url)

  return (
    <div className={s.container}>
      <div className={s.content}>
        <header>
          <ChangeThemeBtn type="submit">
            <picture>
              <source media="(max-height:560px)" {...logoImgProps} srcSet={textLogo.props.src} />
              <Image {...logoImgProps} alt={logoImgProps.alt} src={logoFull} priority />
            </picture>
          </ChangeThemeBtn>
          <div>
            <h1 className={s.title}>{t('title')}</h1>
          </div>
        </header>
        <main>
          <LoginPageClientForm error={error} userName={userName} url={url} />
        </main>
      </div>
    </div>
  )
}

export default LoginPage
