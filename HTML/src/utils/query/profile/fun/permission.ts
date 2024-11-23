import {ERoutes} from '/route/eRoutes'

import {EProfileRoles} from '../types/eProfileRoles'

export function calcPermission(roles: EProfileRoles[]): Record<ERoutes, boolean> {
  const login = roles !== undefined
  const employer = login && roles.includes(EProfileRoles.Employer)
  const gardener = login && roles.includes(EProfileRoles.Gardener)
  const blockAskForDayOff = employer && !roles.includes(EProfileRoles.BAskDayOff)
  const blockAskForRefund = employer && !roles.includes(EProfileRoles.BAskFound)
  const blockAskForBonus = employer && !roles.includes(EProfileRoles.BAskBonus)

  return {
    [ERoutes.addComment]: employer,
    [ERoutes.addRefund]: blockAskForRefund,
    [ERoutes.askBonus]: blockAskForBonus,
    [ERoutes.askDayOff]: blockAskForDayOff,
    [ERoutes.setChord]: gardener,
    [ERoutes.setWorkingHours]: employer,
    [ERoutes.showCalendar]: employer,
  }
}
