import Image from 'next/image'

import s from '@/images/css.module.scss'
import {type IImageProps} from '@/images/IImageProps'
import {clsx} from '@/utils/func/clsx'

import {type IConstructionWrapper} from './IConstructionWrapper'
import img1 from './wizjonerow/0e733676-8486-44d7-923a-e5f13abd5cbf.jpg'
import img2 from './wizjonerow/10aad04e-dd7b-47d3-8ee6-027d15187d38.jpg'
import img3 from './wizjonerow/1a16a55e-5679-44b0-8162-e410998c0858.jpg'
import img4 from './wizjonerow/1a54a489-f599-44e7-8b52-b98c0249233e.jpg'
import img5 from './wizjonerow/2a9e1b1b-cd11-499d-afd9-47da6bb6e2bc.jpg'
import img6 from './wizjonerow/37d8f736-9963-4e77-9709-d7b3246de1ad.jpg'
import img7 from './wizjonerow/646e909f-1c21-4b9f-8294-3a3625574075.jpg'
import img8 from './wizjonerow/759e6c2b-dec4-4147-86ce-00e3f141c7f5.jpg'
import img9 from './wizjonerow/a143629c-bfb1-4b5d-8b20-e0d0a30578e1.jpg'
import img10 from './wizjonerow/ba10fd17-11c9-494d-9655-dcb5445b206e.jpg'
import img11 from './wizjonerow/c328db3b-7cb1-46b4-9303-2a820a006965.jpg'
import img12 from './wizjonerow/f68344b8-915d-437e-b4b5-8f76489ef8f7.jpg'
import img13 from './wizjonerow/febc5d4a-8231-4ad3-a887-f8ae279ec90e.jpg'

function ConstructionWizjonerow1({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img1}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['wizjonerow-1'])}
    />
  )
}

function ConstructionWizjonerow2({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img2}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['wizjonerow-2'])}
    />
  )
}

function ConstructionWizjonerow3({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img3}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['wizjonerow-3'])}
    />
  )
}

function ConstructionWizjonerow4({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img4}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['wizjonerow-4'])}
    />
  )
}

function ConstructionWizjonerow5({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img5}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['wizjonerow-5'])}
    />
  )
}

function ConstructionWizjonerow6({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img6}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['wizjonerow-6'])}
    />
  )
}

function ConstructionWizjonerow7({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img7}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['wizjonerow-7'])}
    />
  )
}

function ConstructionWizjonerow8({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img8}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['wizjonerow-8'])}
    />
  )
}

function ConstructionWizjonerow9({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img9}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['wizjonerow-9'])}
    />
  )
}

function ConstructionWizjonerow10({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img10}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['wizjonerow-10'])}
    />
  )
}

function ConstructionWizjonerow11({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img11}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['wizjonerow-11'])}
    />
  )
}

function ConstructionWizjonerow12({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img12}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['wizjonerow-12'])}
    />
  )
}

function ConstructionWizjonerow13({className, ...props}: IImageProps) {
  return (
    <Image
      sizes="50vw"
      {...props}
      src={img13}
      alt="Pod francuzem img"
      className={clsx(className, s.imgFull, s['wizjonerow-13'])}
    />
  )
}

const components = [
  ConstructionWizjonerow1,
  ConstructionWizjonerow2,
  ConstructionWizjonerow3,
  ConstructionWizjonerow4,
  ConstructionWizjonerow5,
  ConstructionWizjonerow6,
  ConstructionWizjonerow7,
  ConstructionWizjonerow8,
  ConstructionWizjonerow9,
  ConstructionWizjonerow10,
  ConstructionWizjonerow11,
  ConstructionWizjonerow12,
  ConstructionWizjonerow13,
]

export const CONSTRUCTION_WIZJONEROW_COUNT = components.length
function ConstructionWizjonerowWrapper({id, props}: IConstructionWrapper) {
  if (id < 0 || id >= components.length) return null
  const Component = components[id]
  return <Component {...props} />
}

export default ConstructionWizjonerowWrapper
