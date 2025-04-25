import {LinkProps} from 'next/link'

import {IChildren} from '@/utils/type/common/IChildren'

export interface IBtn extends React.HTMLProps<HTMLButtonElement> {
  type: 'submit' | 'reset' | 'button'
  [key: `data-${string}`]: string | number | boolean
}

export interface IFormLink extends LinkProps, IChildren {
  type: 'Link'
  className?: string

  [key: `data-${string}`]: string | number | boolean
}

export type IFormBtn = IFormLink | IBtn

export interface IFormBtnRipple {
  posX: string
  posY: string
  key: string
}
