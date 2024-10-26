import {Routes, Route} from 'react-router-dom'

import {EmployerCalendarIndex} from './EmployerCalendarIndex'

import {EmployerCalendarParams} from '.'

export const EmployerCalendar = () => {
  return (
    <Routes>
      <Route index Component={EmployerCalendarIndex}></Route>
      <Route path=":year/:month" Component={() => <EmployerCalendarParams />} />
    </Routes>
  )
}
