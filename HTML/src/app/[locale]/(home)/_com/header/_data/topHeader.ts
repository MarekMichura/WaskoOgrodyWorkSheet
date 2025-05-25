import {EHeaderPosition} from '../_enum/EHeaderPosition'

export const topHeader: Record<EHeaderPosition, gsap.TweenVars> = {
  [EHeaderPosition.hidden]: {autoAlpha: 1, yPercent: -100, ease: 'back.in'},
  [EHeaderPosition.down]: {autoAlpha: 1, yPercent: 0, ease: 'bounce.out'},
  [EHeaderPosition.up]: {autoAlpha: 1, yPercent: -100, ease: 'back.in'},
}
