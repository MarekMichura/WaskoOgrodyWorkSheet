import {splitRemoveEmpty} from '@/utils/locale/_routeHelper/routeHelper'
import {type ILocale} from '@/utils/locale/locales'

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

export const ERoutes: Record<ILocale, ERoutesType> = {
  en: ERoutesEN,
  pl: ERoutesPL,
}

export type ERoutesKey = keyof typeof ERoutesEN
export type ERoutesType = Record<ERoutesKey, string>

export const EExtraRoutesSplitted = [...Object.entries(ERoutesPL)] //
  .map(([key, v]) => ({key: key as ERoutesKey, value: splitRemoveEmpty(v)}))
