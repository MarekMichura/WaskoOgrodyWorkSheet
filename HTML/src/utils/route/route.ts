import {ERoutes} from './eRoutes'
import {linkData} from './linkData'

export const route: Record<ERoutes, string> = {
  [ERoutes.addComment]: linkData[ERoutes.addComment],
  [ERoutes.addRefund]: linkData[ERoutes.addRefund],
  [ERoutes.askBonus]: linkData[ERoutes.askBonus],
  [ERoutes.askDayOff]: linkData[ERoutes.askDayOff],
  [ERoutes.setChord]: linkData[ERoutes.setChord],
  [ERoutes.setWorkingHours]: `${linkData[ERoutes.setWorkingHours]}/:year?/:month?/:day?/`,
  [ERoutes.showCalendar]: `${linkData[ERoutes.showCalendar]}/:year?/:month?/:selYear?/:selMonth?/:selDay?/`,
}