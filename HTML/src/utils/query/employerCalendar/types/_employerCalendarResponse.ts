export interface employerCalendarDayData {
  dayOff: {
    reason: string
    off: boolean
  }[]
  workingHours: {
    workStart: string
    workEnd: string
    location: string
  }[]
}

export type employerCalendarResponse = {[date: string]: employerCalendarDayData}
