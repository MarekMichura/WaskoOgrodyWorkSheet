import {Dispatch, SetStateAction} from 'react'

import {buttonProps} from '/button/type/_buttonProps'
import {toDateOnlyStr} from '/common/dateToString'
import {employerCalendarQueryData} from '/query/employerCalendar/types/_employerCalendarQueryData'
import {employerCalendarResponse} from '/query/employerCalendar/types/_employerCalendarResponse'

import {calcDatesType} from '../type/_calcDatesType'
import {calendarState} from '../type/_calendarState'

function compareState(a: calendarState, b: calendarState) {
  if (a.year < b.year) return -1
  if (a.year > b.year) return 1
  if (a.month < b.month) return -1
  if (a.month > b.month) return 1
  if (a.day < b.day) return -1
  if (a.day > b.day) return 1
  return 0
}

function calcExtra(
  now: calendarState,
  startWork: calendarState,
  year: number,
  month: number,
  day: number,
  dict: employerCalendarResponse | undefined,
  selected: calendarState,
  setSelected: Dispatch<SetStateAction<calendarState>>,
  outside: boolean
): buttonProps {
  const date = toDateOnlyStr(year, month, day)
  const data = dict && dict[date]
  const dayOff = (data?.dayOff ?? []).length > 0
  const off = (data?.dayOff ?? []).findIndex((a) => !a.off) !== -1
  const work = (data?.workingHours ?? []).length > 0

  const curr = {year, month, day}
  const onClick = () => setSelected({year, month, day})
  const sel = selected?.day === day && selected.month === month && selected.year === year

  return {
    'data-selected': sel,
    'data-dayoff': dayOff,
    'data-off': off,
    'data-work': work,
    'data-outside': outside,
    'data-future': compareState(now, curr) < 0 || compareState(startWork, curr) > 0,
    text: day,
    onClick,
  }
}

export function calcDayData(
  sel: calendarState,
  setSel: Dispatch<SetStateAction<calendarState>>,
  {curr, prev, next}: calcDatesType,
  {year, month}: {year: number; month: number},
  prevData: employerCalendarQueryData | undefined,
  currData: employerCalendarQueryData | undefined,
  nextData: employerCalendarQueryData | undefined,
  startWork: Date
) {
  const date = new Date()
  const n = {year: date.getFullYear(), month: date.getMonth(), day: date.getDate()}
  const w = {year: startWork.getFullYear(), month: startWork.getMonth(), day: startWork.getDate()}
  const tab = new Array<buttonProps>(42)
  for (let i = 0; i < 42; i++) {
    if (i < curr.breakDay1) {
      tab[i] = calcExtra(n, w, prev.year, prev.month, curr.prevStart + i + 1, prevData?.data, sel, setSel, true)
    } else if (i < curr.breakDay2) {
      tab[i] = calcExtra(n, w, year, month, i - curr.breakDay1 + 1, currData?.data, sel, setSel, false)
    } else {
      tab[i] = calcExtra(n, w, next.year, next.month, i - curr.breakDay2 + 1, nextData?.data, sel, setSel, true)
    }
  }
  return tab
}
