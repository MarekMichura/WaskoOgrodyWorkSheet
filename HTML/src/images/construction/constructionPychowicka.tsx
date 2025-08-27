import Image from 'next/image'

import s from '@/images/css.module.scss'
import {type IImageProps} from '@/images/IImageProps'
import {clsx} from '@/utils/func/clsx'

import {type IConstructionWrapper} from './IConstructionWrapper'
import img1 from './pychowicka/09611d7f-2fe5-4114-bf0b-0b343eda658c.jpg'
import img2 from './pychowicka/41033fdb-e2a3-4d9c-a520-913cceaa3a16.jpg'
import img3 from './pychowicka/41f1c0f5-dcf1-47f8-8717-8f3022fdff74.jpg'
import img4 from './pychowicka/87cd3d40-6dbf-4fcc-bccf-078e1f5f0d13.jpg'
import img5 from './pychowicka/8d7fe828-5405-43aa-8703-e8ca6b4cc9f9.jpg'
import img6 from './pychowicka/dd562dc3-d235-429f-a38b-3a210f0aabd2.jpg'
import img7 from './pychowicka/e061036d-d769-4b74-89e6-b2e4bebf87b4.jpg'
import img8 from './pychowicka/f5848cb6-1b41-405d-af4f-f5625040488e.jpg'

function ConstructionPychowicka1({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img1}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['pychowicka-1'])}
    />
  )
}

function ConstructionPychowicka2({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img2}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['pychowicka-2'])}
    />
  )
}

function ConstructionPychowicka3({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img3}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['pychowicka-3'])}
    />
  )
}

function ConstructionPychowicka4({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img4}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['pychowicka-4'])}
    />
  )
}

function ConstructionPychowicka5({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img5}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['pychowicka-5'])}
    />
  )
}

function ConstructionPychowicka6({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img6}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['pychowicka-6'])}
    />
  )
}

function ConstructionPychowicka7({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img7}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['pychowicka-7'])}
    />
  )
}

function ConstructionPychowicka8({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img8}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['pychowicka-8'])}
    />
  )
}

const components = [
  ConstructionPychowicka1,
  ConstructionPychowicka2,
  ConstructionPychowicka3,
  ConstructionPychowicka4,
  ConstructionPychowicka5,
  ConstructionPychowicka6,
  ConstructionPychowicka7,
  ConstructionPychowicka8,
]

export const CONSTRUCTION_PYCHOWICKA_COUNT = components.length
function ConstructionPychowickaWrapper({id, props}: IConstructionWrapper) {
  if (id < 0 || id >= components.length) return null
  const Component = components[id]
  return <Component {...props} />
}

export default ConstructionPychowickaWrapper
