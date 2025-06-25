import {type IPaths} from '@/locale/routing'
import {type ILocalization} from '@/locale/translations/en_US'

import {EProjectsLink} from './EProject'

export interface IHref {
  href: IPaths
  text: keyof ILocalization['nav']
}

export const EHref: IHref[] = [
  {href: '/', text: 'mainPage'},
  {href: '/contact', text: 'contact'},

  {href: EProjectsLink.architecture, text: 'architecture'},
  {href: EProjectsLink.greenLand, text: 'greenLand'},
  {href: EProjectsLink.greenMaintenance, text: 'greenMaintenance'},
  {href: EProjectsLink.greenRoof, text: 'greenRoof'},
  {href: EProjectsLink.plantings, text: 'plantings'},
  {href: EProjectsLink.projects, text: 'projects'},
] as const
