import Image from 'next/image'
import {forwardRef, useEffect, useRef, useState} from 'react'

import {type IChildren} from '@/utils/type/IChildren'

import {type IGetPublicBase64Result} from '../img/placeHolder/_type/IGetPublicBase64Result'

import s from './css.module.scss'

export interface IHeroSection extends IChildren {
  placeHolder?: IGetPublicBase64Result & {alt: string}
  video?: {
    src: string
    type: string
  }[]
}

const HeroSection = forwardRef<HTMLElement, IHeroSection>(({video, placeHolder, children}, ref) => {
  const refVideo = useRef<HTMLVideoElement>(null)
  const refImg = useRef<HTMLImageElement>(null)
  const [showImage, setShowImage] = useState(true)

  useEffect(() => {
    const video = refVideo.current
    const img = refImg.current
    if (!video || !img) return

    function hideImage() {
      setShowImage(false)
    }
    if (!video.paused) {
      hideImage()
      return
    }

    video.addEventListener('play', hideImage)
    return function () {
      video.removeEventListener('play', hideImage)
    }
  }, [])

  return (
    <section className={s.hero} ref={ref}>
      {placeHolder && showImage && (
        <Image
          src={placeHolder.src}
          alt={placeHolder.alt}
          blurDataURL={placeHolder.base64}
          fill
          className={s.img}
          placeholder="blur"
          ref={refImg}
        />
      )}
      {video && video.length > 0 && (
        <video className={s.video} autoPlay muted playsInline loop preload="auto" ref={refVideo}>
          {video.map(({src, type}, i) => (
            <source src={src} type={type} key={i} />
          ))}
        </video>
      )}
      {children}
    </section>
  )
})

HeroSection.displayName = 'HeroSection'
export default HeroSection
