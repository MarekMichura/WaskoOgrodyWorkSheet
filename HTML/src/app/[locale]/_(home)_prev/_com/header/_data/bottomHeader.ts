import {EHeaderPosition} from '../_enum/EHeaderPosition'

export const bottomHeader: Record<EHeaderPosition, gsap.TweenVars> = {
  [EHeaderPosition.hidden]: {autoAlpha: 1, yPercent: -100},
  [EHeaderPosition.down]: {autoAlpha: 1, yPercent: -100},
  [EHeaderPosition.up]: {autoAlpha: 1, yPercent: 0},
}
