'use client'

import Image from 'next/image'
import {useState} from 'react'

import {type IProjectElementProps} from './_type/IProjectElementProps'
import s from './css.module.scss'

function ProjectElement({images, title}: IProjectElementProps) {
  const [currImgID, setCurrImgID] = useState(0)
  // const currImg = images[currImgID]

  return (
    <section className={s.con}>
      <div className={s.titleCon}>
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur aspernatur commodi omnis nostrum quis
          tempora, odit exercitationem eligendi, ab, voluptate nisi modi dicta? Autem fuga maxime illo est in laborum.
        </p>
      </div>
      <div className={s.image}>
        <div>
          {images.map((ele, i) => (
            <Image
              src={ele.src}
              fill
              blurDataURL={ele.base64}
              placeholder="blur"
              alt=""
              key={i}
              priority={i === 0}
              data-show={i === currImgID}
            />
          ))}
        </div>
        <div>
          {Array.from({length: images.length}).map((_, i) => (
            <button key={i} onClick={() => setCurrImgID(i)} style={{opacity: i === currImgID ? 1 : 0.5}} />
          ))}
        </div>
      </div>
      <div className={s.data}>
        <h2>
          Profit z inwestycji:
          <br /> 200k
        </h2>
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
    </section>
  )
}

export default ProjectElement
