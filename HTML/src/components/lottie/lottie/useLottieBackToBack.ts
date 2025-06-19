import lottie, {type AnimationItem} from 'lottie-web'
import {type RefObject, useEffect, useRef} from 'react'

interface IUseLottieBackToBackProps {
  ref: RefObject<HTMLElement | null>
  data: object
  status: boolean
}

export function useLottieBackToBackProps({ref, data, status}: IUseLottieBackToBackProps) {
  const animationRef = useRef<AnimationItem>(null)
  const animationDurationRef = useRef(0)
  const lastStatusRef = useRef(false)
  const initializedRef = useRef(false)

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

    animationRef.current = anim
    initializedRef.current = true
    animationDurationRef.current = anim.getDuration(true)

    if (lastStatusRef.current) {
      anim.goToAndStop(animationDurationRef.current, true)
    }

    return () => {
      anim.destroy()
      initializedRef.current = false
      animationRef.current = null
    }
  }, [data, ref])

  useEffect(() => {
    const anim = animationRef.current
    if (anim === null) return
    if (lastStatusRef.current === status) return

    const frame = anim.currentFrame

    if (status) {
      anim.playSegments([frame, animationDurationRef.current], true)
    } else {
      anim.playSegments([frame, 0], true)
    }

    lastStatusRef.current = status
  }, [status])
}
