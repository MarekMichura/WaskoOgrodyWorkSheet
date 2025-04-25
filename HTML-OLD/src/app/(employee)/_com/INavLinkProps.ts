import React from 'react'

import {IIconProps} from '@/components/icon/IIconProps'

export interface INavLinkProps {
  href: string
  text: string
  Icon: (p: IIconProps) => React.JSX.Element
}
