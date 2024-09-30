import factory from 'wretch'
import {abortAddon} from 'wretch/addons'
import {delay} from 'wretch/middlewares'

import {MainAction} from '/global/MAIN_ACTION'
import {NOTIFICATION_INIT_LIFE, TIMEOUT_FETCH} from '/global/TIME'

import {IActionInit} from '../type/IAction'
import {INotificationType} from '../type/INotification'
import {IProfil} from '../type/IProfil'

function getProfile({dispatch}: IActionInit) {
  const controller = new AbortController()
  let finished = false

  dispatch({action: MainAction.LOADING_ADD, key: 'Ładowanie profilu', dispatch})
  const wretch = factory('/GetProfil')
    .addon(abortAddon())
    .middlewares([delay(0)])
    .signal(controller)
    .get()
    .onAbort(() =>
      dispatch({
        action: MainAction.NOTIFICATION_ADD,
        life: NOTIFICATION_INIT_LIFE,
        type: INotificationType.error,
        text: 'Przekroczono limit czasu żądania',
        dispatch,
      })
    )
    .badRequest(() =>
      dispatch({
        action: MainAction.NOTIFICATION_ADD,
        life: NOTIFICATION_INIT_LIFE,
        type: INotificationType.error,
        text: 'Nie udało się nawiązać połączenia z serwerem',
        dispatch,
      })
    )
    .unauthorized(() =>
      dispatch({
        action: MainAction.NOTIFICATION_ADD,
        life: NOTIFICATION_INIT_LIFE,
        type: INotificationType.info,
        text: 'Nie jesteś zalogowany',
        dispatch,
      })
    )
    .notFound(() =>
      dispatch({
        action: MainAction.NOTIFICATION_ADD,
        life: NOTIFICATION_INIT_LIFE,
        type: INotificationType.error,
        text: 'Błąd połączenia z serwerem',
        dispatch,
      })
    )
    .internalError(() =>
      dispatch({
        action: MainAction.NOTIFICATION_ADD,
        life: NOTIFICATION_INIT_LIFE,
        type: INotificationType.error,
        text: 'Wystąpił problem po stronie serwera',
        dispatch,
      })
    )
    .timeout(() =>
      dispatch({
        action: MainAction.NOTIFICATION_ADD,
        life: NOTIFICATION_INIT_LIFE,
        type: INotificationType.error,
        text: 'Przekroczono limit czasu żądania',
        dispatch,
      })
    )
    .json((profil: IProfil) => {
      dispatch({action: MainAction.PROFIL_SET, profil})
      dispatch({
        action: MainAction.NOTIFICATION_ADD,
        life: NOTIFICATION_INIT_LIFE,
        type: INotificationType.info,
        text: 'Jesteś zalogowany',
        dispatch,
      })
    })
    .finally(() => {
      dispatch({action: MainAction.LOADING_REMOVE, key: 'Ładowanie profilu', dispatch})
      dispatch({action: MainAction.INIT_END})
      finished = true
    })

  setTimeout(() => {
    if (!finished) controller.abort()
  }, TIMEOUT_FETCH)
  return wretch
}

export default getProfile
