import {forwardRef, useCallback, useEffect, useMemo, useRef, useState} from 'react'
import {type CSSProperties, type SyntheticEvent} from 'react'

import {clsx} from '@/utils/func/clsx'

import s from './css.module.scss'
import {type ISharpImageProps} from './sharp'

const SharpImage = forwardRef<HTMLDivElement | null, ISharpImageProps>(
  ({w, h, sharp, alt, sizes, style, conClass, conStyle, ...p}, ref) => {
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

    const aspectRatioStyle = useMemo(() => {
      return {aspectRatio: `${w} / ${h}`, ...style} as CSSProperties
    }, [w, h, style])

    // prettier-ignore
    const load = useCallback((e: SyntheticEvent<HTMLImageElement, Event>) => {
    p.onLoad?.(e)
    setLoaded(true)
  }, [p])

    return (
      <div className={clsx(s.con, conClass)} style={conStyle} ref={ref}>
        {!loaded && (
          <picture>
            <source type="image/avif" srcSet={mini.avif} sizes={size} />
            <source type="image/webp" src={mini.webp} sizes={size} />
            <img
              {...p}
              className={clsx(p.className, s.mini)}
              src={mini.jpg}
              alt={`${alt} placeholder`}
              sizes={size}
              style={{...aspectRatioStyle}}
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
            style={{...aspectRatioStyle, visibility: loaded ? 'visible' : 'hidden'}}
          />
        </picture>
      </div>
    )
  }
)

SharpImage.displayName = 'SharpImage'
export default SharpImage
