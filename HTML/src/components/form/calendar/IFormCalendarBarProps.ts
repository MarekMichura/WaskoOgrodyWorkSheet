import {ICalendarDate} from '@/utils/date/calcCalendarDates'

export interface IFormCalendarBarProps {
  length: number
}

export type calendarGetData = (ele: ICalendarDate) => React.HTMLProps<HTMLElement> & {[key: `data-${string}`]: string | number | boolean}
export type calendarClick = (ele: ICalendarDate, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void

export interface ICalendarDayProps {
  className: string
  days: ICalendarDate[]

  getData: calendarGetData
  click: calendarClick
}
