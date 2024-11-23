import {ERoutes} from './eRoutes'
import {linkData} from './linkData'

export const link: Record<ERoutes, string> = {
  [ERoutes.addComment]: `/${linkData[ERoutes.addComment]}`,
  [ERoutes.addRefund]: `/${linkData[ERoutes.addRefund]}`,
  [ERoutes.askBonus]: `/${linkData[ERoutes.askBonus]}`,
  [ERoutes.askDayOff]: `/${linkData[ERoutes.askDayOff]}`,
  [ERoutes.setChord]: `/${linkData[ERoutes.setChord]}`,
  [ERoutes.setWorkingHours]: `/${linkData[ERoutes.setWorkingHours]}`,
  [ERoutes.showCalendar]: `/${linkData[ERoutes.showCalendar]}`,
}
