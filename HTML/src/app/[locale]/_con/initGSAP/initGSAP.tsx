'use client'

import gsap from 'gsap'
import CSSPlugin from 'gsap/CSSPlugin'
import {Flip} from 'gsap/Flip'
import {ScrollSmoother} from 'gsap/ScrollSmoother'
import {ScrollToPlugin} from 'gsap/ScrollToPlugin'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import TextPlugin from 'gsap/TextPlugin'

import {type IChildren} from '@/utils/type/IChildren'

if (window && typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, Flip, CSSPlugin, TextPlugin)
}

function InitGSAP({children}: IChildren) {
  return children
}

export default InitGSAP
