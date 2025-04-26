import {type IFormCalendarBarProps} from './IFormCalendarBarProps'

export interface IFormCalendarMonthBarProps extends IFormCalendarBarProps {
  disable: boolean[]
  year: number
  url: string
}
