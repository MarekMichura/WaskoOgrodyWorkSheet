import FormBtn from '@/components/form/button/formBtn'

import s from '../cssEmployee.module.scss'

import {INavLinkProps} from './INavLinkProps'

function NavLink({href, Icon, text}: INavLinkProps) {
  return (
    <FormBtn type="Link" href={href} prefetch={true} className={s.sidebarLink}>
      <Icon />
      <span className={s.sidebarLinkContent}>{text}</span>
    </FormBtn>
  )
}

export default NavLink
