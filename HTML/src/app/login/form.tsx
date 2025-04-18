'use client'

import {zodResolver} from '@hookform/resolvers/zod'
import dynamic from 'next/dynamic'
import {useForm} from 'react-hook-form'

const FormInput = dynamic(() => import('@/components/form/input/formInput'), {ssr: true})
const KeyIcon = dynamic(() => import('@/components/icon/svg/key'), {ssr: true})
const SendIcon = dynamic(() => import('@/components/icon/svg/send'), {ssr: true})
const UserIcon = dynamic(() => import('@/components/icon/svg/user'), {ssr: true})

import FormBtn from '@/components/form/button/formBtn'
import {useMutationLogin} from '@/utils/query/loginMutate'
import {URL_MAP} from '@/utils/type/api/apiUrl.client'
import {IPostLoginData, validationLogin} from '@/utils/zod/validationLogin'

import s from './cssLoginPage.module.scss'
import {ILoginPageFormProps} from './ILoginPageFormProps'

function LoginPageForm({url, error, userName}: ILoginPageFormProps) {
  const mutation = useMutationLogin()
  const {handleSubmit, register, formState, setValue} = useForm<IPostLoginData>({
    resolver: zodResolver(validationLogin),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {userName: userName},
  })
  const {errors, isSubmitting} = formState
  const isValid = !errors.userName && !errors.password
  const loginError = error ?? errors.userName?.message
  const passwordError = errors.password?.message

  const submit = async (form: IPostLoginData) => {
    mutation.mutate({...form, redirect: url})
    setValue('password', '')
  }

  return (
    <form action={URL_MAP.AUTHENTICATE} onSubmit={handleSubmit(submit)} method="POST" className={s.formCon}>
      <input type="hidden" name="Redirect" value={url} />
      <FormInput label="Login" Icon={<UserIcon />} disabled={isSubmitting} error={loginError} {...register('userName')} />
      <FormInput label="Hasło" type="password" Icon={<KeyIcon />} disabled={isSubmitting} error={passwordError} {...register('password')} />
      <FormBtn type="submit" className={s.button} disabled={!isValid || isSubmitting}>
        <SendIcon />
        Zaloguj się
      </FormBtn>
    </form>
  )
}

export default LoginPageForm
