import factory from 'wretch/index'

import {INotification, INotificationType} from '../Notification/types/INotification'

export const fnMutationLogOut = (): Promise<INotification> => {
  return new Promise((resolve, reject) => {
    factory('/Api/v1/LogOut')
      .post()
      .badRequest(() => reject({type: INotificationType.error, text: 'Nie udało się nawiązać połączenia z serwerem'}))
      .notFound(() => reject({type: INotificationType.error, text: 'Błąd połączenia z serwerem'}))
      .internalError(() => reject({type: INotificationType.error, text: 'Wystąpił problem po stronie serwera'}))
      .timeout(() => reject({type: INotificationType.error, text: 'Przekroczono limit czasu żądania'}))
      .text(() => resolve({type: INotificationType.success, text: 'Wylogowano'}))
  })
}
