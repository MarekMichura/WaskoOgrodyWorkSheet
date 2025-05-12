import {type IChildren} from '@/utils/type/props/IChildren'

import type {IIconProps} from '@/components/image/_type/IIconProps'

export interface INavMenuProps extends IChildren {
  text: string
  Icon: (p: IIconProps) => React.JSX.Element
}
