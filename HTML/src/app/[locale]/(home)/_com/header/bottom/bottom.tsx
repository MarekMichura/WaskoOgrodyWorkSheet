import {forwardRef} from 'react'

import s from './css.module.scss'

const HeaderBottom = forwardRef<HTMLElement>((_, ref) => {
  return <section ref={ref} className={s.container}>
    
  </section>
})

HeaderBottom.displayName = 'BottomHeader'
export default HeaderBottom
