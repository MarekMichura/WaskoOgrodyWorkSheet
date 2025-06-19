import {type ILocalization} from '@/locale/translations/en_US'

type OnlyErrorKeys<T> = {[K in keyof T]: K extends `error${string}` ? K : never}[keyof T]
export type ILoginFormError = OnlyErrorKeys<ILocalization['login']> | undefined

export interface ILoginFormData {
  userName: string
  password: string
}
