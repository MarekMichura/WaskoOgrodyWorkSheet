import {Formik, FormikHelpers} from 'formik'
import {useEffect} from 'react'

import Button from '/button/button'
import Input from '/input/input'
import {useMutationLogin} from '/query/profile/login'
import {loginRequest} from '/query/profile/types/_loginRequest'
import {useMutationChangeTheme} from '/query/theme/changeTheme'
import KeyIcon from '/svg/Key'
import LogoIcon from '/svg/Logo'
import SendIcon from '/svg/Send'
import UserIcon from '/svg/User'

import {loginDefault} from './formik/loginDef'
import {loginValidator} from './formik/validation'
import {loginProps, passwordProps} from './inputProps'
import styles from './login.module.scss'

const {container, content, header, logo, title, subTitle, input, button} = styles

export function LoginPage() {
  const {mutateAsync: changeTheme} = useMutationChangeTheme()
  const {mutateAsync: login} = useMutationLogin()

  useEffect(() => {
    document.title = 'Logowanie'
  }, [])

  function submit(value: loginRequest, help: FormikHelpers<loginRequest>) {
    help.setSubmitting(true)
    login(value)
      .catch(() => help.setErrors({login: 'Nie poprawna nazwa użytkownika lub hasło'}))
      .finally(() => help.setSubmitting(false))
  }

  return (
    <Formik initialValues={loginDefault} onSubmit={submit} validate={loginValidator}>
      {({isSubmitting, handleSubmit, isValid}) => (
        <form className={container} onSubmit={handleSubmit}>
          <div className={content}>
            <header className={header} onClick={() => changeTheme()}>
              <LogoIcon className={logo} />
              <div>
                <h1 className={title}>Wasko ogrody</h1>
                <h3 className={subTitle}>Zaloguj się</h3>
              </div>
            </header>
            <Input className={input} disabled={isSubmitting} Icon={<UserIcon />} {...loginProps} />
            <Input className={input} disabled={isSubmitting} Icon={<KeyIcon />} {...passwordProps} />
            <Button className={button} type="submit" disabled={!isValid || isSubmitting}>
              <SendIcon />
              Zaloguj się
            </Button>
          </div>
        </form>
      )}
    </Formik>
  )
}

export default LoginPage
