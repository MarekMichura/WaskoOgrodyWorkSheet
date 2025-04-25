import {cookies} from 'next/headers'

import FormCalendar from '@/components/form/calendar/formCalendar'
import {serverGetProfile} from '@/utils/action/user/serverGetProfile'
import {getTranslations} from '@/utils/locale/_help/getTranslations'
import {ECookies} from '@/utils/type/ECookies'

interface IEmployerViewWorkingHoursCalendarProps {
  month: number
  year: number
}

async function EmployerViewWorkingHoursCalendar({year, month}: IEmployerViewWorkingHoursCalendarProps) {
  const [t, cookieStore] = await Promise.all([getTranslations('employerViewWorkingHours'), cookies()])
  const {body: profil} = await serverGetProfile(cookieStore.get(ECookies.identity)?.value)

  return <FormCalendar year={year} month={month} title={t('title')} restriction={{from: new Date(profil!.workStartDate), to: new Date()}} />
}

export default EmployerViewWorkingHoursCalendar
