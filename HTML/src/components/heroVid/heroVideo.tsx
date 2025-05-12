'use client'

import Image from 'next/image'
import {useEffect, useRef, useState} from 'react'

import useSection from '@/utils/hooks/useSection'

import {type HeroVideoProps} from './_type/IHeroVideoProps'
import s from './css.module.scss'
import HeroVideoContent from './HeroVideoContent'

function HeroVideo({sectionName, img, video, children}: HeroVideoProps) {
  const refSection = useSection(sectionName)
  const refVideo = useRef<HTMLVideoElement>(null)
  const [showImage, setShowImage] = useState(true)

  useEffect(() => {
    const video = refVideo.current
    if (video === null) return

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
    <section className={s.section} ref={refSection} style={{position: 'relative'}}>
      {showImage && <Image src={img.src} blurDataURL={img.base64} alt="Hero image" placeholder="blur" fill />}
      <video className={s.video} ref={refVideo} autoPlay muted playsInline loop preload="auto">
        <source src={video.webm} type="video/webm" />
        <source src={video.mp4} type="video/mp4" />
      </video>
      <HeroVideoContent>{children}</HeroVideoContent>
    </section>
  )
}

export default HeroVideo
