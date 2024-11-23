import {toDateOnlyStr} from '/common/dateToString'
import {employerCalendarQueryDataU} from '/query/employerCalendar/types/_employerCalendarQueryData'

import {calendarState} from '../type/_calendarState'

export function getDate(date?: calendarState) {
  return function (data: employerCalendarQueryDataU) {
    return data?.data[toDateOnlyStr(date?.year, date?.month, date?.day)]
  }
}
