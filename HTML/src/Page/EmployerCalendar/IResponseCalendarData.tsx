import {IResponseCalendarDayOff} from './IResponseCalendarDayOff'
import {IResponseCalendarWorkHours} from './IResponseCalendarWorkHours'

export interface IResponseCalendarData {
  daysOff: IResponseCalendarDayOff[]
  workingHours: IResponseCalendarWorkHours[]
}
