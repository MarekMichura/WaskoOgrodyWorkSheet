export type IParams<T> = Record<keyof T, string | undefined>

export interface ICalendarParams {
  month?: string
  year?: string
}
