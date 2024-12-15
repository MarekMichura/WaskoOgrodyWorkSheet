import {buttonProps} from '/button/type/_buttonProps'
import {toDateOnlyStr} from '/common/dateToString'
import {employerCalendarQueryData} from '/query/employerCalendar/types/_employerCalendarQueryData'

interface IDate {
  year: number
  month: number
  day: number
}

interface IDates {
  prevDates: IDate[]
  currDates: IDate[]
  nextDates: IDate[]
}

function calcDayMap(date: IDate, outside: boolean, data?: employerCalendarQueryData) {
  const dayStr = toDateOnlyStr(date.year, date.month, date.day)
  const dayData = data?.data[dayStr] ?? {dayOff: [], workingHours: []}

  return {
    date,
    'data-off': dayData.dayOff.findIndex((a) => !a.off) !== -1,
    'data-outside': outside,
    'data-work': dayData.workingHours.length > 0,
    'data-dayoff': dayData.dayOff.length > 0,
    'data-future': false,
    text: date.day,
  }
}

export function calcDay(
  dates: IDates,
  prevMonth: employerCalendarQueryData | undefined,
  currMonth: employerCalendarQueryData | undefined,
  nextMonth: employerCalendarQueryData | undefined,
  selYear: number,
  selMonth: number,
  selDay: number,
  className: string,
  changeSelected: (y: number, m: number, d: number) => void
) {
  const prev = dates.prevDates.map((p) => calcDayMap(p, true, prevMonth))
  const curr = dates.currDates.map((p) => calcDayMap(p, false, currMonth))
  const next = dates.nextDates.map((p) => calcDayMap(p, true, nextMonth))
  return [...prev, ...curr, ...next].map(({date, ...p}) => {
    return {
      'data-selected': date.year === selYear && date.month === selMonth && date.day === selDay,
      onClick: () => changeSelected(date.year, date.month, date.day),
      className,
      ...p,
    } as buttonProps
  })
}
