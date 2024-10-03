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
  const blockAskForDayOff = employer && !roles.includes(IUserRole.BlockAskingDayOff)
  const blockAskForRefund = employer && !roles.includes(IUserRole.BlockAskingFound)
  const blockAskForBonus = employer && !roles.includes(IUserRole.BlockAskingBonus)

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

export const links: Record<route, string> = {
  [route.Set_working_hours]: '/Ustaw_godziny_pracy',
  [route.Add_comment]: '/Dodaj_komentarz',
  [route.Show_calendar]: '/Pokaz_kalendarz',
  [route.Ask_day_off]: '/Popros_o_dzien_wolny',
  [route.Set_chord]: '/Ustaw_akordy',
  [route.Add_refund]: '/Zglos_wydatek',
  [route.Ask_bonus]: '/Popros_o_premie',
}

export const routes: Record<route, string> = {
  [route.Set_working_hours]: 'Ustaw_godziny_pracy',
  [route.Add_comment]: 'Dodaj_komentarz',
  [route.Show_calendar]: 'Pokaz_kalendarz/:month?/:year?',
  [route.Ask_day_off]: 'Popros_o_dzien_wolny',
  [route.Set_chord]: 'Ustaw_akordy',
  [route.Add_refund]: 'Zglos_wydatek',
  [route.Ask_bonus]: 'Popros_o_premie',
}
