import factory from 'wretch/index'

import {INotificationType} from '../Notification/types/INotification'

import {ILoginRequestData, IFnMutationResult, ILoginResponse} from './types/IFnMutationLogin'

export function fnMutationLogin(data: ILoginRequestData): Promise<IFnMutationResult> {
  return new Promise((resolve, reject) => {
    return factory('/Api/v1/Authenticate')
      .post(data)
      .badRequest(() => reject({type: INotificationType.error, text: 'Nie udało się nawiązać połączenia z serwerem'}))
      .notFound(() => reject({type: INotificationType.error, text: 'Błąd połączenia z serwerem'}))
      .internalError(() => reject({type: INotificationType.error, text: 'Wystąpił problem po stronie serwera'}))
      .timeout(() => reject({type: INotificationType.error, text: 'Przekroczono limit czasu żądania'}))
      .json((response: ILoginResponse) => {
        if (response.authenticated)
          resolve({profil: response.profil, text: 'Zalogowano', type: INotificationType.success})
        else reject({type: INotificationType.error, text: 'Niepoprawny login lub hasło'})
      })
      .catch(() => reject({type: INotificationType.error, text: 'Nieznany problem'}))
  })
}
