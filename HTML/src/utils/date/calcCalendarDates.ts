import {calendarDateToString} from './toString'

const daysMinus = [-5, 1, 0, -1, -2, -3, -4]
const daysPrev = [6, 0, 1, 2, 3, 4, 5]
export interface ICalendarDate {
  day: number
  month: number
  year: number
  outside: boolean
  str: string
}
export type FixedLengthArray<T, N extends number, R extends T[] = []> = R['length'] extends N ? R : FixedLengthArray<T, N, [...R, T]>

function countDates(start: number, month: number, year: number, count: number, outside: boolean): ICalendarDate[] {
  const result = []
  for (let i = 0; i < count; i++) {
    const ele = {day: start + i, month, year}
    result.push({...ele, outside, str: calendarDateToString(ele)})
  }

  return result
}

export function calcCalendarDates(year: number, month: number): FixedLengthArray<ICalendarDate, 42> {
  const date = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const nextMonth = new Date(year, month, 1)
  const dayOfWeek = date.getDay()
  const dayMonth = lastDay.getDate()
  const monday = new Date(year, month, daysMinus[dayOfWeek])

  return [
    ...countDates(monday.getDate(), monday.getMonth(), monday.getFullYear(), daysPrev[dayOfWeek], true),
    ...countDates(1, month, year, dayMonth, false),
    ...countDates(1, nextMonth.getMonth(), nextMonth.getFullYear(), 42 - dayMonth - daysPrev[dayOfWeek], true),
  ] as FixedLengthArray<ICalendarDate, 42>
}
