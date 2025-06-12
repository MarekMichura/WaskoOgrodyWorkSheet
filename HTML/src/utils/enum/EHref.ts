import {type IPaths} from '@/locale/routing'
import {type ILocalization} from '@/locale/translations/en_US'

import {EProjects} from './EProject'

export interface IHref {
  href: IPaths
  text: keyof ILocalization['nav']
}

export const EHref: IHref[] = [
  {href: '/', text: 'mainPage'},
  {href: '/contact', text: 'contact'},

  {href: EProjects.architecture, text: 'architecture'},
  {href: EProjects.greenLand, text: 'greenLand'},
  {href: EProjects.greenMaintenance, text: 'greenMaintenance'},
  {href: EProjects.greenRoof, text: 'greenRoof'},
  {href: EProjects.plantings, text: 'plantings'},
  {href: EProjects.projects, text: 'projects'},
] as const
