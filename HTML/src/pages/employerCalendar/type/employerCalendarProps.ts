import {profileQueryData} from '/query/profile/types/_profileQuery'

export interface employerCalendarProps {
  profil: profileQueryData

  year: number
  month: number

  selYear: number
  selMonth: number
  selDay: number

  monthName: string
  selMonthName: string
}
