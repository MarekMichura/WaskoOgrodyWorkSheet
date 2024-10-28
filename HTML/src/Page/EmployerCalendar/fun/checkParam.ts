import {Params} from 'react-router-dom'

import {IMonth} from '/InputCalendar/IMonth'

import {ICalendarParam} from '../types/ICalendarParams'

export const checkParam = (param: Params): ICalendarParam => {
  if (param.year == undefined && param.month == undefined) {
    const now = new Date()
    return {month: now.getMonth(), year: now.getFullYear()}
  }

  const year = Number(param.year)
  const month = IMonth[param.month as unknown as IMonth] as unknown as IMonth
  if (Number.isNaN(year) || month == undefined) throw Error('Nie poprawne dane')
  return {month, year}
}
