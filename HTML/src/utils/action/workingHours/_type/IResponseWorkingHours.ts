export type IResponseWorkingHoursDay = {
  dayOff: IResponseWorkingHoursDayOff[]
  workingHours: IResponseWorkingHoursWorkHour[]
}

export type IResponseWorkingHoursDayOff = {
  reason: string
  off: boolean
  order: number
}

export type IResponseWorkingHoursWorkHour = {
  workStart: string
  workEnd: string
  location: string
}

export type IResponseWorkingHours = Record<string, IResponseWorkingHoursDay>
