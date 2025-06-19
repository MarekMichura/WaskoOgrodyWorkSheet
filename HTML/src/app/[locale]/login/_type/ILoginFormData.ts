import {type ILocalization} from '@/i18n/translations/en'

type OnlyErrorKeys<T> = {[K in keyof T]: K extends `error${string}` ? K : never}[keyof T]
export type ILoginFormError = OnlyErrorKeys<ILocalization['login']> | undefined

export interface ILoginFormData {
  userName: string
  password: string
}
