import {myLazy} from '/lazy/myLazy'

import {ERoutes} from './eRoutes'

export const routeComponents = {
  [ERoutes.addComment]: myLazy(() => import('/page/error/error404')),
  [ERoutes.addRefund]: myLazy(() => import('/page/error/error404')),
  [ERoutes.askBonus]: myLazy(() => import('/page/error/error404')),
  [ERoutes.askDayOff]: myLazy(() => import('/page/error/error404')),
  [ERoutes.setChord]: myLazy(() => import('/page/error/error404')),
  [ERoutes.setWorkingHours]: myLazy(() => import('/page/setHours/setHoursCheck')),
  [ERoutes.showCalendar]: myLazy(() => import('/page/employerCalendar/employerCalendarCheck')),
}
