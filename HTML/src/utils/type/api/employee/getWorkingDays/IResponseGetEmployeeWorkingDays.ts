export interface IResponseGetEmployeeWorkingDaysDayOff {
  reason: string
  off: boolean
  order: number
}

export interface IResponseGetEmployeeWorkingDaysWorkHour {
  workStart: string
  workEnd: string
  location: string
}

export interface IResponseGetEmployeeWorkingDaysElement {
  dayOff?: IResponseGetEmployeeWorkingDaysDayOff[]
  workingHours?: IResponseGetEmployeeWorkingDaysWorkHour[]
}

export type IResponseGetEmployeeWorkingDays = Record<string, IResponseGetEmployeeWorkingDaysElement | undefined>
