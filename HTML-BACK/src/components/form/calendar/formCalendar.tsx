'use client'

import ArrowIcon from '@/components/image/svg/arrow'
import {useTranslations} from '@/utils/locale/_help/useTranslations'

import FormLink from '../btn/formLink'

import {DayBar} from './_com/DayBar'
import {MonthBar} from './_com/MonthBar'
import {type ICalendarDayProps} from './_type/ICalendarDayProps'
import s from './css.module.scss'

interface IFormCalendarProps {
  year: number
  month: number
  url: string
  title: string
  days: Readonly<ICalendarDayProps[]>

  rest: {
    nextYear: boolean
    prevYear: boolean
    month: boolean[]
  }
}

function FormCalendar({year, month, title, url, rest, days}: IFormCalendarProps) {
  const EMonth = useTranslations('months')

  return (
    <div className={s.container}>
      <div className={s.top}>
        <h1>{title ?? '\u00A0'}</h1>
        <div className={s.navigation}>
          <FormLink href={`${url}/${year - 1}/${EMonth(11)}`} disabled={rest.prevYear}>
            <ArrowIcon style={{transform: 'rotate(180deg)'}} />
          </FormLink>
          <h2>{`${year} ${EMonth(month)}`}</h2>
          <FormLink href={`${url}/${year + 1}/${EMonth(0)}`} disabled={rest.nextYear}>
            <ArrowIcon />
          </FormLink>
        </div>
      </div>
      <div className={s.months}>
        <MonthBar length={3} year={year} url={url} disable={rest.month} />
      </div>
      <div className={s.weekIndicator} />
      <div className={s.weekDays}>
        <DayBar length={2} />
      </div>
      <div className={`${s.days} ${s.week}`}>
        {days.map((ele, i) => {
          return (
            <FormLink href={`${url}/${ele.year}/${EMonth(ele.month)}?day=${ele.day}`} key={i} {...ele?.props}>
              {ele.day}
            </FormLink>
          )
        })}
      </div>
    </div>
  )
}

export default FormCalendar
