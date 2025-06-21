import type {IPaths, ILocale} from '@/locale/routing'
import type {JSX} from 'react'

export interface INavLinkProps {
  href: IPaths
  text: string
  Icon: JSX.Element
  disabled?: boolean
  locale?: ILocale
}
