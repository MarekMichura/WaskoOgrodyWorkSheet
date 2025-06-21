import {type ICalcDaysResult} from '@/components/calendar/_type/ICalcDaysResult'

import {type EMonth} from '../enum/EMonth'

export function keyDate(year: number, month: EMonth, day: number) {
  const mm = (month + 1).toString().padStart(2, '0')
  const dd = day.toString().padStart(2, '0')
  return `${year}-${mm}-${dd}`
}

export function keyDateUndef(year?: number, month?: EMonth, day?: number) {
  if (year === undefined || month === undefined || day === undefined) return undefined

  return keyDate(year, month, day)
}

export function keyDateObjUndef(obj?: ICalcDaysResult) {
  if (obj === undefined) return undefined

  return keyDate(obj.year, obj.month, obj.day)
}
