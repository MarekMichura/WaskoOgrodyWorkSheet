import {useCallback, useState} from 'react'

import s from './css.module.scss'
import {type IHomeTitleProps} from './IHomeTitleProps'

function HomeTile({Img, desc, subTitle, title}: IHomeTitleProps) {
  const [status, setStatus] = useState(false)

  const enter = useCallback(() => {
    setStatus(true)
  }, [])
  const leave = useCallback(() => {
    setStatus(false)
  }, [])

  return (
    <article className={s.tile} onMouseEnter={enter} onMouseLeave={leave}>
      <div className={s.icon}>
        <Img status={status} />
      </div>
      <div className={s.data}>
        <h1 className={s.title}>{title}</h1>
        <h2 className={s.subTitle}>{subTitle}</h2>
        <p className={s.desc}>{desc}</p>
      </div>
      {/* <Ripple defClass className={s.btn}>
        {btn}
      </Ripple> */}
    </article>
  )
}

export default HomeTile
