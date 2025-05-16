import {type Variants} from 'framer-motion'

export const headerUpVariations: Variants = {
  up: {y: '-100%'},
  down: {y: '0%'},
  hide: {y: '-100%', transition: {duration: 0}},
}

export const headerDownVariations: Variants = {
  up: {y: '0%'},
  down: {y: '-100%'},
  hide: {y: '-100%', transition: {duration: 0}},
}
