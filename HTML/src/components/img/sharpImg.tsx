import {type CSSProperties, type SyntheticEvent, useCallback, useEffect, useMemo, useRef, useState} from 'react'

import {type SharpImageProps} from './sharp'

function SharpImage({w, h, sharp, alt, sizes, ...p}: SharpImageProps) {
  const [loaded, setLoaded] = useState(false)

  const imgRef = useRef<HTMLImageElement>(null)
  useEffect(() => {
    const img = imgRef.current
    if (img && img.complete) {
      setLoaded(true)
    }
  }, [])

  const {avif, webp, jpg, mini, size, src} = useMemo(() => {
    return {
      src: '/img/' + sharp + '-1920.jpeg',
      size: sizes ?? '100vw',
      mini: {
        avif: `/img/${sharp}-16.avif`,
        webp: `/img/${sharp}-16.webp`,
        jpg: `/img/${sharp}-16.jpeg`,
      },
      avif: `
        /img/${sharp}-16.avif 16w,
        /img/${sharp}-320.avif 320w,
        /img/${sharp}-640.avif 640w,
        /img/${sharp}-1080.avif 1080w,
        /img/${sharp}-1920.avif 1920w
      `,
      webp: `
        /img/${sharp}-16.webp 16w,
        /img/${sharp}-320.webp 320w,
        /img/${sharp}-640.webp 640w,
        /img/${sharp}-1080.webp 1080w,
        /img/${sharp}-1920.webp 1920w
      `,
      jpg: `
        /img/${sharp}-16.jpeg 16w,
        /img/${sharp}-320.jpeg 320w,
        /img/${sharp}-640.jpeg 640w,
        /img/${sharp}-1080.jpeg 1080w,
        /img/${sharp}-1920.jpeg 1920w
      `,
    }
  }, [sizes, sharp])

  const style = useMemo(() => {
    return {aspectRatio: `${w} / ${h}`, position: 'relative'} as CSSProperties
  }, [w, h])

  // prettier-ignore
  const load = useCallback((e: SyntheticEvent<HTMLImageElement, Event>) => {
    p.onLoad?.(e)
    setLoaded(true)
  }, [p])

  return (
    <div style={style}>
      {!loaded && (
        <picture>
          <source type="image/avif" srcSet={mini.avif} sizes={size} />
          <source type="image/webp" src={mini.webp} sizes={size} />
          <img
            {...p}
            src={mini.jpg}
            alt={`${alt} placeholder`}
            sizes={size}
            style={{position: 'absolute', width: '100%', height: '100%'}}
          />
        </picture>
      )}
      <picture>
        <source type="image/avif" srcSet={avif} sizes={size} />
        <source type="image/webp" srcSet={webp} sizes={size} />
        <img
          {...p}
          alt={alt}
          onLoad={load}
          ref={imgRef}
          src={src}
          sizes={size}
          srcSet={jpg}
          style={{visibility: loaded ? 'visible' : 'hidden'}}
        />
      </picture>
    </div>
  )
}

export default SharpImage
