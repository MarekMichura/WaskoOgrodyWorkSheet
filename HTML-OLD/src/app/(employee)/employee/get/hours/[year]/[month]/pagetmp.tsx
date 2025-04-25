// 'use client'

// import FormCalendar from '@/components/form/calendar/calendar'
// import {useEmployeeCalendar} from '@/utils/query/employeeCalendarUse'

// import s from './employeeGetHours.module.scss'
// import {IEmployeeGetHoursForm} from './IEmployeeGetHoursForm'

// function EmployerGetHoursPage_YEAR_MONTH({year, month, dates}: IEmployeeGetHoursForm) {
//   const {data} = useEmployeeCalendar(dates.at(0)!, dates.at(-1)!)

//   return (
//     <FormCalendar
//       title="Wybierz datę"
//       year={year}
//       month={month}
//       dates={dates}
//       className={s.btn}
//       getData={(day) => {
//         const d = data[day.str]

//         return {
//           'data-outside': day.outside.toString(),
//           'data-dayoff': (d?.dayOff?.length !== undefined && d.dayOff.length > 0).toString(),
//         }
//       }}
//       click={(e) => {
//         console.log(e)
//       }}
//     />
//   )
// }

// export default EmployerGetHoursPage_YEAR_MONTH
export {}
