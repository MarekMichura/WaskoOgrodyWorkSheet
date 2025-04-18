import FormBtn from '../button/formBtn'

import s from './cssCalendar.module.scss'
import {ICalendarDayProps} from './IFormCalendarBarProps'

export function CalendarDay({days, className, getData, click}: ICalendarDayProps) {
  const style = className ? `${s.day} ${className}` : s.day

  return days.map((ele, i) => (
    <FormBtn {...getData(ele)} href="#" key={i} type="Link" className={style} onClick={(e) => click(ele, e)}>
      {ele.day}
    </FormBtn>
  ))
}
