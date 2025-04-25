import {months, days} from '@/utils/type/common/EDate'

import FormBtn from '../button/formBtn'

import s from './cssCalendar.module.scss'
import {IFormCalendarBarProps} from './IFormCalendarBarProps'

export function MonthBar({length}: IFormCalendarBarProps) {
  return months.map((mon, i) => (
    <FormBtn type="Link" href="#" key={i} className={s.month}>
      {mon.slice(0, length)}
    </FormBtn>
  ))
}

export function DayBar({length}: IFormCalendarBarProps) {
  return days.map((mon, i) => (
    <div key={i} className={s.week}>
      {mon.slice(0, length)}
    </div>
  ))
}
