import {useFormik} from 'formik'
import {useContext, useEffect} from 'react'

import {MainAction} from '/global/MAIN_ACTION'
import KeyIcon from '/Icon/KeyIcon'
import LogoIcon from '/Icon/LogoIcon'
import UserIcon from '/Icon/UserIcon'
import Button from '/Input/Button'
import Input from '/Input/Input'
import Context from '/MContext'

import {defaultLoginValues as initialValues} from './ITypes'
import validate from './validation'

import * as CSS from './css'

function LoginPage() {
  const {dispatch} = useContext(Context)
  function changeTheme() {
    dispatch({action: MainAction.CHANGE_THEME, dispatch})
  }

  useEffect(() => {
    dispatch({action: MainAction.CHANGE_TITLE, title: 'Logowanie'})
  }, [])

  const {submitForm, handleChange, errors} = useFormik({
    initialValues,
    onSubmit: ({userName, password}) => {
      if (!userName || !password) return
      dispatch({action: MainAction.LOGIN, userName, password, dispatch})
    },
    validate,
  })

  return (
    <CSS.Center>
      <CSS.Content>
        <CSS.Top>
          <LogoIcon cssSVG={CSS.SVG} onClick={changeTheme} />
          <div>
            <CSS.Title>Waśko ogrody</CSS.Title>
            <CSS.SubTitle>Zaloguj się</CSS.SubTitle>
          </div>
        </CSS.Top>
        <Input
          icon={UserIcon}
          placeholder="Login"
          type="text"
          required
          name="userName"
          onChange={handleChange}
          error={errors.userName}
        />
        <Input
          icon={KeyIcon}
          placeholder="Hasło"
          type="password"
          required
          name="password"
          onChange={handleChange}
          error={errors.password}
        />
        <Button type="button" value="Zaloguj się" onClick={submitForm} />
      </CSS.Content>
    </CSS.Center>
  )
}

export default LoginPage
