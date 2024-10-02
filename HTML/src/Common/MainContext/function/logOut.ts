import {abortAddon} from 'wretch/addons'
import factory from 'wretch/index'

import {MainAction} from '/global/MAIN_ACTION'
import {NOTIFICATION_LOGOUT_LIFE, TIMEOUT_FETCH} from '/global/TIME'

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
    .onAbort(() => ({type: INotificationType.error, text: 'Przekroczono limit czasu żądania'}))
    .badRequest(() => ({type: INotificationType.error, text: 'Nie udało się nawiązać połączenia z serwerem'}))
    .notFound(() => ({type: INotificationType.error, text: 'Błąd połączenia z serwerem'}))
    .internalError(() => ({type: INotificationType.error, text: 'Wystąpił problem po stronie serwera'}))
    .timeout(() => ({type: INotificationType.error, text: 'Przekroczono limit czasu żądania'}))
    .text(() => {
      dispatch({action: MainAction.PROFIL_SET, profil: undefined})
      return {text: 'Wylogowano', type: INotificationType.success}
    })
    .then((a) =>
      dispatch({
        action: MainAction.NOTIFICATION_ADD,
        life: NOTIFICATION_LOGOUT_LIFE,
        text: a.text,
        type: a.type,
        dispatch,
      })
    )
    .finally(() => {
      dispatch({action: MainAction.LOADING_REMOVE, key: 'Wylogowywanie', dispatch})
      finished = true
    })

  setTimeout(() => {
    if (!finished) controller.abort()
  }, TIMEOUT_FETCH)
}

export default login
