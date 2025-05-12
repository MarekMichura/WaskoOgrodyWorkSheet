import {type ILocale} from '@/locale/routing'

import {type IParams} from './IParams'

export type ILocaleElements = {
  locale: ILocale
}

export type ILocaleParam = IParams<ILocaleElements>
