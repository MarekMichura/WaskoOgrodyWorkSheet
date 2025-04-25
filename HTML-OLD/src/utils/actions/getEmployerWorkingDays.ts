import {cache} from 'react'
import factory from 'wretch'

import {ECookieNames} from '@/utils/type/common/ECookiesNames'

import {ICalendarDate} from '../date/calcCalendarDates'
import {calendarDateToString} from '../date/toString'
import {URL_MAP} from '../type/api/apiUrl'
import {IResponseGetEmployeeWorkingDays} from '../type/api/employee/getWorkingDays/IResponseGetEmployeeWorkingDays'

export const employerWorkingDaysServerGet = cache(async (start: ICalendarDate, end: ICalendarDate, identity?: string) => {
  if (identity === undefined) throw new Error('No identity operation stopped')
  return employerWorkingDaysPOST(start, end, {Cookie: `${ECookieNames.identity}=${identity}`})
})

export async function employerWorkingDaysPOST(start: ICalendarDate, end: ICalendarDate, headers?: [string, string][] | Record<string, string> | Headers) {
  const response = await factory(URL_MAP.GET_EMPLOYER_WORKING_DAYS)
    .headers(headers ?? {})
    .get(`?Start=${calendarDateToString(start)}&End=${calendarDateToString(end)}`)
    .error(401, (res) => res.response)
    .res()

  const body = response.ok ? ((await response.json()) as IResponseGetEmployeeWorkingDays) : undefined
  return {response, body}
}
