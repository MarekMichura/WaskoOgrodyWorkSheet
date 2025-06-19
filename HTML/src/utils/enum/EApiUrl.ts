const API = process.env.API as 'http://href'

export const EApiUrl = {
  LOG_OUT: `/api/v1.0/logout`,
  AUTHENTICATE: '/api/v1.0/authenticate',
  GET_PROFILE: '/api/v1.0/GetProfile',

  GET_EMPLOYER_WORKING_DAYS: `/api/v1.0/GetEmployerCalendar`,
} as const

type EApiUrlServerType = {[K in EApiUrlKey]: `${typeof API}${(typeof EApiUrl)[K]}`}
export const EApiUrlServer: EApiUrlServerType = {
  LOG_OUT: `${API}${EApiUrl.LOG_OUT}`,
  AUTHENTICATE: `${API}${EApiUrl.AUTHENTICATE}`,
  GET_PROFILE: `${API}${EApiUrl.GET_PROFILE}`,

  GET_EMPLOYER_WORKING_DAYS: `${API}${EApiUrl.GET_EMPLOYER_WORKING_DAYS}`,
} as const

export type EApiUrlKey = keyof typeof EApiUrl
export type EApiUrlValues = (typeof EApiUrl)[EApiUrlKey] | (typeof EApiUrlServer)[EApiUrlKey]
