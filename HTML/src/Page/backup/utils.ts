import {QueryClient} from '@tanstack/react-query'

import {ChangeToApiDateString} from '/Function/ChangeToApiDateString'

import {IResponseCalendar, IResponseCalendarData} from '../../Common/QueryFn/calendar/ICalendarResponse'

import {ICheckMonthYearResult} from './types/ICheckMonthYearResult'
import {IDayCalc, IDayRange} from './types/IDays'
import {Months} from './types/IMonth'
import {ISelected} from './types/ISelected'

export const getDataFromFetch = (date: Date, data?: IResponseCalendar | null) => {
  if (!data) return null
  const dateStr = ChangeToApiDateString(date)
  return data.data[dateStr]
}

export const CheckMonthYear = (now: Date, start: Date, month?: string, year?: string): ICheckMonthYearResult => {
  const yearNumber = Number(year)
  const monthNumber = Months.findIndex((a) => a == month)
  if (Number.isNaN(yearNumber) || monthNumber == -1) return null

  const lastDay = new Date(yearNumber, monthNumber + 1, 1)
  const firstDay = new Date(yearNumber, monthNumber, -1)

  if (firstDay > now) return null
  if (lastDay < start) return null

  return {yearNumber, monthNumber}
}

interface ICalcRangeResult {
  dates: Date[]
  start: Date
  end: Date
}

export const CalcRange = (year: number, month: number): ICalcRangeResult => {
  const dates: Date[] = []
  const date = new Date(year, month, 1)
  const end = new Date(year, month + 1, 0)
  const start = new Date(date)
  date.setDate(date.getDate() - IDayCalc[date.getDay() as IDayRange])

  for (let i = 0; i < 42; i++) dates.push(new Date(date.getFullYear(), date.getMonth(), date.getDate() + i))
  return {dates, start, end}
}

export const getSelectedData = (selected: ISelected, client: QueryClient) => {
  if (selected == null) return
  const data = ChangeToApiDateString(selected)

  const queries = client
    .getQueriesData<IResponseCalendar>({
      queryKey: ['employer_calendar'],
    })
    .reduce<IResponseCalendarData[]>((acc, [, value]) => {
      if (value == undefined) return acc
      if (value.data[data]) acc.push(value.data[data])
      return acc
    }, [])

  return queries
}
