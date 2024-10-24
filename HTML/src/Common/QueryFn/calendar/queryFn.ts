import {UseMutationResult} from '@tanstack/react-query'
import factory from 'wretch/index'

import {ChangeToApiDateString} from '/Function/ChangeToApiDateString'
import {INotification, INotificationType} from '/QueryFn/Notification/types/INotification'

import {IResponseCalendar} from './ICalendarResponse'

type notificationAdd = UseMutationResult<INotification[], Error, INotification, unknown>
export const queryFn = (
  notification: notificationAdd,
  start?: Date,
  end?: Date
): (() => Promise<IResponseCalendar | null>) => {
  if (start == undefined || end == undefined) return () => Promise.resolve(null)

  return (): Promise<IResponseCalendar> => {
    const promise = new Promise<IResponseCalendar>((resolve, reject) => {
      factory('/Api/v1/CalendarData')
        .post({start: ChangeToApiDateString(start), end: ChangeToApiDateString(end)})
        .badRequest(() => reject({type: INotificationType.error, text: 'Nie udało się nawiązać połączenia z serwerem'}))
        .notFound(() => reject({type: INotificationType.error, text: 'Błąd połączenia z serwerem'}))
        .internalError(() => reject({type: INotificationType.error, text: 'Wystąpił problem po stronie serwera'}))
        .timeout(() => reject({type: INotificationType.error, text: 'Przekroczono limit czasu żądania'}))
        .json((response: IResponseCalendar) => {
          notification.mutate({
            text: `Pobrane dane kalendarza dla zakresu
             od: ${ChangeToApiDateString(start)} do: ${ChangeToApiDateString(end)}`,
            type: INotificationType.success,
          })
          resolve(response)
        })
    })
    promise.catch((a: INotification) => notification.mutate(a))
    return promise
  }
}
