import {FixedLengthArray, ICalendarDate} from '@/utils/date/calcCalendarDates'

export interface IEmployeeGetHoursForm {
  year: number
  month: number
  dates: FixedLengthArray<ICalendarDate, 42>
}
