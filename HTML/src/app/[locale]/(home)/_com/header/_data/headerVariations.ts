import {type Variants} from 'framer-motion'

export const headerUpVariations: Variants = {
  up: {translateY: '-100%'},
  down: {translateY: '0%'},
  hide: {translateY: '-100%', transition: {duration: 0}},
}

export const headerDownVariations: Variants = {
  up: {translateY: '0%'},
  down: {translateY: '-100%'},
  hide: {translateY: '-100%', transition: {duration: 0}},
}
