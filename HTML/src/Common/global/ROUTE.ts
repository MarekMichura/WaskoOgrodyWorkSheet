import {IUserRole} from './ROLE'

export enum route {
  Set_working_hours,
  Add_comment,
  Show_calendar,
  Ask_day_off,
  Set_chord,
  Add_refund,
  Ask_bonus,
}

export function routePermission(roles?: IUserRole[]): Record<route, boolean> {
  const login = roles !== undefined
  const employer = login && roles.includes(IUserRole.Employer)
  const gardener = login && roles.includes(IUserRole.Gardener)
  const blockAskForDayOff = employer && roles.includes(IUserRole.BlockAskingDayOff)
  const blockAskForRefund = employer && roles.includes(IUserRole.BlockAskingFound)
  const blockAskForBonus = employer && roles.includes(IUserRole.BlockAskingBonus)

  return {
    [route.Set_working_hours]: employer,
    [route.Add_comment]: employer,
    [route.Show_calendar]: employer,
    [route.Ask_day_off]: blockAskForDayOff,
    [route.Set_chord]: gardener,
    [route.Add_refund]: blockAskForRefund,
    [route.Ask_bonus]: blockAskForBonus,
  }
}

export const routePL: Record<route, string> = {
  [route.Set_working_hours]: '/Ustaw_godziny_pracy',
  [route.Add_comment]: '/Dodaj_komentarz',
  [route.Show_calendar]: '/Pokaż_kalkulator',
  [route.Ask_day_off]: '/Poproś_o_dzien_wolny',
  [route.Set_chord]: '/Ustaw_akordy',
  [route.Add_refund]: '/Zgłoś_wydatek',
  [route.Ask_bonus]: '/Poproś_o_premie',
}

export const routeEN: Record<route, string> = {
  [route.Set_working_hours]: '/Set_working_hours',
  [route.Add_comment]: '/Add_comment',
  [route.Show_calendar]: '/Show_calendar',
  [route.Ask_day_off]: '/Ask_day_off',
  [route.Set_chord]: '/Set_chord',
  [route.Add_refund]: '/Add_refund',
  [route.Ask_bonus]: '/Ask_bonus',
}

export const routes: Record<route, string[]> = {
  [route.Set_working_hours]: [routePL[route.Set_working_hours], routeEN[route.Set_working_hours]],
  [route.Add_comment]: [routePL[route.Add_comment], routeEN[route.Add_comment]],
  [route.Show_calendar]: [routePL[route.Show_calendar], routeEN[route.Show_calendar]],
  [route.Ask_day_off]: [routePL[route.Ask_day_off], routeEN[route.Ask_day_off]],
  [route.Set_chord]: [routePL[route.Set_chord], routeEN[route.Set_chord]],
  [route.Add_refund]: [routePL[route.Add_refund], routeEN[route.Add_refund]],
  [route.Ask_bonus]: [routePL[route.Ask_bonus], routeEN[route.Ask_bonus]],
}
