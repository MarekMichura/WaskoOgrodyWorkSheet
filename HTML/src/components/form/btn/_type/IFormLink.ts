import type {LinkProps} from 'next/link'

export interface IFormLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'as' | 'href'>, LinkProps {
  disabled?: boolean
  [key: `data-${string}`]: string | number | boolean
}
