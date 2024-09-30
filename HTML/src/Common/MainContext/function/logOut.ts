import {abortAddon} from 'wretch/addons'
import factory from 'wretch/index'

import {MainAction} from '/global/MAIN_ACTION'
import {NOTIFICATION_LOGIN_LIFE, NOTIFICATION_LOGOUT_LIFE, TIMEOUT_FETCH} from '/global/TIME'

import {IActionLogout} from '../type/IAction'
import {INotificationType} from '../type/INotification'

function login({dispatch}: IActionLogout) {
  const controller = new AbortController()
  let finished = false
  dispatch({action: MainAction.LOADING_ADD, key: 'Wylogowywanie', dispatch})

  factory('/LogOut')
    .addon(abortAddon())
    .signal(controller)
    .post()
    .onAbort(() =>
      dispatch({
        action: MainAction.NOTIFICATION_ADD,
        life: NOTIFICATION_LOGIN_LIFE,
        type: INotificationType.error,
        text: 'Przekroczono limit czasu żądania',
        dispatch,
      })
    )
    .badRequest(() =>
      dispatch({
        action: MainAction.NOTIFICATION_ADD,
        life: NOTIFICATION_LOGIN_LIFE,
        type: INotificationType.error,
        text: 'Nie udało się nawiązać połączenia z serwerem',
        dispatch,
      })
    )
    .notFound(() =>
      dispatch({
        action: MainAction.NOTIFICATION_ADD,
        life: NOTIFICATION_LOGIN_LIFE,
        type: INotificationType.error,
        text: 'Błąd połączenia z serwerem',
        dispatch,
      })
    )
    .internalError(() =>
      dispatch({
        action: MainAction.NOTIFICATION_ADD,
        life: NOTIFICATION_LOGIN_LIFE,
        type: INotificationType.error,
        text: 'Wystąpił problem po stronie serwera',
        dispatch,
      })
    )
    .timeout(() =>
      dispatch({
        action: MainAction.NOTIFICATION_ADD,
        life: NOTIFICATION_LOGIN_LIFE,
        type: INotificationType.error,
        text: 'Przekroczono limit czasu żądania',
        dispatch,
      })
    )
    .text(() => {
      dispatch({
        action: MainAction.NOTIFICATION_ADD,
        life: NOTIFICATION_LOGOUT_LIFE,
        text: 'Wylogowano',
        type: INotificationType.success,
        dispatch,
      })
      dispatch({action: MainAction.PROFIL_SET, profil: undefined})
    })
    .finally(() => {
      dispatch({action: MainAction.LOADING_REMOVE, key: 'Wylogowywanie', dispatch})
      finished = true
    })

  setTimeout(() => {
    if (!finished) controller.abort()
  }, TIMEOUT_FETCH)
}

export default login
