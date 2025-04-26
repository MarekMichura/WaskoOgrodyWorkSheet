import {useTranslations} from '@/utils/locale/_help/useTranslations'

import {type IFormCalendarBarProps} from '../_type/IFormCalendarBarProps'
import s from '../css.module.scss'

export function DayBar({length}: IFormCalendarBarProps) {
  const EDay = useTranslations('day')

  return Array.from({length: 7}).map((_, i) => (
    <div key={i} className={s.weekDay}>
      {EDay(i).slice(0, length)}
    </div>
  ))
}
