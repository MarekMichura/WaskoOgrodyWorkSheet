import {HydrationBoundary, dehydrate} from '@tanstack/react-query'
import {cookies} from 'next/headers'
import {redirect} from 'next/navigation'

import {getQueryClient} from '@/app/queryClient'
import {employerWorkingDaysServerGet} from '@/utils/actions/getEmployerWorkingDays'
import {profilServerGET} from '@/utils/actions/getProfil'
import {calcCalendarDates} from '@/utils/date/calcCalendarDates'
import {ECookieNames} from '@/utils/type/common/ECookiesNames'
import {EQuery} from '@/utils/type/common/EQuery'
import {ERoute} from '@/utils/type/common/ERoute'
import {validationYearMonth} from '@/utils/zod/validationYearMonth'

import {IEmployeeGetHoursPageProps} from './IEmployeeGetHoursPageProps'
import EmployeeGetHoursPage from './page'

async function EmployeeGetHoursLayout({params}: IEmployeeGetHoursPageProps) {
  const identity = (await cookies()).get(ECookieNames.identity)?.value
  const {body: profil} = await profilServerGET(identity)
  const now = new Date()
  const start = new Date(profil!.workStartDate)
  const validation = validationYearMonth(start, now).safeParse(await params)
  if (!validation.success) {
    redirect(ERoute.getWorkingHours)
  }
  const {month, year} = validation.data
  const dates = calcCalendarDates(year, month.index)

  const {body, response} = await employerWorkingDaysServerGet(dates.at(0)!, dates.at(-1)!, identity!)
  if (!response.ok) {
    return <h1>Coś poszło nie tak</h1>
  }

  const queryClient = getQueryClient()
  queryClient.prefetchQuery({
    queryKey: EQuery.employeeGetCalendar,
    initialData: body,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <EmployeeGetHoursPage year={year} month={month.index} dates={dates} />
    </HydrationBoundary>
  )
}

export default EmployeeGetHoursLayout
