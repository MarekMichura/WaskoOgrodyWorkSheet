import {type Variants} from 'framer-motion'

export const navVariations: Variants = {
  disable: {translateX: 0, transition: {duration: 0}},
  init: {translateX: '100%', transition: {duration: 0}},

  close: {translateX: '100%'},
  open: {translateX: 0},
}

export const langVariations: Variants = {
  disable: {translateX: '0', right: '0', opacity: 1, transition: {duration: 0}},
  init: {translateX: '100%', right: '-1rem', opacity: 0, transition: {duration: 0}},

  close: {translateX: '100%', right: '-1rem', opacity: 0},
  open: {translateX: '0%', right: 0, opacity: 1},
}

export const backVariations: Variants = {
  open: {opacity: 0.3, pointerEvents: 'all'},
  close: {opacity: 0, pointerEvents: 'none'},
}
