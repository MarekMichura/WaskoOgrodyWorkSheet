import {FixedLengthArray, ICalendarDate} from '@/utils/date/calcCalendarDates'

import {calendarClick, calendarGetData} from './IFormCalendarBarProps'

export interface IFormCalendarProps {
  title?: string
  year: number
  month: number
  className: string
  dates: FixedLengthArray<ICalendarDate, 42>

  click: calendarClick
  getData: calendarGetData
}
