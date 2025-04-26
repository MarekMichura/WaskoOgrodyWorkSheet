export const EDayEN = [
  'MONDAY', //
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
  'SUNDAY',
] as const

export const EDayPL = [
  'PONIEDZIAŁEK', //
  'WTOREK',
  'ŚRODA',
  'CZWARTEK',
  'PIĄTEK',
  'SOBOTA',
  'NIEDZIELA',
] as const

export type EDayKey = keyof typeof EDayEN
export type EDayValue = (typeof EDayEN)[EDayKey] | (typeof EDayPL)[EDayKey]
