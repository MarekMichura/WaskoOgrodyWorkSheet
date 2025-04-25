import {type INavMenuProps} from '../_type/INavMenuProps'
import s from '../css.module.scss'

function NavMenu({Icon, text, children}: INavMenuProps) {
  return (
    <span className={s.sidebarMenu}>
      <div className={s.sidebarLink}>
        <Icon />
        <span className={s.sidebarLinkContent}>{text}</span>
        <input type="checkbox" className={s.sidebarInput} />
      </div>
      <div className={s.sidebarMenuItem}>
        <div>{children}</div>
      </div>
    </span>
  )
}

export default NavMenu
