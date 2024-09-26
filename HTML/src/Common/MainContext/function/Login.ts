


import wretch from 'wretch'
import {ACTION_PROFIL} from '../global/ACTIONS'
import {IActionLogin} from '../types/IAction'
import {IProfil} from '../types/IProfil'


interface ILoginResponseSuccess {
  authenticated: true
  profil: IProfil
}

interface ILoginResponseFail {
  authenticated: false
  profil: undefined
}

type ILoginResponse = ILoginResponseSuccess | ILoginResponseFail

function Login(action: IActionLogin) {
  const {username, password, dispatch, setSubmitting, setErrors} = action
  wretch('/Authenticate')
    .post({Login: username, Password: password})
    .badRequest((err) => console.log(err.status))
    .unauthorized((err) => console.log(err.status))
    .forbidden((err) => console.log(err.status))
    .notFound((err) => console.log(err.status))
    .timeout((err) => console.log(err.status))
    .internalError((err) => console.log(err.status))
    .fetchError((err) => console.log(err))
    .json((json: ILoginResponse) => {
      if (json.authenticated) {
        dispatch({action: ACTION_PROFIL, profil: json.profil})
      } else {
        setErrors({username: 'Nie poprawna nazwa użytkownika lub hasło'})
      }
    })
    .finally(() => setSubmitting(false))
}

export default Login
