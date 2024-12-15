import {MouseEvent} from 'react'

export interface createCalendarProps {
  year: number
  month: number
  title?: string

  buttonClass?: string
  setDate: (year: number, month: number) => void
  clickEvent: (e: MouseEvent<HTMLButtonElement>, year: number, month: number, day: number) => void

  dateRangeStart?: {year: number; month: number}
  dateRangeEnd?: {year: number; month: number}
}
