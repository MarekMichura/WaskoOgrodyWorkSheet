import {Formik, FormikHelpers} from 'formik'

import * as CSS from './css'
import {defaultLoginValues, ILoginValues} from './types'
import validationLogin from './validation'
import {LockIcon, LogoIcon, UserIcon} from '../../Common/Icon'
import Button from '../../Common/Input/Button'
import Input from '../../Common/Input/Input'
import {ACTION_LOGIN} from '../../Common/MainContext/global/ACTIONS'
import {context} from '../../Common/MainContext/types/IContext'
import {useContext} from 'react'

function LoginPage() {
  const {dispatch} = useContext(context)

  async function sub(
    {username, password}: ILoginValues,
    {setErrors, setSubmitting}: FormikHelpers<ILoginValues>
  ) {
    if (username == undefined) {
      setErrors({username: 'Musisz uzupełnić nazwe użytkownika'})
      return
    }
    if (password == undefined) {
      setErrors({username: 'Musisz uzupełnić hasło'})
      return
    }

    setSubmitting(true)
    dispatch({
      action: ACTION_LOGIN,
      username,
      password,
      dispatch,
      setSubmitting,
      setErrors,
    })
    // (await postLogin(values.username, values.password))
    //   .login((user) => {
    //     // dispatch({action: 'Login'})
    //   })
    //   .tryAgain(() => {})
    //   .finally(() => {
    //     setSubmitting(false)
    //   })

    // .then((res) => {
    //   if (res.ok) return res.json()
    //   throw new Error('')
    // })
    // .then((res: IResponse) => {
    //   if (res.authenticated == true) {
    //     conProfil.dispatch({type: 'Login', profil: res.profil})
    //     conNotification.dispatch({
    //       type: 'Add',
    //       text: successResponse + res.profil.userName,
    //       nType: 'success',
    //       life: 5000,
    //     })
    //   } else {
    //     conNotification.dispatch({
    //       type: 'Add',
    //       text: failResponse,
    //       nType: 'error',
    //       life: 5000,
    //     })
    //   }
    // })
    // .catch(() => {
    //   conNotification.dispatch({
    //     type: 'Add',
    //     text: lostResponse,
    //     nType: 'error',
    //     life: 5000,
    //   })
    // })
    // .finally(() => {
    //   helpers.setSubmitting(false)
    // })
  }

  return (
    <CSS.Center>
      <CSS.Content>
        <CSS.Top>
          <LogoIcon
            svg={CSS.SVG}
            onClick={() => {
              dispatch({action: 'ChangeTheme'})
            }}
          />
          <div>
            <CSS.Title>Waśko ogrody</CSS.Title>
            <CSS.SubTitle>Zaloguj się</CSS.SubTitle>
          </div>
        </CSS.Top>
        <Formik
          initialValues={defaultLoginValues}
          onSubmit={sub}
          validate={validationLogin}
          validateOnChange={false}>
          {({errors, handleChange, isValid, submitForm}) => (
            <>
              <Input
                icon={UserIcon}
                placeholder="Login"
                type="text"
                required
                name="username"
                onChange={handleChange}
                error={errors.username}
              />
              <Input
                icon={LockIcon}
                placeholder="Hasło"
                type="password"
                required
                name="password"
                onChange={handleChange}
                error={errors.password}
              />
              <Button type="button" value="Zaloguj się" onClick={submitForm} />
            </>
          )}
        </Formik>
      </CSS.Content>
    </CSS.Center>
  )
}

export default LoginPage
