import {getTranslations} from '@/utils/locale/_help/getTranslations'

import EmployerViewWorkingHoursCalendar from './_com/showCalendar'

export async function generateMetadata() {
  const t = await getTranslations('employerViewWorkingHours')

  return {title: t('pageTitle')}
}

async function EmployerViewWorkingHoursPage() {
  const now = new Date()
  return <EmployerViewWorkingHoursCalendar year={now.getFullYear()} month={now.getMonth()} />
}

export default EmployerViewWorkingHoursPage
