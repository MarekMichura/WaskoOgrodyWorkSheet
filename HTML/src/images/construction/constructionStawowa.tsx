import Image from 'next/image'

import s from '@/images/css.module.scss'
import {type IImageProps} from '@/images/IImageProps'
import {clsx} from '@/utils/func/clsx'

import {type IConstructionWrapper} from './IConstructionWrapper'
import img1 from './stawowa/1610900f-1178-4cc9-aca0-4d357d5d4ce5.jpg'
import img2 from './stawowa/42cf02b4-c5e7-433b-8420-d63ca33e21f1.jpg'
import img3 from './stawowa/59fd8b3b-84ae-4b65-ac1c-6511b552312f.jpg'
import img4 from './stawowa/96011dba-3e3a-4bfd-88a9-a698f2039d44.jpg'
import img5 from './stawowa/a3b8ed62-86b3-4a61-a2b3-89b78de01965.jpg'
import img6 from './stawowa/aa134f96-e740-4395-8380-5cd0da514354.jpg'
import img7 from './stawowa/bb615c47-5e4c-4c63-ac8f-26f330fbd502.jpg'
import img8 from './stawowa/d34af054-48be-4582-953c-c00277376915.jpg'
import img9 from './stawowa/d8b6e534-6d44-45d8-bd4f-0a6262f77954.jpg'
import img10 from './stawowa/d9407f88-40ed-44b7-92d0-725a9400e52c.jpg'
import img11 from './stawowa/fa9e7b09-f8ce-457a-889d-ac7444ab4df0.jpg'

function ConstructionStawowa1({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img1}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['stawowa-1'])}
    />
  )
}

function ConstructionStawowa2({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img2}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['stawowa-2'])}
    />
  )
}

function ConstructionStawowa3({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img3}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['stawowa-3'])}
    />
  )
}

function ConstructionStawowa4({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img4}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['stawowa-4'])}
    />
  )
}

function ConstructionStawowa5({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img5}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['stawowa-5'])}
    />
  )
}

function ConstructionStawowa6({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img6}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['stawowa-6'])}
    />
  )
}

function ConstructionStawowa7({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img7}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['stawowa-7'])}
    />
  )
}

function ConstructionStawowa8({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img8}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['stawowa-8'])}
    />
  )
}

function ConstructionStawowa9({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img9}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['stawowa-9'])}
    />
  )
}

function ConstructionStawowa10({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img10}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['stawowa-10'])}
    />
  )
}

function ConstructionStawowa11({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img11}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['stawowa-11'])}
    />
  )
}

const components = [
  ConstructionStawowa1,
  ConstructionStawowa2,
  ConstructionStawowa3,
  ConstructionStawowa4,
  ConstructionStawowa5,
  ConstructionStawowa6,
  ConstructionStawowa7,
  ConstructionStawowa8,
  ConstructionStawowa9,
  ConstructionStawowa10,
  ConstructionStawowa11,
]

export const CONSTRUCTION_STAWOWA_COUNT = components.length
function ConstructionStawowaWrapper({id, props}: IConstructionWrapper) {
  if (id < 0 || id >= components.length) return null
  const Component = components[id]
  return <Component {...props} />
}

export default ConstructionStawowaWrapper
