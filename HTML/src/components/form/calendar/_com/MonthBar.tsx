import {useMemo} from 'react'

import {useTranslations} from '@/utils/locale/_help/useTranslations'

import FormLink from '../../btn/formLink'
import {type IFormCalendarMonthBarProps} from '../_type/IFormCalendarMonthBarProps'
import s from '../css.module.scss'

export function MonthBar({length, year, url, disable}: IFormCalendarMonthBarProps) {
  const EMonth = useTranslations('months')

  const data = useMemo(() => {
    return disable.map((disable, i) => {
      const month = EMonth(i)
      return {disable, month: month, href: `${url}/${year}/${EMonth(i)}/`}
    })
  }, [EMonth, disable, url, year])

  return data.map((ele, i) => (
    <FormLink href={ele.href} key={i} className={s.month} disabled={ele.disable}>
      {ele.month.slice(0, length)}
    </FormLink>
  ))
}
