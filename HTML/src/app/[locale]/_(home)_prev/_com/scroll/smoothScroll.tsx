import {useGSAP} from '@gsap/react'
import {ScrollSmoother} from 'gsap/ScrollSmoother'
import {useRef} from 'react'

import {type IChildren} from '@/utils/type/IChildren'

function ScrollSmooth({children}: IChildren) {
  const wrapperRef = useRef(null)
  const contentRef = useRef(null)

  useGSAP(() => {
    const wrapper = wrapperRef.current
    const content = contentRef.current
    if (wrapper === null || content === null) return

    ScrollSmoother.create({wrapper, content, smoothTouch: 1, smooth: 3, effects: true})
  })

  return (
    <div ref={wrapperRef}>
      <main ref={contentRef}>{children}</main>
    </div>
  )
}

export default ScrollSmooth
