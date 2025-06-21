import type {IChildren} from '@/utils/type/IChildren'
import type {JSX} from 'react'

export interface INavMenuProps extends IChildren {
  text: string
  Icon: JSX.Element
  open: boolean
  className?: string
}
