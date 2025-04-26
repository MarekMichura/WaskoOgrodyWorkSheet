import {splitRemoveEmpty} from '@/utils/locale/_routeHelper/routeHelper'

export const ERoutesEN = {
  profil: encodeURI('/profil'),
  login: encodeURI('/login'),
  viewWorkingHours: encodeURI('/employee/view/working_hours'),
  viewWorkingHoursDynamic: encodeURI('/employee/view/working_hours/[year]/[month]'),
} as const

export const ERoutesPL: ERoutesType = {
  profil: encodeURI('/użytkownik'),
  login: encodeURI('/zaloguj_się'),
  viewWorkingHours: encodeURI('/pracownik/pokaż/godziny_pracy'),
  viewWorkingHoursDynamic: encodeURI('/pracownik/pokaż/godziny_pracy/[year]/[month]'),
} as const

export type ERoutesKey = keyof typeof ERoutesEN
export type ERoutesType = Record<ERoutesKey, string>

export const EExtraRoutesSplitted = [...Object.entries(ERoutesPL)] //
  .map(([key, v]) => ({key: key as ERoutesKey, value: splitRemoveEmpty(v)}))
