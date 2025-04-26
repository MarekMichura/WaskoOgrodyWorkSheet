export const EMonthEN = [
  'JANUARY', //
  'FEBRUARY',
  'MARCH',
  'APRIL',
  'MAY',
  'JUNE',
  'JULY',
  'AUGUST',
  'SEPTEMBER',
  'OCTOBER',
  'NOVEMBER',
  'DECEMBER',
] as const

export const EMonthPL = [
  'STYCZEŃ', //
  'LUTY',
  'MARZEC',
  'KWIECIEŃ',
  'MAJ',
  'CZERWIEC',
  'LIPIEC',
  'SIERPIEŃ',
  'WRZESIEŃ',
  'PAŹDZIERNIK',
  'LISTOPAD',
  'GRUDZIEŃ',
] as const

export type EMonthKey = keyof typeof EMonthEN
export type EMonthValue = (typeof EMonthEN)[EMonthKey] | (typeof EMonthPL)[EMonthKey]
