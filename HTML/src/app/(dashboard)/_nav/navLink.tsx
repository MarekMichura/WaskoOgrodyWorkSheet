import FormLink from '@/components/form/btn/formLink'

import {type INavLinkProps} from '../_type/INavLinkProps'
import s from '../css.module.scss'

function NavLink({href, Icon, text}: INavLinkProps) {
  return (
    <FormLink  href={href} prefetch={true} className={s.sidebarLink}>
      <Icon />
      <span className={s.sidebarLinkContent}>{text}</span>
    </FormLink>
  )
}

export default NavLink
