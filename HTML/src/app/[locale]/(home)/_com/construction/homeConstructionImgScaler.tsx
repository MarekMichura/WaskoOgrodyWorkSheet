import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {useCallback, useEffect, useRef, useState} from 'react'

import {type ISharpImageProps} from '@/components/img/sharp/sharp'
import SharpImage from '@/components/img/sharp/sharpImg'

function HomeConstructionImgScale({nr, ...p}: ISharpImageProps & {nr: number}) {
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
    // p.onMouseMove?.(e)
    // const img = imgRef.current?.querySelector('img')
    // if (!img) return
    
    // const rect = img.getBoundingClientRect()
    // const offsetX = (e.clientX - rect.x) / rect.width - 0.5
    // const offsetY = (e.clientY - rect.y) / rect.height - 0.5

    // gsap.to(img, {
    //   x: offsetX * -500,
    //   y: offsetY * -500,
    // })
  }, [p])

  useEffect(() => {
    gsap.set(imgRef.current, {
      xPercent: nr * 100,
    })
  }, [nr])

  useGSAP(() => {
    const con = imgRef.current
    const img = con?.querySelector('img')
    if (!img) return
    if (open) {
      gsap.to(img, {scale: 1.5})
    } else {
      gsap.to(img, {scale: 1})
      gsap.to(img, {x: 0, y: 0})
    }
  }, [open])

  return (
    <SharpImage
      {...p}
      ref={imgRef}
      conProps={{...p.conProps, onMouseMove: mouseMove, onMouseEnter: enter, onMouseLeave: leave}}
    />
  )
}

export default HomeConstructionImgScale
