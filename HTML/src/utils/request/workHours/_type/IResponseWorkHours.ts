export type IResponseWorkHoursList = {
  dayOff: IResponseWorkHoursDayOff[]
  workingHours: IResponseWorkHoursWork[]
}

export type IResponseWorkHoursDayOff = {
  reason: string
  off: boolean
  order: number
}

export type IResponseWorkHoursWork = {
  workStart: string
  workEnd: string
  location: string
}

export type IResponseWorkHours = Record<string, IResponseWorkHoursList>
