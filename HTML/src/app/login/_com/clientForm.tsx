'use client'

import {zodResolver} from '@hookform/resolvers/zod'
import {type ChangeEvent} from 'react'
import {useForm} from 'react-hook-form'

import ChangeLangBtn from '@/components/form/btn/_changeLang/changeLangBtn'
import FormBtn from '@/components/form/btn/formBtn'
import FormInput from '@/components/form/input/formInput'
import {FlagEnglishIcon} from '@/components/image/svg/FlagEnglishIcon'
import {FlagPolishIcon} from '@/components/image/svg/FlagPolishIcon'
import SendIcon from '@/components/image/svg/send'
import {useLocale} from '@/utils/locale/_help/useLocale'
import {useTranslations} from '@/utils/locale/_help/useTranslations'
import {useMutateAuth} from '@/utils/query/auth/mutateAuth'
import {EApiUrl} from '@/utils/type/EApiUrl'

import {type ILoginFormError, type ILoginFormData} from '../_type/ILoginFormData'
import {type ILoginPageClientFormProps} from '../_type/ILoginPageFormProps'
import {loginFormValidate} from '../_validate/formValidate'
import s from '../css.module.scss'

function LoginPageClientForm({error, url, userName}: ILoginPageClientFormProps) {
  const t = useTranslations('login')
  const locale = useLocale()
  const {handleSubmit, register, formState, resetField, trigger} = useForm<ILoginFormData>({
    resolver: zodResolver(loginFormValidate),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })

  const {errors, isSubmitting} = formState
  const isValid = !errors.userName && !errors.password
  const errorType = {userName: (error ?? errors.userName?.message) as ILoginFormError, password: errors.password?.message as ILoginFormError}
  const loginError = errorType.userName ? t(errorType.userName) : undefined
  const passwordError = errorType.password ? t(errorType.password) : undefined

  const mutation = useMutateAuth()
  const submit = async (form: ILoginFormData) => {
    await mutation.mutateAsync({...form, redirect: url})
    resetField('password')
  }

  const change = async (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof ILoginFormData
    if (errors[name]) {
      await trigger(name)
    }
  }

  return (
    <>
      <form action={EApiUrl.AUTHENTICATE} method="POST" onSubmit={handleSubmit(submit)} className={s.formCon}>
        <input type="hidden" name="redirect" value={url} />
        <FormInput {...register('userName', {onChange: change})} disabled={isSubmitting} label={t('formLogin')} error={loginError} defaultValue={userName} />
        <FormInput {...register('password', {onChange: change})} disabled={isSubmitting} label={t('formPassword')} error={passwordError} type="password" />
        <FormBtn type="submit" className={s.button} disabled={isSubmitting || !isValid}>
          <SendIcon />
          {t('formSubmit')}
        </FormBtn>
      </form>
      <div className={s.flags}>
        <ChangeLangBtn className={s.flag} type="submit" language="pl" disabled={locale == 'pl'}>
          <FlagPolishIcon />
        </ChangeLangBtn>
        <ChangeLangBtn className={s.flag} type="submit" language="en" disabled={locale == 'en'}>
          <FlagEnglishIcon />
        </ChangeLangBtn>
      </div>
    </>
  )
}

export default LoginPageClientForm
