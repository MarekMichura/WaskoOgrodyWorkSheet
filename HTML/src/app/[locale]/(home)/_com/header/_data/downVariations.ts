import {type Variants} from 'framer-motion'

export const navVariations: Variants = {
  disable: {height: 'auto', transition: {duration: 0}},
  init: {height: '0', transition: {duration: 0}},

  close: {height: '0'},
  open: {height: 'auto'},
}

export const backVariations: Variants = {
  open: {opacity: 0.3, pointerEvents: 'all'},
  close: {opacity: 0, pointerEvents: 'none'},
}
