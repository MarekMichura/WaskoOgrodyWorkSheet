'use client'

import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {SplitText} from 'gsap/SplitText'
import {useRef} from 'react'

import s from './css.module.scss'

function HomeDescription() {
  const pRef = useRef(null)

  const textLeftRef = useRef(null)
  const textRightRef = useRef(null)
  const textIconRef = useRef(null)
  const textLineTopRef = useRef(null)
  const textLineBottomRef = useRef(null)

  useGSAP(() => {
    const p = pRef.current

    const lineTop = textLineTopRef.current
    const lineBottom = textLineBottomRef.current

    const textLeft = textLeftRef.current
    const textIcon = textIconRef.current
    const textRight = textRightRef.current

    let animP: gsap.core.Tween | null = null
    let animH1: gsap.core.Timeline | null = null
    let split: globalThis.SplitText | null = null

    if (!p || !lineTop || !lineBottom || !textLeft || !textIcon || !textRight) return
    document.fonts.ready.then(() => {
      split = SplitText.create(p, {
        type: 'words,lines',
        linesClass: s.line,
        smartWrap: true,
        autoSplit: true,
        onSplit: (self) => {
          animP = gsap.from(self.words, {
            y: -100,
            opacity: 0,
            rotation: 'random(-80, 80)',
            duration: 0.7,
            ease: 'bounce.out',
            scrollTrigger: {trigger: p, start: 'top bottom', once: true, toggleActions: 'play none none none'},
            stagger: {
              amount: 2,
              from: 'random',
            },
            onComplete: () => {
              split?.revert()
            },
          })
          return animP
        },
      })

      animH1 = gsap
        .timeline({scrollTrigger: {trigger: p, start: 'top bottom', once: false, toggleActions: 'play none none none'}}) //
        .from([lineTop, lineBottom], {alpha: 0, width: 0, x: '50%', duration: 0.5})
        .to(lineTop, {top: '0%', duration: 0.3, ease: 'Power1.easeOut'})
        .to(lineBottom, {top: '100%', duration: 0.3, ease: 'Power1.easeOut'}, '-=0.3')
        .from(textIcon, {alpha: 0, duration: 0.5})
        .from(textLeft, {alpha: 0, x: 40, duration: 0.4, ease: 'Power1.easeOut'})
        .from(textRight, {alpha: 0, x: -40, duration: 0.4, ease: 'Power1.easeOut'}, '-=0.4')
    })

    return () => {
      split?.revert()
      animP?.revert()
      animH1?.revert()
      animP?.kill()
      animH1?.kill()
    }
  }, [])

  return (
    <section className={s.con}>
      <h1 className={s.title}>
        <span ref={textLineTopRef} className={s.line} />
        <span ref={textLeftRef} className={s.lineText}>
          Jakiś
        </span>
        <span ref={textIconRef}>&nbsp;</span>
        <span ref={textRightRef} className={s.lineText}>
          Tytuł
        </span>
        <span ref={textLineBottomRef} className={s.line} />
      </h1>
      <p ref={pRef} className={s.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint animi illo facilis beatae aliquam ab velit
        corrupti, vitae fuga molestias perferendis iste eveniet incidunt, debitis repudiandae placeat maiores, eius
        inventore?
      </p>
    </section>
  )
}

export default HomeDescription
