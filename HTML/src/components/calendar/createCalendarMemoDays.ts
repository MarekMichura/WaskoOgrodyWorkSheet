import {buttonProps} from '/button/type/_buttonProps'

import {createCalendarProps} from './types/_createCalendarProps'

export function createCalendarMemoDays(props: createCalendarProps) {
  const p: buttonProps[] = Array.from({length: 42}, () => ({className: props.buttonClass, text: ''}))
  const disMonth = Array.from({length: 12}, () => false)
  let disPrevYear = false
  let disNextYear = false

  if (props.year === props.dateRangeStart?.year) {
    for (let i = 0; i < props.dateRangeStart.month; i++) disMonth[i] = true
    disPrevYear = true
  }
  if (props.year === props.dateRangeEnd?.year) {
    for (let i = 11; i > props.dateRangeEnd.month; i--) disMonth[i] = true
    disNextYear = true
  }

  const firstBrake = new Date(props.year, props.month, 0)
  const firstBrakeDays = 7 - firstBrake.getDay()
  const firstBrakeDay = firstBrake.getDate() - firstBrakeDays
  const firstBreakYear = firstBrake.getFullYear()
  const firstBreakMonth = firstBrake.getMonth()
  for (let i = 0; i <= firstBrakeDays; i++) {
    const day = i
    const date = firstBrakeDay + i
    p[day].text = date
    p[day]['data-outside'] = false
    p[day].onClick = (e) => props.clickEvent(e, firstBreakYear, firstBreakMonth, date)
  }
  const secondBreak = new Date(props.year, props.month + 1, 0)
  const secondBreakDays = secondBreak.getDate()
  for (let i = 1; i <= secondBreakDays; i++) {
    const day = i + firstBrakeDays
    p[day].text = i
    p[day]['data-outside'] = true
    p[day].onClick = (e) => props.clickEvent(e, props.year, props.month, i)
  }
  const thirdBrak = new Date(props.year, props.month + 1, 1)
  const thirdBrakDays = 41 - secondBreakDays - firstBrakeDays
  const thirdBrakYear = thirdBrak.getFullYear()
  const thirdBrakMonth = thirdBrak.getMonth()
  for (let i = 1; i <= thirdBrakDays; i++) {
    const day = i + secondBreakDays + firstBrakeDays
    p[day].text = i
    p[day]['data-outside'] = false
    p[day].onClick = (e) => props.clickEvent(e, thirdBrakYear, thirdBrakMonth, i)
  }

  return {p, disMonth, disNextYear, disPrevYear}
}
