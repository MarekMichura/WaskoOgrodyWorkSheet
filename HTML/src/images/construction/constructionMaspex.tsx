import Image from 'next/image'

import s from '@/images/css.module.scss'
import {type IImageProps} from '@/images/IImageProps'
import {clsx} from '@/utils/func/clsx'

import {type IConstructionWrapper} from './IConstructionWrapper'
import img9 from './maspex/0915a0fe-ea30-448b-8925-38dea3453109.jpg'
import img3 from './maspex/495ccd6e-c530-4d2e-8053-e02214157d2e.jpg'
import img6 from './maspex/6be8a5b8-6304-4202-ac2f-bca335a517c0.jpg'
import img2 from './maspex/71573506-45f9-4beb-bebd-d2feaed7d75f.jpg'
import img8 from './maspex/7f6edc56-78b8-4609-a999-972896a100fd.jpg'
import img1 from './maspex/87c1f728-f54e-46f5-82f8-d976ff849bb3.jpg'
import img5 from './maspex/97efaa6e-cb4d-4c0e-85c0-98e0322673c6.jpg'
import img7 from './maspex/d0d5cab9-4e47-47f7-9de1-12a43ac9f7e7.jpg'
import img4 from './maspex/dc351a6b-8f69-445f-b494-1f8be3d2af25.jpg'

function ConstructionFrance1({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img1}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['maspex-1'])}
    />
  )
}

function ConstructionFrance2({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img2}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['maspex-2'])}
    />
  )
}

function ConstructionFrance3({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img3}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['maspex-3'])}
    />
  )
}

function ConstructionFrance4({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img4}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['maspex-4'])}
    />
  )
}

function ConstructionFrance5({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img5}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['maspex-5'])}
    />
  )
}

function ConstructionFrance6({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img6}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['maspex-6'])}
    />
  )
}

function ConstructionFrance7({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img7}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['maspex-7'])}
    />
  )
}

function ConstructionFrance8({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img8}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['maspex-8'])}
    />
  )
}

function ConstructionFrance9({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img9}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['maspex-9'])}
    />
  )
}

const components = [
  ConstructionFrance1,
  ConstructionFrance2,
  ConstructionFrance3,
  ConstructionFrance4,
  ConstructionFrance5,
  ConstructionFrance6,
  ConstructionFrance7,
  ConstructionFrance8,
  ConstructionFrance9,
]

export const CONSTRUCTION_MASPEX_COUNT = components.length
function ConstructionMaspexWrapper({id, props}: IConstructionWrapper) {
  if (id < 0 || id >= components.length) return null
  const Component = components[id]
  return <Component {...props} />
}

export default ConstructionMaspexWrapper
