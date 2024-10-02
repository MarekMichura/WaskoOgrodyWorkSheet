import {abortAddon} from 'wretch/addons'
import factory from 'wretch/index'

import {MainAction} from '/global/MAIN_ACTION'
import {NOTIFICATION_LOGIN_LIFE, TIMEOUT_FETCH} from '/global/TIME'

import {IActionLogin} from '../type/IAction'
import {ILoginResponse} from '../type/ILoginResponse'
import {INotificationType} from '../type/INotification'

function login({userName: UserName, password: Password, dispatch}: IActionLogin) {
  const controller = new AbortController()
  let finished = false
  dispatch({action: MainAction.LOADING_ADD, key: 'login', dispatch})

  factory('/Authenticate')
    .addon(abortAddon())
    .signal(controller)
    .post({Login: UserName, Password: Password})
    .onAbort(() => ({
      type: INotificationType.error,
      text: 'Przekroczono limit czasu żądania',
    }))
    .badRequest(() => ({
      type: INotificationType.error,
      text: 'Nie udało się nawiązać połączenia z serwerem',
    }))
    .notFound(() => ({
      type: INotificationType.error,
      text: 'Błąd połączenia z serwerem',
    }))
    .internalError(() => ({
      type: INotificationType.error,
      text: 'Wystąpił problem po stronie serwera',
    }))
    .timeout(() => ({
      type: INotificationType.error,
      text: 'Przekroczono limit czasu żądania',
    }))
    .json((result: ILoginResponse) => {
      if (result.authenticated) {
        dispatch({action: MainAction.PROFIL_SET, profil: result.profil})
        return {
          type: INotificationType.success,
          text: 'Udało się zalogować',
        }
      }
      dispatch({action: MainAction.PROFIL_SET, profil: undefined})
      return {
        type: INotificationType.error,
        text: 'Niepoprawny login lub hasło',
      }
    })
    .then((a) =>
      dispatch({
        action: MainAction.NOTIFICATION_ADD,
        life: NOTIFICATION_LOGIN_LIFE,
        text: a.text,
        type: a.type,
        dispatch,
      })
    )
    .finally(() => {
      dispatch({action: MainAction.LOADING_REMOVE, key: 'login', dispatch})
      finished = true
    })

  setTimeout(() => {
    if (!finished) controller.abort()
  }, TIMEOUT_FETCH)
}

export default login
