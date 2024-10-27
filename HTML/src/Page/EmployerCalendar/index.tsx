import {Routes, Route} from 'react-router-dom'

import {EmployerCalendarParams} from './EmployerCalendar'
import {EmployerCalendarIndex} from './EmployerCalendarIndex'

const EmployerCalendar = () => {
  return (
    <Routes>
      <Route index Component={EmployerCalendarIndex}></Route>
      <Route path=":year/:month" Component={() => <EmployerCalendarParams />} />
    </Routes>
  )
}

export default EmployerCalendar
