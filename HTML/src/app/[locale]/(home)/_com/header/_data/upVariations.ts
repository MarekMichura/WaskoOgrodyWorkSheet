import {type Variants} from 'framer-motion'

export const navVariations: Variants = {
  disable: {x: 0, transition: {duration: 0}},
  init: {x: '100%', transition: {duration: 0}},

  close: {x: '100%'},
  open: {x: 0},
}

export const langVariations: Variants = {
  disable: {x: '0', right: '0', opacity: 1, transition: {duration: 0}},
  init: {x: '100%', right: '-1rem', opacity: 0, transition: {duration: 0}},

  close: {x: '100%', right: '-1rem', opacity: 0},
  open: {x: '0%', right: 0, opacity: 1},
}

export const backVariations: Variants = {
  open: {opacity: 0.3, pointerEvents: 'all'},
  close: {opacity: 0, pointerEvents: 'none'},
}
