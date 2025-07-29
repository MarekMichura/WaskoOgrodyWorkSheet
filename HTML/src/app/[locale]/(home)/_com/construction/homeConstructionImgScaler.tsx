import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {useCallback, useRef, useState} from 'react'

import {type ISharpImageProps} from '@/components/img/sharp/sharp'
import SharpImage from '@/components/img/sharp/sharpImg'

function HomeConstructionImgScale(p: ISharpImageProps) {
  const [open, setOpen] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  // prettier-ignore
  const enter = useCallback((e: React.MouseEvent<HTMLImageElement>) => {
    p.onMouseEnter?.(e)
    setOpen(true)
  }, [p])
  // prettier-ignore
  const leave = useCallback((e: React.MouseEvent<HTMLImageElement>) => {
    p.onMouseLeave?.(e)
    setOpen(false)
  }, [p])
  // prettier-ignore
  const mouseMove = useCallback((e: React.MouseEvent<HTMLImageElement>) => {
    p.onMouseMove?.(e)

    if (!imgRef.current) return

    const rect = imgRef.current.getBoundingClientRect()
    const offsetX = (e.clientX - rect.left) / rect.width - 0.5
    const offsetY = (e.clientY - rect.top) / rect.height - 0.5

    // Przesuwaj max o 20px w każdą stronę
    gsap.to(imgRef.current, {
      x: offsetX * 500,
      y: offsetY * 500,
    })
  }, [p])

  useGSAP(() => {
    gsap.to(imgRef.current, {scale: open ? 1.5 : 1})
    if (!open) {
      gsap.to(imgRef.current, {x: 0, y: 0})
    }
  }, [open])

  return <SharpImage {...p} ref={imgRef} onMouseMove={mouseMove} onMouseEnter={enter} onMouseLeave={leave} />
}

export default HomeConstructionImgScale
