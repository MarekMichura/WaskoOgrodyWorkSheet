'use client'

import Image from 'next/image'
import {useCallback, useRef, useState} from 'react'

import {type IProjectElementProps} from './_type/IProjectElementProps'
import s from './css.module.scss'

function ProjectElement({images, title}: IProjectElementProps) {
  const [currImgID, setCurrImgID] = useState(0)
  // const [bigImg, setBigImg] = useState(false)

  // const dispatch = useDispatch()
  // const tlRef = useRef<gsap.core.Timeline>(null)
  const scopeRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)

  // const closeBigImg = useCallback(() => {
  //   setBigImg(false)
  // }, [])

  // useGSAP(() => {
  //   const imgCon = imgRef.current
  //   const blurCon = document.querySelector('#Blur')
  //   const imgs = imgCon?.querySelectorAll(`.${s.bigImg}`)

  //   if (!imgCon || !blurCon || !imgs) return

  //   const tl = gsap.timeline()
  //   tlRef.current = tl

  //   tl.to(imgs, {top: 0, left: 0, right: 0, bottom: 0, duration: 1})
  // })

  // useEffect(() => {
  //   if (bigImg) {
  //     dispatch(addBlurAction(closeBigImg))
  //     tlRef.current?.play()
  //   } else {
  //     dispatch(removeBlurAction(closeBigImg))
  //     tlRef.current?.reverse()
  //   }
  // }, [bigImg, closeBigImg, dispatch])

  const click = useCallback(() => {
    // setBigImg((p) => !p)
  }, [])

  return (
    <section className={s.con} ref={scopeRef} style={{position: 'relative'}}>
      <div className={s.titleCon}>
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur aspernatur commodi omnis nostrum quis
          tempora, odit exercitationem eligendi, ab, voluptate nisi modi dicta? Autem fuga maxime illo est in laborum.
        </p>
      </div>
      <div className={s.image}>
        <div onClick={click} ref={imgRef}>
          {images.map((ele, i) => (
            <div key={i} className={s.bigImg}>
              <Image
                src={ele.src}
                fill
                blurDataURL={ele.base64}
                placeholder="blur"
                alt=""
                data-show={i === currImgID}
              />
            </div>
          ))}
        </div>
        <div>
          {Array.from({length: images.length}).map((_, i) => (
            <button key={i} onClick={() => setCurrImgID(i)} style={{opacity: i === currImgID ? 1 : 0.5}} />
          ))}
        </div>
      </div>

      <div className={s.statistic}>
        <div>
          <div>Statystyki biznesowe</div>
          <div>
            <div>ilość zasadzonych drzew: 120</div>
            <div>ilość zasadzonych krzewów: 50</div>
            <div>ilość zasadzonych sadzonek: 420</div>
          </div>
        </div>
        <div>
          <div>Statystki dla firm</div>
          <div>
            <div>Nie wiem jakie inne statystki dać</div>
          </div>
        </div>
      </div>
      {/* <div style={{position: 'absolute', height: '100dvh', width: '100dvw', opacity: 0.3, pointerEvents: 'none'}}>
        <Image src={images[currImgID].src} fill blurDataURL={images[currImgID].base64} placeholder="blur" alt="" />
      </div> */}
    </section>
  )
}

export default ProjectElement
