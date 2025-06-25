'use client'

import {zodResolver} from '@hookform/resolvers/zod'
import {useLocale, useTranslations} from 'next-intl'
import {useState, type ChangeEvent} from 'react'
import {useForm} from 'react-hook-form'

import KeyIcon from '@/components/icon/key'
import SendIcon from '@/components/icon/send'
import UserIcon from '@/components/icon/user'
import Input from '@/components/input/input'
import FlagEnglishIcon from '@/components/lottie/flag/flagEnglish'
import FlagPolishIcon from '@/components/lottie/flag/flagPolish'
import Ripple from '@/components/ripple/ripple'
import {Link, usePathname, useRouter} from '@/locale/navigation'
import {EApiUrl} from '@/utils/enum/EApiUrl'
import {auth} from '@/utils/request/auth/auth'

import {type ILoginFormError, type ILoginFormData} from '../_type/ILoginFormData'
import {type ILoginPageClientFormProps} from '../_type/ILoginPageFormProps'
import {loginFormValidate} from '../_validate/formValidate'

import s from './css.module.scss'

function LoginPageClientForm({error, redirect, userName}: ILoginPageClientFormProps) {
  const [block, setBlock] = useState(false)
  const router = useRouter()

  const t = useTranslations('login')
  const locale = useLocale()
  const path = usePathname()

  const {handleSubmit, register, formState, resetField, setError, trigger} = useForm<ILoginFormData>({
    resolver: zodResolver(loginFormValidate),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })

  const {errors, isSubmitting} = formState
  const isSubmittingOrBlock = isSubmitting || block
  const isValid = !errors.userName && !errors.password
  const errorType = {
    userName: (error ?? errors.userName?.message) as ILoginFormError,
    password: errors.password?.message as ILoginFormError,
  }
  const loginError = errorType.userName ? t(errorType.userName) : undefined
  const passwordError = errorType.password ? t(errorType.password) : undefined

  const submit = async (form: ILoginFormData) => {
    const response = await auth(form.userName, form.password)
    if (!response.authenticated) {
      resetField('password')
      setError('userName', {message: 'errorLoginFail'})
      return
    }

    setBlock(true)
    router.push(redirect ?? '/profil')
  }

  const change = async (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof ILoginFormData
    if (errors[name]) {
      await trigger(name)
    }
  }

  return (
    <form action={EApiUrl.AUTHENTICATE} method="POST" onSubmit={handleSubmit(submit)} className={s.formCon}>
      <input type="hidden" name="redirect" value={redirect} />
      <Input
        {...register('userName', {onChange: change})}
        disabled={isSubmittingOrBlock}
        defaultValue={userName}
        label={t('userName')}
        error={loginError}
        icon={{ele: <UserIcon />, position: 'left'}}
      />
      <Input
        {...register('password', {onChange: change})}
        disabled={isSubmittingOrBlock}
        label={t('password')}
        error={passwordError}
        type="password"
        icon={{ele: <KeyIcon />, position: 'left'}}
      />
      <div className={s.sub}>
        <Ripple as={Link} className={s.flag} type="submit" locale="pl-PL" href={path} disabled={locale == 'pl-PL'}>
          <FlagPolishIcon />
        </Ripple>
        <Ripple as={Link} className={s.flag} type="submit" locale="en-US" href={path} disabled={locale == 'en-US'}>
          <FlagEnglishIcon />
        </Ripple>
        <Ripple type="submit" className={s.button} disabled={isSubmittingOrBlock || !isValid}>
          <SendIcon />
          {t('send')}
        </Ripple>
      </div>
    </form>
  )
}

export default LoginPageClientForm
