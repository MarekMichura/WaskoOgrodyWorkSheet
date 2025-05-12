import {type LinkProps} from 'next/link'

import {type ILocale, type IPaths} from '@/locale/routing'

export interface IRippleLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'as' | 'href'>,
    Omit<LinkProps, 'href' | 'locale'> {
  disabled?: boolean
  href: IPaths
  locale?: ILocale
  [key: `data-${string}`]: string | number | boolean
}

export type IMotionRippleLinkProps = Omit<IRippleLinkProps, 'onAnimationStart' | 'onDragStart' | 'onDrag' | 'onDragEnd'>
