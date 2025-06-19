import lottie from 'lottie-web'
import {type RefObject, useEffect} from 'react'

interface IUseLottieLoop {
  ref: RefObject<HTMLElement | null>
  data: object
}

export function useLottieLoop({ref, data}: IUseLottieLoop) {
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
