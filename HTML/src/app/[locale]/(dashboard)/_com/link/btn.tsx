import Ripple from '@/components/ripple/ripple'
import {clsx} from '@/utils/func/clsx'

import {type INavBtnProps} from './_type/INavBtn'
import s from './css.module.scss'

function NavBtn({text, click, Icon, className}: INavBtnProps) {
  return (
    <Ripple className={clsx(s.link, className)} onClick={click}>
      {Icon}
      <span className={s.text}>{text}</span>
    </Ripple>
  )
}

export default NavBtn
