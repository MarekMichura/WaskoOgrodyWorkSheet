import {employerCalendarProps} from '../type/_employerCalendarProps'

export function calcDisable(props: employerCalendarProps, startWork: Date) {
  const disableMonth = [false, false, false, false, false, false, false, false, false, false, false, false]
  const startYear = startWork!.getFullYear()
  const startMonth = startWork!.getMonth()

  if (startYear !== props.year) {
    return {disableMonth, disableYear: false}
  }
  for (let i = 0; i < startMonth; i++) {
    disableMonth[i] = true
  }
  return {disableMonth, disableYear: true}
}
