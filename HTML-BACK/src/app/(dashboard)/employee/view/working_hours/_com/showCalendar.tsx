'use client'

import {type CSSProperties, useMemo} from 'react'

import {calcDateRestrictions} from '@/components/form/calendar/_fun/calcDateRestrictions'
import {calcCalendarDates} from '@/components/form/calendar/_fun/calcMonthDays'
import FormCalendar from '@/components/form/calendar/formCalendar'
import {useTranslations} from '@/utils/locale/_help/useTranslations'
import {useProfil} from '@/utils/query/auth/useProfil'
import {useWorkHours} from '@/utils/query/workHours/useWorkHours'

interface IEmployerViewWorkingHoursCalendarProps {
  month: number
  year: number
}

function EmployerViewWorkingHoursCalendar({year, month}: IEmployerViewWorkingHoursCalendarProps) {
  const t = useTranslations('employerViewWorkingHours')
  const route = useTranslations('route')
  const {profil} = useProfil()

  const {days, rest} = useMemo(() => {
    const restrictionFrom = new Date(profil.workStartDate)
    const restrictionTo = new Date()

    return {
      days: calcCalendarDates(year, month),
      rest: calcDateRestrictions(year, month, restrictionFrom, restrictionTo),
    }
  }, [year, month, profil])
  const {workHours} = useWorkHours(days.at(0)?.str, days.at(-1)?.str)

  const _days = useMemo(() => {
    return days.map((day) => {
      const dayData = workHours[day.str]
      const style: CSSProperties = {}
      if (day.outside) style.opacity = 0.3
      if ((dayData?.workingHours.length ?? 0) === 0) style.color = 'red'
      if ((dayData?.dayOff.length ?? 0) > 0) style.color = 'green'
      day.props = {style}
      day.props['data-test'] = "";
      return day
    })
  }, [days, workHours])

  return (
    <FormCalendar
      year={year}
      month={month}
      title={t('title')}
      url={route('viewWorkingHours')}
      days={_days}
      rest={rest} //
    />
  )
}

export default EmployerViewWorkingHoursCalendar
