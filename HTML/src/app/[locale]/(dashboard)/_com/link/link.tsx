import Ripple from '@/components/ripple/ripple'
import {Link} from '@/locale/navigation'

import s from './css.module.scss'
import {type INavLinkProps} from './_type/INavLinkProps'

function NavLink({text, href, Icon, locale, disabled}: INavLinkProps) {
  if (disabled) return
  return (
    <Ripple as={Link} locale={locale} href={href} className={s.link}>
      {Icon}
      <span className={s.text}>{text}</span>
    </Ripple>
  )
}

export default NavLink
