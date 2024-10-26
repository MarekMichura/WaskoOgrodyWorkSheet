import {NavigateFunction} from 'react-router-dom'

import {IResponseCalendarData} from '/QueryFn/calendar/ICalendarResponse'
import {IRoute, links} from '/Router/IRoute'

import {ICheckMonthYearResult} from './types/ICheckMonthYearResult'
import {ICssDateStatus} from './types/ICssDateStatus'
import {Months} from './types/IMonth'

export const monthActive = (data: ICheckMonthYearResult, startWork: Date, now: Date, month: number) => {
  if (!data) return false
  const start = new Date(data.yearNumber, month, 1)
  const end = new Date(data.yearNumber, month + 1, 0)

  if (month === data.monthNumber) return 'current'
  if (end < startWork) return ''
  if (start > now) return ''
  return 'ok'
}

export const yearActive = (startWork: Date, now: Date, year: number) => {
  if (year > now.getFullYear()) return false
  if (year < startWork.getFullYear()) return false
  return true
}

export const setMonth = (navigate: NavigateFunction, month: number, year: number) => {
  navigate(`${links[IRoute.showCalendar]}/${Months[month]}/${year}`)
}

export const setYear = (navigate: NavigateFunction, year: number, top: boolean) => {
  navigate(`${links[IRoute.showCalendar]}/${Months[top ? 11 : 0]}/${year}`)
}

export const handleDate = (
  date: Date,
  start: Date,
  end: Date,
  haveData: boolean,
  statusCheck?: IResponseCalendarData | null
) => {
  if (haveData) return {status: 'not', isInMonth: true}

  const isInMonth = date < start || date > end
  let status: ICssDateStatus = 'notSet'
  if (statusCheck?.workingHours.length ?? 0 > 0) status = 'ok'
  else if (statusCheck?.daysOff.length ?? 0 > 0) status = 'off'
  else if (isInMonth) status = 'not'

  return {status, isInMonth}
}
