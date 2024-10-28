import {Formik} from 'formik'
import {useEffect} from 'react'
import {useTheme} from 'styled-components'

import {KeyIcon} from '/Icon/KeyIcon'
import {LogoIcon} from '/Icon/LogoIcon'
import {UserIcon} from '/Icon/UserIcon'
import {Input} from '/Input'
import {Button} from '/InputButton'
import {Loading} from '/Loading/index'
import {useLogin} from '/QueryFn/profil/useLogin'
import {endPoints, IAdditionalRoute} from '/Router/IRoute'

import {ILoginValues, defaultLoginValues as initialValues} from './ITypes'
import {validationLogin as validate} from './validation'

import * as CSS from './css'

const Login = () => {
  const {changeTheme} = useTheme()
  const mutationLogin = useLogin()

  const Login = ({login, password}: ILoginValues) => {
    mutationLogin.mutate({Login: login, Password: password})
  }

  useEffect(() => {
    document.title = 'Logowanie'
    endPoints[IAdditionalRoute.mainPage].preload()
  }, [])

  return (
    <CSS.Center>
      <Formik initialValues={initialValues} validate={validate} onSubmit={Login}>
        {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
          <CSS.Content onSubmit={handleSubmit}>
            <CSS.Top>
              <LogoIcon cssSVG={CSS.SVG} onClick={changeTheme} />
              <div>
                <CSS.Title>Waśko ogrody</CSS.Title>
                <CSS.SubTitle>Zaloguj się</CSS.SubTitle>
              </div>
            </CSS.Top>
            <Input
              icon={UserIcon}
              name="login"
              type="text"
              id="login"
              autoComplete="username"
              placeholder="Login"
              onChange={handleChange}
              value={values.login}
              onBlur={handleBlur}
              error={touched.login && errors.login}
              required
            />
            <Input
              icon={KeyIcon}
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              placeholder="Hasło"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
              error={touched.password && errors.password}
              required
            />
            <Button type="submit" disabled={mutationLogin.isPending}>
              Zaloguj się
            </Button>
            <Loading open={mutationLogin.isPending} text="Logowanie" />
          </CSS.Content>
        )}
      </Formik>
    </CSS.Center>
  )
}

export default Login
