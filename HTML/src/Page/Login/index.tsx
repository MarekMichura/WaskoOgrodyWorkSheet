import {useFormik} from 'formik'
import {Suspense} from 'react'
import {useTheme} from 'styled-components'

import {Button} from '/Button'
import {KeyIcon} from '/Icon/KeyIcon'
import {LogoIcon} from '/Icon/LogoIcon'
import {UserIcon} from '/Icon/UserIcon'
import {Input} from '/Input'
import {Loading} from '/Loading/index'
import {useProfil} from '/QueryFn/profil/useProfil'

import {defaultLoginValues as initialValues} from './ITypes'
import {validationLogin as validate} from './validation'

import * as CSS from './css'

export const Login = () => {
  const {changeTheme} = useTheme()
  const {mutationLogin} = useProfil()

  const {submitForm, handleChange, errors} = useFormik({
    initialValues,
    validate,
    validateOnChange: false,
    onSubmit: ({userName, password}) => mutationLogin.mutate({Login: userName, Password: password}),
  })

  return (
    <Suspense fallback={<Loading open={true} text="ładowanie strony" />}>
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
          <Button type="button" onClick={submitForm}>
            Zaloguj się
          </Button>
          <Loading open={mutationLogin.isPending} text="Logowanie" />
        </CSS.Content>
      </CSS.Center>
    </Suspense>
  )
}
