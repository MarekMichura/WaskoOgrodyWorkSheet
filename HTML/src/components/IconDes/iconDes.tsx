import {motion} from 'framer-motion'
import {useCallback, useState} from 'react'

import RippleLink from '../form/ripple/rippleLink'

import {type IIconDescriptionProps} from './_type/IIconDescriptionProps'
import s from './css.module.scss'

function IconDescription({icon, description, title, nr}: IIconDescriptionProps) {
  const [hovered, setHovered] = useState(false)

  const hover = useCallback(() => {
    setHovered(true)
  }, [])

  const leave = useCallback(() => {
    setHovered(false)
  }, [])

  return (
    <RippleLink href="/" scroll={false} onMouseEnter={hover} onMouseLeave={leave} className={s.link}>
      <motion.div
        style={{gridArea: `icon${nr}`}}
        variants={{open: {scale: 1.3, transition: {duration: 0.5}}, close: {scale: 1}}}
        className={s.icon}
        animate={hovered ? 'open' : 'close'}
        onHoverStart={hover}
        onHoverEnd={leave}>
        {icon}
      </motion.div>
      <h2 style={{gridArea: `title${nr}`}} className={s.iconTitle}>
        {title}
      </h2>
      <p style={{gridArea: `content${nr}`}} className={s.iconDes}>
        {description}
      </p>
    </RippleLink>
  )
}

export default IconDescription
