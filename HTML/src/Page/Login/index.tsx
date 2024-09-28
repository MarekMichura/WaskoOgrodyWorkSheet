import {useContext} from 'react'
import {useFormik} from 'formik'
import LogoIcon from '/Common/Icon/LogoIcon'
import Context from '/Common/MainContext/type/Context'
import {MainAction} from '/Common/MainContext/global/ACTION'
import Button from '/Common/Input/Button'
import Input from '/Common/Input/Input'
import UserIcon from '/Common/Icon/UserIcon'
import LockIcon from '/Common/Icon/LockIcon'
import * as CSS from './css'
import {defaultLoginValues as initialValues} from './ITypes'
import validate from './validation'

function LoginPage() {
  const {dispatch} = useContext(Context)
  function changeTheme() {
    dispatch({action: MainAction.CHANGE_THEME, dispatch})
  }

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
          <LogoIcon SVG={CSS.SVG} onClick={changeTheme} />
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
          icon={LockIcon}
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
