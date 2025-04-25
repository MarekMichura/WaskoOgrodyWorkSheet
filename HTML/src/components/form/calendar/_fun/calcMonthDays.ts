import {type ICalendarDayProps} from '../_type/ICalendarDayProps'

import {padDateStr} from './padDateStr'

const daysMinus = [-5, 1, 0, -1, -2, -3, -4]
const daysPrev = [6, 0, 1, 2, 3, 4, 5]
export function calcCalendarDates(year: number, month: number) {
  const date = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const nextMonth = new Date(year, month, 1)

  //calc first day
  const dayOfWeek = date.getDay()
  const dayMonth = lastDay.getDate()
  const monday = new Date(year, month, daysMinus[dayOfWeek])

  return [
    ...enumerateDays(monday.getDate(), monday.getMonth(), monday.getFullYear(), daysPrev[dayOfWeek], true),
    ...enumerateDays(1, month, year, dayMonth, false),
    ...enumerateDays(1, nextMonth.getMonth(), nextMonth.getFullYear(), 42 - dayMonth - daysPrev[dayOfWeek], true),
  ] as Readonly<ICalendarDayProps[]>
}

function enumerateDays(startNr: number, month: number, year: number, count: number, outside: boolean): ICalendarDayProps[] {
  const result: ICalendarDayProps[] = []
  for (let i = 0; i < count; i++) {
    const ele = {day: startNr + i, month, year}
    result.push({...ele, outside, str: padDateStr(ele)})
  }

  return result
}
