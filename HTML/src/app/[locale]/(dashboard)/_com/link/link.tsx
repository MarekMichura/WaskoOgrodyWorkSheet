import {type JSX} from 'react'

import Ripple from '@/components/ripple/ripple'
import {Link} from '@/locale/navigation'
import {type ILocale, type IPaths} from '@/locale/routing'

import s from './css.module.scss'

interface INavLink {
  href: IPaths
  text: string
  Icon: JSX.Element
  disabled?: boolean
  locale?: ILocale
}

function NavLink({text, href, Icon, locale, disabled}: INavLink) {
  if (disabled) return
  return (
    <Ripple as={Link} locale={locale} href={href} className={s.link}>
      {Icon}
      <span className={s.text}>{text}</span>
    </Ripple>
  )
}

export default NavLink
