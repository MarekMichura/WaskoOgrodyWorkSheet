import {motion, useAnimation} from 'framer-motion'
import {useEffect} from 'react'

import {type IRipple} from './_type/IRipple'
import s from './css.module.scss'

function Ripple({left, top}: IRipple) {
  const animate = useAnimation()

  useEffect(() => {
    let destroyed = false
    animate.start('ripple').then(() => {
      if (destroyed) return
      animate.start('hide')
    })

    return () => {
      destroyed = true
    }
  }, [animate])

  return (
    <motion.span
      className={s.ripple}
      animate={animate}
      style={{top, left}}
      initial={{x: '-50%', y: '-50%', scale: '0', opacity: 0}}
      variants={{
        ripple: {scale: 2, opacity: 0.25, transition: {duration: 0.4}},
        hide: {scale: 0, opacity: 0},
      }}
    />
  )
}

export default Ripple
