import type React from 'react'

export interface ICalendarDayProps {
  day: number
  month: number
  year: number
  outside: boolean
  str: string

  props?: React.HTMLAttributes<HTMLElement> & {[key: `data-${string}`]: string}
}
