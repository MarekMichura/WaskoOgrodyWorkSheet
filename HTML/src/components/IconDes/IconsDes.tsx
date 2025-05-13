import clsx from 'clsx'
import {forwardRef} from 'react'

import {type IIconsDescriptionProps} from './_type/IIconsDescriptionProps'
import s from './css.module.scss'
import IconDescription from './iconDes'

const IconsDescription = forwardRef<HTMLElement, IIconsDescriptionProps>((p, ref) => {
  const {title, className, icon1, icon2, icon3, ...props} = p

  return (
    <section className={clsx(s.section, className)} {...props} ref={ref}>
      <div className={s.content}>
        <h1 className={s.title}>
          <span>{title}</span>
        </h1>
        <div className={s.icons}>
          <IconDescription {...icon1} nr="1" />
          <IconDescription {...icon2} nr="2" />
          <IconDescription {...icon3} nr="3" />
        </div>
      </div>
    </section>
  )
})

IconsDescription.displayName = 'IconsDescription'
export default IconsDescription
