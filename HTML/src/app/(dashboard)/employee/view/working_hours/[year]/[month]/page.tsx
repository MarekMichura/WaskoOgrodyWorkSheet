import {cookies} from 'next/headers'
import {redirect} from 'next/navigation'

import FormCalendar from '@/components/form/calendar/formCalendar'
import {getProfileServer} from '@/utils/action/user/getProfileServer'
import {getLocale} from '@/utils/locale/_help/getLocale'
import {getTranslations} from '@/utils/locale/_help/getTranslations'
import {ECookies} from '@/utils/type/ECookies'
import {ERoutes} from '@/utils/type/ERoutes'
import {type IProps} from '@/utils/type/props/IProps'

import {type IWorkingHoursPrams} from './_type/IWorkingHoursParams'
import {workingHoursParamsValidate} from './_validate/workingHoursParamsValidate'

export async function generateMetadata() {
  const t = await getTranslations('employerViewWorkingHours')

  return {
    title: t('pageTitle'),
  }
}

async function EmployerViewWorkingHoursPage({params}: IProps<IWorkingHoursPrams>) {
  const [locale, p, cookieStore, t] = await Promise.all([getLocale(), params, cookies(), getTranslations('employerViewWorkingHours')])
  const [validate, profil] = await Promise.all([workingHoursParamsValidate.safeParseAsync(p), getProfileServer(cookieStore.get(ECookies.identity)?.value)])
  if (!validate.success || !profil.body) redirect(ERoutes[locale].viewWorkingHours)

  return (
    <FormCalendar
      year={validate.data.year}
      month={validate.data.month.index}
      title={t('title')}
      restriction={{from: new Date(profil.body.workStartDate), to: new Date()}}
    />
  )
}

export default EmployerViewWorkingHoursPage
