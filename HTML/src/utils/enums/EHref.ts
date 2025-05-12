import {type IPaths} from '@/locale/routing'
import {type ILocalizationSecondKeys} from '@/locale/translations/en_US'

export interface IHref {
  href: IPaths
  text: ILocalizationSecondKeys<'nav'>
}

export const EHref: IHref[] = [
  {href: '/', text: 'mainPage'},
  {href: '/greenRoofs', text: 'greenRoof'},
  {href: '/projects', text: 'projects'},
  {href: '/contact', text: 'contact'},
] as const
