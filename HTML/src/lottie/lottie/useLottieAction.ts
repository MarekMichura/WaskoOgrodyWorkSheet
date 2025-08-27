import lottie, {type AnimationItem} from 'lottie-web'
import {useEffect, useRef} from 'react'

import {type IUseLottieBackToBackProps} from './_type/IUseLottieBackToBackProps'

export function useLottieAction({ref, data, status}: IUseLottieBackToBackProps) {
  const animationRef = useRef<AnimationItem>(null)
  const initializedRef = useRef(false)
  const isPlayingRef = useRef(false)

  useEffect(() => {
    if (ref.current === null) return
    if (initializedRef.current) return

    const anim = lottie.loadAnimation({
      container: ref.current,
      renderer: 'canvas',
      loop: false,
      autoplay: false,
      animationData: data,
    })

    function complete() {
      isPlayingRef.current = false
    }

    anim.addEventListener('complete', complete)

    animationRef.current = anim
    initializedRef.current = true

    return () => {
      anim.removeEventListener('complete', complete)
      anim.destroy()
      initializedRef.current = false
      animationRef.current = null
    }
  }, [data, ref])

  useEffect(() => {
    const anim = animationRef.current
    if (anim === null) return
    if (isPlayingRef.current || status === false) return

    isPlayingRef.current = true
    anim.goToAndPlay(0, true)
  }, [status])
}
