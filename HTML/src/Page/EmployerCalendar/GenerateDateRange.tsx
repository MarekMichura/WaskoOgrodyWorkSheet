import {NavigateFunction} from 'react-router-dom'
import factory from 'wretch/index'

import {IAction} from '/Context/IAction'
import {INotificationType} from '/Context/INotification'
import {IProfil} from '/Context/IProfil'
import {MainAction} from '/global/MAIN_ACTION'
import {links, route} from '/global/ROUTE'
import {NOTIFICATION_CALENDAR_LIFE} from '/global/TIME'

import {DateString} from './DateString'
import {Days} from './Days'
import {IResponseCalendar} from './IResponseCalendar'
import {months} from './Month'
import {DayRange} from './types'

export function GenerateDateRange(
  navigation: NavigateFunction,
  set: React.Dispatch<React.SetStateAction<IResponseCalendar>>,
  sel: Date,
  setSel: React.Dispatch<React.SetStateAction<Date>>,
  dispatch: React.Dispatch<IAction>,
  month?: string,
  year?: string,
  profil?: IProfil
) {
  dispatch({action: MainAction.LOADING_ADD, dispatch, key: 'calendar'})
  const yearNumber = Number(year)
  if (month == undefined || year == undefined) return
  if (!months.includes(month)) return

  const date = new Date(yearNumber, months.indexOf(month) + 1, 0)
  const startWork = profil!.workStartDate
  if (date.getTime() < startWork.getTime()) {
    navigation(links[route.Show_calendar])
    return
  }
  date.setDate(1)
  console.log(date)
  date.setDate(date.getDate() - Days[date.getDay() as DayRange])
  const dates: Date[] = Array(42)
  for (let i = 0; i < 42; i++) {
    dates[i] = new Date(date)
    date.setDate(date.getDate() + 1)
  }
  if (sel < dates[0] || sel > dates[41]) setSel(new Date(yearNumber, months.indexOf(month), 1))

  factory('/CalendarData')
    .post({Start: DateString(dates[0]), End: DateString(dates[dates.length - 1])})
    .badRequest(() => ({
      type: INotificationType.error,
      text: 'Nie udało się nawiązać połączenia z serwerem',
    }))
    .notFound(() => ({
      type: INotificationType.error,
      text: 'Błąd połączenia z serwerem',
    }))
    .internalError(() => ({
      type: INotificationType.error,
      text: 'Wystąpił problem po stronie serwera',
    }))
    .timeout(() => ({
      type: INotificationType.error,
      text: 'Przekroczono limit czasu żądania',
    }))
    .json((json: IResponseCalendar) => {
      set(json)
      return {
        type: INotificationType.success,
        text: `Pomyślnie pobrano dane kalendarza dla: ${year} ${month}`,
      }
    })
    .then((a) => {
      dispatch({
        action: MainAction.NOTIFICATION_ADD,
        life: NOTIFICATION_CALENDAR_LIFE,
        text: a.text,
        type: a.type,
        dispatch,
      })
    })
    .finally(() => {
      dispatch({action: MainAction.LOADING_REMOVE, dispatch, key: 'calendar'})
    })
}
