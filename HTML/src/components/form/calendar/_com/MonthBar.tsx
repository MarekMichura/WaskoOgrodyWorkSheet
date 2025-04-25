import {EMonth} from '@/utils/type/EMonth'

import FormLink from '../../btn/formLink'
import {type IFormCalendarMonthBarProps} from '../_type/IFormCalendarMonthBarProps'
import s from '../css.module.scss'

export function MonthBar({length, locale, disable}: IFormCalendarMonthBarProps) {
  return EMonth[locale].map((mon, i) => (
    <FormLink href="#" key={i} className={s.month} disabled={disable?.at(i)}>
      {mon.slice(0, length)}
    </FormLink>
  ))
}
