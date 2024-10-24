import {UseMutationResult, QueryStatus} from '@tanstack/react-query'
import factory from 'wretch/index'

import {INotification, INotificationType} from '../Notification/types/INotification'

import {IFnQuery} from './types/IFnQuery'
import {IProfilResult} from './types/IProfil'

type notificationAdd = UseMutationResult<INotification[], Error, INotification, unknown>

export const fnQuery = (notification: notificationAdd, status: QueryStatus | undefined): (() => Promise<IFnQuery>) => {
  return () => {
    const promise = new Promise<IFnQuery>((resolve, reject) => {
      factory('/Api/v1/GetProfil')
        .get()
        .badRequest(() => reject({type: INotificationType.error, text: 'Wystąpił problem z żądaniem'}))
        .notFound(() => reject({type: INotificationType.error, text: 'Nie znaleziono żądanego zasobu'}))
        .internalError(() => reject({type: INotificationType.error, text: 'Wystąpił problem po stronie serwera'}))
        .timeout(() => reject({type: INotificationType.error, text: 'Przekroczony czas żądania'}))
        .unauthorized(() => {
          if (status == 'success') notification.mutate({type: INotificationType.info, text: 'Nie jesteś zalogowany'})
          resolve(null)
        })
        .json((profil: IProfilResult) => {
          if (status == 'pending') notification.mutate({type: INotificationType.success, text: 'Jesteś zalogowany'})
          resolve({...profil, workStartDate: new Date(Date.parse(profil.workStartDate))})
        })
    })

    promise.catch((data: INotification) => notification.mutate(data))
    return promise
  }
}
