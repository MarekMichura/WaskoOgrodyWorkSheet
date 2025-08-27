import {useCallback, useState} from 'react'

import Ripple from '@/components/ripple/ripple'

import s from './css.module.scss'
import {type IHomeTitleProps} from './IHomeTitleProps'

function HomeTile({Img, desc, subTitle, title, btn}: IHomeTitleProps) {
  const [status, setStatus] = useState(false)

  const enter = useCallback(() => {
    setStatus(true)
  }, [])
  const leave = useCallback(() => {
    setStatus(false)
  }, [])

  return (
    <article className={s.tile} onMouseEnter={enter} onMouseLeave={leave}>
      <h1 className={s.title}>{title}</h1>
      <div className={s.img}>
        <Img status={status} />
      </div>
      <h2 className={s.subTitle}>{subTitle}</h2>
      <p className={s.desc}>{desc}</p>
      <Ripple defClass className={s.btn}>
        {btn}
      </Ripple>
    </article>
  )
}

export default HomeTile
