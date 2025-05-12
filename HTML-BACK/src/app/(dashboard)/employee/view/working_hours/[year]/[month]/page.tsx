import {redirect} from 'next/navigation'

import {getTranslations} from '@/utils/locale/_help/getTranslations'
import {type IProps} from '@/utils/type/props/IProps'

import EmployerViewWorkingHoursCalendar from '../../_com/showCalendar'

import {type IWorkingHoursPrams} from './_type/IWorkingHoursParams'
import {workingHoursParamsValidate} from './_validate/workingHoursParamsValidate'

export async function generateMetadata() {
  const t = await getTranslations('employerViewWorkingHours')

  return {title: t('pageTitle')}
}

async function EmployerViewWorkingHoursDynamicPage({params}: IProps<IWorkingHoursPrams>) {
  const [route, p] = await Promise.all([getTranslations('route'), params])
  const validate = await workingHoursParamsValidate.safeParseAsync(p)
  if (!validate.success) redirect(route('viewWorkingHours'))
    
  return <EmployerViewWorkingHoursCalendar year={validate.data.year} month={validate.data.month.index} />
}

export default EmployerViewWorkingHoursDynamicPage
