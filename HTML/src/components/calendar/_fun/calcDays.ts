import {type EMonth} from '@/utils/enum/EMonth'

import {type ICalcDaysResult} from '../_type/ICalcDaysResult'

const daysMinus = [-5, 1, 0, -1, -2, -3, -4]
const daysPrev = [6, 0, 1, 2, 3, 4, 5]

export function calcDays(year: number, month: EMonth): ICalcDaysResult[] {
  const monthFirstDay = new Date(year, month, 1)
  const monthLastDay = new Date(year, month + 1, 0)
  const nextMonth = new Date(year, month + 1, 1)

  const monthFirstDayOfWeek = monthFirstDay.getDay()
  const monthFirstDaysCount = monthLastDay.getDate()

  const weekMonday = new Date(year, month, daysMinus[monthFirstDayOfWeek])
  const weekMondayDate = weekMonday.getDate()
  const weekMondayDayCount = daysPrev[monthFirstDayOfWeek]

  const m1 = enumerableDays(weekMonday.getFullYear(), weekMonday.getMonth(), weekMondayDayCount, weekMondayDate)
  const m2 = enumerableDays(year, month, monthFirstDaysCount)
  const m3 = enumerableDays(
    nextMonth.getFullYear(),
    nextMonth.getMonth(),
    42 - monthFirstDaysCount - weekMondayDayCount
  )
  return m1.concat(m2, m3)
}

function enumerableDays(year: number, month: EMonth, count: number, start?: number) {
  const calcDay = start === undefined ? (i: number) => i + 1 : (i: number) => i + start
  const res = Array.from<ICalcDaysResult>({length: count})

  for (let i = 0; i < count; i++) {
    const day = calcDay(i)

    res[i] = {day, month, year}
  }
  return res
}
