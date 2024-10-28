import {IUserRole} from '/QueryFn/profil/types/IUserRole'

import {myLazy} from './myLazy'

export enum IRoute {
  showCalendar,
  setWorkingHours,
  setChord,
  askDayOff,
  askBonus,
  addRefund,
  addComment,
}

const max = Math.max(...(Object.values(IRoute).filter((a) => Number(a)) as number[])) + 1
export enum IAdditionalRoute {
  mainPage = max,
  login = max + 1,
  Error = max + 2,
}

export const routePermission = (roles?: IUserRole[]): Record<IRoute, boolean> => {
  const login = roles !== undefined
  const employer = login && roles.includes(IUserRole.Employer)
  const gardener = login && roles.includes(IUserRole.Gardener)
  const blockAskForDayOff = employer && !roles.includes(IUserRole.BlockAskingDayOff)
  const blockAskForRefund = employer && !roles.includes(IUserRole.BlockAskingFound)
  const blockAskForBonus = employer && !roles.includes(IUserRole.BlockAskingBonus)

  return {
    [IRoute.setWorkingHours]: employer,
    [IRoute.addComment]: employer,
    [IRoute.showCalendar]: employer,
    [IRoute.askDayOff]: blockAskForDayOff,
    [IRoute.setChord]: gardener,
    [IRoute.addRefund]: blockAskForRefund,
    [IRoute.askBonus]: blockAskForBonus,
  }
}

export const links: Record<IRoute, string> = {
  [IRoute.setWorkingHours]: '/Ustaw_godziny_pracy',
  [IRoute.addComment]: '/Dodaj_komentarz',
  [IRoute.showCalendar]: '/Pokaz_kalendarz',
  [IRoute.askDayOff]: '/Popros_o_dzien_wolny',
  [IRoute.setChord]: '/Ustaw_akordy',
  [IRoute.addRefund]: '/Popros_o_refund',
  [IRoute.askBonus]: '/Popros_o_premie',
}

export const routes: Record<IRoute, string> = {
  [IRoute.setWorkingHours]: links[IRoute.setWorkingHours].slice(1),
  [IRoute.addComment]: links[IRoute.addComment].slice(1),
  [IRoute.showCalendar]: `${links[IRoute.showCalendar].slice(1)}/:year?/:month?`,
  [IRoute.askDayOff]: links[IRoute.askDayOff].slice(1),
  [IRoute.setChord]: links[IRoute.setChord].slice(1),
  [IRoute.addRefund]: links[IRoute.addRefund].slice(1),
  [IRoute.askBonus]: links[IRoute.askBonus].slice(1),
}

export const endPoints = {
  [IRoute.setWorkingHours]: myLazy(() => import('/PageSetWorkingHours/index')),
  [IRoute.addComment]: myLazy(() => import('/PageSetWorkingHours/index')),
  [IRoute.showCalendar]: myLazy(() => import('/PageCalendar/index')),
  [IRoute.askDayOff]: myLazy(() => import('/PageSetWorkingHours/index')),
  [IRoute.setChord]: myLazy(() => import('/PageSetWorkingHours/index')),
  [IRoute.addRefund]: myLazy(() => import('/PageSetWorkingHours/index')),
  [IRoute.askBonus]: myLazy(() => import('/PageSetWorkingHours/index')),
  [IAdditionalRoute.login]: myLazy(() => import('/PageLogin/index')),
  [IAdditionalRoute.mainPage]: myLazy(() => import('/PageMain/index')),
  [IAdditionalRoute.Error]: myLazy(() => import('/PageError/index')),
}
