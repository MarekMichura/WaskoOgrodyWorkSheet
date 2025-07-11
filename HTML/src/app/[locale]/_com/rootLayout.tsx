'use client'

import gsap from 'gsap'
import {CSSPlugin} from 'gsap/CSSPlugin'
import {Flip} from 'gsap/Flip'
import {ScrollSmoother} from 'gsap/ScrollSmoother'
import {ScrollToPlugin} from 'gsap/ScrollToPlugin'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import TextPlugin from 'gsap/TextPlugin'
import {useLocale} from 'next-intl'

import {ELang} from '@/utils/enum/ELang'
import {clsx} from '@/utils/func/clsx'
import {type IChildren} from '@/utils/type/IChildren'

import {playfair, nunito} from '../_data/font'

import s from './css.module.scss'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, Flip, CSSPlugin, TextPlugin)
}

function RootLayout({children}: IChildren) {
  const lang = useLocale()

  // const dispatch = useDispatch()
  // useLayoutEffect(() => {
  //   dispatch(initTheme())
  // }, [dispatch])
  // useWindowEvent('scroll', () => dispatch(ChangeCurrentSection()))

  return (
    <html lang={ELang[lang]} className={clsx(s.html, playfair.className)} suppressHydrationWarning>
      {/* 
        <head>
          <script dangerouslySetInnerHTML={{__html: themeLoadStrScript}} />
        </head> 
      */}
      <body className={clsx(s.body, nunito.className)}>{children}</body>
    </html>
  )
}

export default RootLayout
