export interface IResponseCalendarWorkHours {
  start: string
  end: string
  where: string
}

export interface IResponseCalendarDayOff {
  reason: string
  order: number
  off: boolean
}

export interface IResponseCalendarData {
  daysOff?: IResponseCalendarDayOff[]
  workingHours?: IResponseCalendarWorkHours[]
}

export interface IResponseCalendar {
  data: {[date: string]: IResponseCalendarData}
  time: string
}
