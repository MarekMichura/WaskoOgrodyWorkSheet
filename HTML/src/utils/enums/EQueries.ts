export const EQueries = {
  theme: ['theme'],
  lang: ['lang'],
  profil: ['profil'],
  employeeGetCalendar: ['employee', 'calendar'],
} as const

export type EQueriesKey = keyof typeof EQueries
export type EQueryValues = (typeof EQueries)[EQueriesKey]
