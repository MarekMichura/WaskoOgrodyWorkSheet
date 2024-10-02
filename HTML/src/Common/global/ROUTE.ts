export enum route {
  Set_working_hours,
  Add_comment,
  Show_calendar,
  Ask_day_off,
  Set_chord,
  Add_found,
  Ask_bonus,
}

export const routePL: Record<route, string> = {
  [route.Set_working_hours]: 'Ustaw_godziny_pracy',
  [route.Add_comment]: 'Dodaj_komentarz',
  [route.Show_calendar]: 'Pokaż_kalkulator',
  [route.Ask_day_off]: 'Poproś_o_dzien_wolny',
  [route.Set_chord]: 'Ustaw_akordy',
  [route.Add_found]: 'Zgłoś_wydatek',
  [route.Ask_bonus]: 'Poproś_o_premie',
}

export const routeEN: Record<route, string> = {
  [route.Set_working_hours]: 'Set_working_hours',
  [route.Add_comment]: 'Add_comment',
  [route.Show_calendar]: 'Show_calendar',
  [route.Ask_day_off]: 'Ask_day_off',
  [route.Set_chord]: 'Set_chord',
  [route.Add_found]: 'Add_found',
  [route.Ask_bonus]: 'Ask_bonus',
}

export const routes: Record<route, string[]> = {
  [route.Set_working_hours]: [routePL[route.Set_working_hours], routeEN[route.Set_working_hours]],
  [route.Add_comment]: [routePL[route.Add_comment], routeEN[route.Add_comment]],
  [route.Show_calendar]: [routePL[route.Show_calendar], routeEN[route.Show_calendar]],
  [route.Ask_day_off]: [routePL[route.Ask_day_off], routeEN[route.Ask_day_off]],
  [route.Set_chord]: [routePL[route.Set_chord], routeEN[route.Set_chord]],
  [route.Add_found]: [routePL[route.Add_found], routeEN[route.Add_found]],
  [route.Ask_bonus]: [routePL[route.Ask_bonus], routeEN[route.Ask_bonus]],
}
