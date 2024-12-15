import {buttonProps} from '/button/type/_buttonProps'

export interface calendarInputProps {
  year: number
  month: number
  title?: string
  disablePrevYear: boolean
  disableNextYear: boolean
  disableMonth: boolean[]

  p: buttonProps[]

  setDate: (year: number, month: number) => void
}
