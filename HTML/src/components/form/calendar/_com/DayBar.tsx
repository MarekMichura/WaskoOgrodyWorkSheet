import {EDay} from '@/utils/type/EDay'

import {type IFormCalendarBarProps} from '../_type/IFormCalendarBarProps'
import s from '../css.module.scss'

export function DayBar({length, locale}: IFormCalendarBarProps) {
  return EDay[locale].map((mon, i) => (
    <div key={i} className={s.week}>
      {mon.slice(0, length)}
    </div>
  ))
}
