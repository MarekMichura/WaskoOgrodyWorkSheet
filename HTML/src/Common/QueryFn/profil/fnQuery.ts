import {UseMutationResult, QueryStatus} from '@tanstack/react-query'
import factory from 'wretch/index'

import {INotification, INotificationType} from '../Notification/types/INotification'

import {IFnQuery} from './types/IFnQuery'
import {IProfil, IProfilResult} from './types/IProfil'

type notificationAdd = UseMutationResult<INotification[], Error, INotification, unknown>

export const fnQuery = (
  prevData: IProfil | undefined,
  notification: notificationAdd,
  status: QueryStatus | undefined
): (() => Promise<IFnQuery>) => {
  return () => {
    const headers: Record<string, string> = prevData ? {'If-Modified-Since': prevData.time} : {}

    const promise = new Promise<IFnQuery>((resolve, reject) => {
      factory('/Api/v1/GetProfil')
        .headers(headers)
        .get()
        .badRequest(() => reject({type: INotificationType.error, text: 'Wystąpił problem z żądaniem'}))
        .notFound(() => reject({type: INotificationType.error, text: 'Nie znaleziono żądanego zasobu'}))
        .internalError(() => reject({type: INotificationType.error, text: 'Wystąpił problem po stronie serwera'}))
        .timeout(() => reject({type: INotificationType.error, text: 'Przekroczony czas żądania'}))
        .error(304, () => {
          resolve(prevData!)
        })
        .unauthorized(() => {
          if (status == 'success') notification.mutate({type: INotificationType.info, text: 'Nie jesteś zalogowany'})
          resolve(null)
        })
        .json((profil: IProfilResult) => {
          if (status == 'pending') notification.mutate({type: INotificationType.success, text: 'Jesteś zalogowany'})
          resolve({...profil, workStartDate: new Date(Date.parse(profil.workStartDate))})
        })
        .catch((error) => {
          console.log(error)
          reject({
            type: INotificationType.error,
            text: 'Podczas podtrzymywania uwierzytelniania wystąpił nieznany problem',
          })
        })
    })

    promise.catch((data: INotification) => notification.mutate(data))
    return promise
  }
}
