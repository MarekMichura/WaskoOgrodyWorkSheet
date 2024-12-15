import {months} from '../types/_months'

export function calcDates(month: months, year: number, leftMargin?: Date, rightMargin?: Date) {
  const lastDayMonth = new Date(year, month + 1, 0)
  const firstDayPrev = new Date(year, month, 0)

  const prevMonthDays = firstDayPrev.getDay()
  const currMonthDays = lastDayMonth.getDate()
  const nextMonthDays = 42 - currMonthDays - prevMonthDays
  const prevStart = firstDayPrev.getDate() - prevMonthDays

  const prev = month === 0 ? {year: year - 1, month: 11} : {year: year, month: month - 1}
  const next = month === 11 ? {year: year + 1, month: 0} : {year: year, month: month + 1}

  const prevDates = Array.from({length: prevMonthDays}).map((_, i) => ({year: prev.year, month: prev.month, day: prevStart + i + 1}))
  const currDates = Array.from({length: currMonthDays}).map((_, i) => ({year, month, day: i + 1}))
  const nextDates = Array.from({length: nextMonthDays}).map((_, i) => ({year: next.year, month: next.month, day: i + 1}))

  const disableMonths = [false, false, false, false, false, false, false, false, false, false, false, false]
  let disablePrevYear = false
  let disableNextYear = false

  if (year === leftMargin?.getFullYear()) {
    disablePrevYear = true
    const month = leftMargin.getMonth()

    for (let i = 0; i < month; i++) {
      disableMonths[i] = true
    }
  }
  if (year === rightMargin?.getFullYear()) {
    disableNextYear = true
    const month = rightMargin.getMonth()

    for (let i = 11; i > month; i--) {
      disableMonths[i] = true
    }
  }

  return {prevDates, currDates, nextDates, prev, next, disableMonths, disablePrevYear, disableNextYear}
}
