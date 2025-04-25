import {redirect, RedirectType} from 'next/navigation'

import {getLocale} from '@/utils/locale/_help/getLocale'
import {getTranslations} from '@/utils/locale/_help/getTranslations'
import {EMonth} from '@/utils/type/EMonth'
import {ERoutes} from '@/utils/type/ERoutes'

export async function generateMetadata() {
  const t = await getTranslations('employerViewWorkingHours')

  return {
    title: t('pageTitle'),
  }
}

async function EmployerViewWorkingHoursPage() {
  const locale = await getLocale()
  const now = new Date()
  const year = now.getFullYear()
  const month = EMonth[locale][now.getMonth()]
  const basePath = ERoutes[locale].viewWorkingHours

  const path = `${basePath}/${year}/${month}`
  redirect(path, RedirectType.replace)
}

export default EmployerViewWorkingHoursPage
