import {motion} from 'framer-motion'

import {type IAnimatedRotateText} from './_type/IAnimatedRotateText'
import s from './css.module.scss'

function AnimatedRotateTextParseLetters({text, open, close}: IAnimatedRotateText) {
  return text.split('').map((char, i) => {
    return (
      <motion.span
        key={i}
        className={s.letter}
        initial={{transform: 'translateY(0%)'}}
        variants={{
          [open ?? 'open']: {
            transform: 'translateY(-200%)',
            transition: {delay: i / 50, duration: 0.8},
          },
          [close ?? 'close']: {
            transform: 'translateY(0)',
            transition: {delay: i / 50, duration: 0.8},
          },
        }}>
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    )
  })
}

export default AnimatedRotateTextParseLetters
