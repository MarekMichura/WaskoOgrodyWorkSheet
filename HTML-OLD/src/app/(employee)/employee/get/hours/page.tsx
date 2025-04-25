import {redirect, RedirectType} from 'next/navigation'

import {monthsEnglish} from '@/utils/type/common/EDate'
import {ERoute} from '@/utils/type/common/ERoute'

function EmployeeGetHoursRedirect() {
  const now = new Date()
  const path = `${ERoute.getWorkingHours}/${now.getFullYear()}/${monthsEnglish[now.getMonth()]}`
  redirect(path, RedirectType.replace)
}

export default EmployeeGetHoursRedirect
