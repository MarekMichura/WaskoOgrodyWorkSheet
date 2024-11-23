import {employerCalendarResponse} from './_employerCalendarResponse'

export interface employerCalendarQueryData {
  lastModification: string
  data: employerCalendarResponse
}

export type employerCalendarQueryDataU = employerCalendarQueryData | undefined
