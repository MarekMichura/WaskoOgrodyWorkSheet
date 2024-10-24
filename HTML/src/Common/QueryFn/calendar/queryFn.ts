import {UseMutationResult} from '@tanstack/react-query'
import factory from 'wretch/index'

import {ChangeToApiDateString} from '/Function/ChangeToApiDateString'
import {INotification, INotificationType} from '/QueryFn/Notification/types/INotification'

import {IResponseCalendar} from './ICalendarResponse'

type notificationAdd = UseMutationResult<INotification[], Error, INotification, unknown>
export const queryFn = (
  prevData: IResponseCalendar | undefined,
  notification: notificationAdd,
  start?: Date,
  end?: Date
): (() => Promise<IResponseCalendar>) => {
  return (): Promise<IResponseCalendar> => {
    const promise = new Promise<IResponseCalendar>((resolve, reject) => {
      if (start == undefined || end == undefined)
        return () => Promise.reject({type: INotificationType.error, text: 'Nie poprawne dane dla kalendarza'})

      const headers: Record<string, string> = prevData ? {'If-Modified-Since': prevData.time} : {}
      const post = {start: ChangeToApiDateString(start), end: ChangeToApiDateString(end)}

      factory('/Api/v1/CalendarData')
        .headers(headers)
        .post(post)
        .badRequest(() => reject({type: INotificationType.error, text: 'Nie udało się nawiązać połączenia z serwerem'}))
        .notFound(() => reject({type: INotificationType.error, text: 'Błąd połączenia z serwerem'}))
        .internalError(() => reject({type: INotificationType.error, text: 'Wystąpił problem po stronie serwera'}))
        .timeout(() => reject({type: INotificationType.error, text: 'Przekroczono limit czasu żądania'}))
        .error(304, () => {
          resolve(prevData!)
        })
        .text((text) => {
          if (text != JSON.stringify(prevData)) {
            notification.mutate({
              text: `Pobrane dane kalendarza dla zakresu od: ${ChangeToApiDateString(start)} do: ${ChangeToApiDateString(end)}`,
              type: INotificationType.success,
            })
            return JSON.parse(text)
          }
          return prevData
        })
        .then((response: IResponseCalendar) => {
          resolve(response)
        })
        .catch((a) => console.log(a))
    })

    promise.catch((a: INotification) => {
      console.log(a)
      notification.mutate(a)
    })
    return promise
  }
}
