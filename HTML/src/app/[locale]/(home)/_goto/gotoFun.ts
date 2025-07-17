import {ScrollSmoother} from 'gsap/ScrollSmoother'

import {type EHomeParts} from './EHomeParts'

export function gotoID(part: EHomeParts) {
  const smoother = ScrollSmoother.get()
  const ele = document.querySelector(`#${part}`)

  smoother?.scrollTo(ele, true, 'top')
}
