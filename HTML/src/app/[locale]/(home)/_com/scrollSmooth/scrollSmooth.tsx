'use client'

import {useGSAP} from '@gsap/react'
import {ScrollSmoother} from 'gsap/ScrollSmoother'
import {useRef} from 'react'

import {type IChildren} from '@/utils/type/IChildren'

function ScrollSmooth({children}: IChildren) {
  const wrapperRef = useRef(null)
  const contentRef = useRef(null)

  // useGSAP(() => {
  //   const wrapper = wrapperRef.current
  //   const content = contentRef.current
  //   if (wrapper === null || content === null) return

  //   ScrollSmoother.create({wrapper, content, smooth: 3, effects: true})
  // })

  return (
    <main ref={wrapperRef}>
      <div ref={contentRef}>{children}</div>
    </main>
  )
}

export default ScrollSmooth
