import {type HTMLProps} from 'react'

import {type EMonth} from '@/utils/enum/EMonth'

import {type ICalcDaysResult} from './ICalcDaysResult'

export interface ICalendarProps {
  year: number
  month: EMonth

  data: Record<`${number}-${number}-${number}`, HTMLProps<HTMLButtonElement>>

  updateCalendar: (calendar: ICalcDaysResult[]) => void
  dayClick: (year: number, month: number, day: number) => void
  changeYear: (year: number) => void
  changeMonth: (month: EMonth) => void
}
