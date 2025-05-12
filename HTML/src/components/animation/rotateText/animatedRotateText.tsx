'use client'

import {motion} from 'framer-motion'

import {type IAnimatedRotateText} from './_type/IAnimatedRotateText'
import AnimatedRotateTextParseLetters from './animatedRotateTextParseLetters'
import s from './css.module.scss'

function AnimatedRotateText(props: IAnimatedRotateText) {
  return (
    <motion.div className={s.con}>
      <span className={s.ele}>
        <AnimatedRotateTextParseLetters {...props} />
      </span>
      <span className={s.abs1}>
        <AnimatedRotateTextParseLetters {...props} />
      </span>
      <span className={s.abs2}>
        <AnimatedRotateTextParseLetters {...props} />
      </span>
    </motion.div>
  )
}

export default AnimatedRotateText
