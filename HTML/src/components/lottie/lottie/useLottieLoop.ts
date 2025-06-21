import lottie from 'lottie-web'
import {useEffect} from 'react'

import {type IUseLottieLoopProps} from './_type/IUseLottieLoopProps'

export function useLottieLoop({ref, data}: IUseLottieLoopProps) {
  useEffect(() => {
    if (ref.current === null) return

    const anim = lottie.loadAnimation({
      container: ref.current,
      renderer: 'canvas',
      loop: true,
      autoplay: true,
      animationData: data,
    })

    return () => {
      anim.destroy()
    }
  }, [data, ref])
}
