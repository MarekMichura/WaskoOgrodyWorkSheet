// import {HydrationBoundary, dehydrate} from '@tanstack/react-query'
// import {cookies} from 'next/headers'
// import {redirect} from 'next/navigation'

// import {getQueryClient} from '@/app/queryClient'
// import {employerWorkingDaysServerGet} from '@/utils/actions/getEmployerWorkingDays'
// import {calcCalendarDates} from '@/utils/date/calcCalendarDates'
// import {ECookieNames} from '@/utils/type/common/ECookiesNames'
// import {EQuery} from '@/utils/type/common/EQuery'
// import {ERoute} from '@/utils/type/common/ERoute'
// import {validationYearMonth} from '@/utils/zod/validationYearMonth'

// import {IEmployeeGetHoursPageProps} from './IEmployeeGetHoursPageProps'

// async function EmployeeGetHoursLayout() {
//   for (let i = 0; i < 200; i++) {
//     const profil = await profilServerGET(identity)
//     if (i % 100 === 0) console.log(profil.response?.ok)
//   }

//   get profil
//   const identity = (await cookies()).get(ECookieNames.identity)?.value
//   const {body: profil} = await profilServerGET(identity)

//   validate date
//   const now = new Date()
//   const start = new Date(profil!.workStartDate)
//   const validation = validationYearMonth.safeParse(await params)
//   if (!validation.success) {
//     redirect(ERoute.getWorkingHours)
//   }

//   calculate date
//   const {month, year} = validation.data
//   const dates = calcCalendarDates(year, month.index)

//   get data
//   const {body, response} = await employerWorkingDaysServerGet(dates.at(0)!, dates.at(-1)!, identity!)
//   if (!response.ok) {
//     return <h1>Coś poszło nie tak</h1>
//   }

//   use react query
//   const queryClient = getQueryClient()
//   queryClient.prefetchQuery({
//     queryKey: EQuery.employeeGetCalendar,
//     initialData: body,
//   })

//   show
//   return <HydrationBoundary state={dehydrate(queryClient)}></HydrationBoundary>
// }

// export default EmployeeGetHoursLayout
