import {calcDatesType} from '../type/_calcDatesType'
import {employerCalendarProps} from '../type/_employerCalendarProps'

export function calcDates({month, year}: employerCalendarProps): calcDatesType {
  const lastDayMonth = new Date(year, month + 1, 0)
  const firstDayPrev = new Date(year, month, 0)
  const breakDay1 = firstDayPrev.getDay()
  const breakDay2 = lastDayMonth.getDate() + breakDay1
  const prevStart = firstDayPrev.getDate() - breakDay1

  if (month === 11) {
    return {
      prev: {year: year, month: 10},
      curr: {breakDay1, breakDay2, prevStart},
      next: {year: year + 1, month: 0},
    }
  }
  if (month === 0) {
    return {
      prev: {year: year - 1, month: 11},
      curr: {breakDay1, breakDay2, prevStart},
      next: {year: year, month: 1},
    }
  }
  return {
    prev: {year: year, month: month - 1},
    curr: {breakDay1, breakDay2, prevStart},
    next: {year: year, month: month + 1},
  }
}
