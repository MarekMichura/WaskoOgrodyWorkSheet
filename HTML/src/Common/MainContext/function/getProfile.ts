import factory from 'wretch'
import {abortAddon} from 'wretch/addons'
import {delay} from 'wretch/middlewares'

import {MainAction} from '/global/MAIN_ACTION'
import {NOTIFICATION_INIT_LIFE, TIMEOUT_FETCH} from '/global/TIME'

import {IActionInit} from '../type/IAction'
import {INotificationType} from '../type/INotification'
import {IProfil} from '../type/IProfil'

interface INotificationResponse {
  type: INotificationType | undefined
  text: string
}

function getProfile({dispatch}: IActionInit) {
  const controller = new AbortController()
  let finished = false

  dispatch({action: MainAction.LOADING_ADD, key: 'Ładowanie profilu', dispatch})
  const wretch = factory('/GetProfil')
    .addon(abortAddon())
    .middlewares([delay(0)])
    .signal(controller)
    .get()
    .onAbort(() => ({type: INotificationType.error, text: 'Przekroczono limit czasu żądania'}))
    .badRequest(() => ({type: INotificationType.error, text: 'Nie udało się nawiązać połączenia z serwerem'}))
    .unauthorized(() => ({text: 'Nie jesteś zalogowany'}))
    .notFound(() => ({life: NOTIFICATION_INIT_LIFE, type: INotificationType.error}))
    .internalError(() => ({type: INotificationType.error, text: 'Wystąpił problem po stronie serwera'}))
    .timeout(() => ({type: INotificationType.error, text: 'Przekroczono limit czasu żądania'}))
    .json((profil: IProfil) => {
      dispatch({action: MainAction.PROFIL_SET, profil})
      return {type: undefined, text: 'Jesteś zalogowany'}
    })
    .then(
      (a: INotificationResponse) =>
        a.type &&
        dispatch({
          action: MainAction.NOTIFICATION_ADD,
          life: NOTIFICATION_INIT_LIFE,
          text: a.text,
          type: a.type,
          dispatch,
        })
    )
    .catch(() => {})
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
