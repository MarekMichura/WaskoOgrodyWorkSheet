import {type IIconProps} from '@/components/image/_type/IIconProps'

export interface INavLinkProps {
  href: string
  text: string
  Icon: (p: IIconProps) => React.JSX.Element
}
