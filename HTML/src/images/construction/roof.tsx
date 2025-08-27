import Image from 'next/image'

import s from '@/images/css.module.scss'
import {type IImageProps} from '@/images/IImageProps'
import {clsx} from '@/utils/func/clsx'

import {type IConstructionWrapper} from './IConstructionWrapper'
import img1 from './roof/115835ea-3248-4dc2-b47f-e1a5d82147b6.jpg'
import img2 from './roof/216e3074-bb17-45ce-a189-cfb4f35b7f72.jpg'
import img3 from './roof/3ee3aece-9e25-4dc5-855a-d595a0da75a5.jpg'
import img4 from './roof/67553c23-adff-4053-b374-1670f1b7a71b.jpg'
import img5 from './roof/8089fca6-a05f-47e8-aabd-10495c9f1469.jpg'
import img6 from './roof/8ffcc8c4-40a9-4b9e-a836-dcda80fc3c12.jpg'
import img7 from './roof/a60ee346-ccfa-4b00-8031-18ef5c1f1ad2.jpg'
import img8 from './roof/aed2db7b-546d-43ca-8b34-91b422b30d7e.jpg'
import img9 from './roof/b1599277-5d87-4f99-8a4d-d8be80ab38d1.jpg'
import img10 from './roof/b8797d9a-3236-4292-b38a-667815b5be00.jpg'
import img11 from './roof/d240290d-24f0-49f4-8aab-810efe762360.jpg'
import img12 from './roof/d43f684c-c3a2-4ccb-9887-2b8218bc6345.jpg'
import img13 from './roof/e301aeef-3dbf-4196-b395-77335c316e9d.jpg'
import img14 from './roof/f7353894-49ca-4774-b762-cfa25e3de3f6.jpg'

function Roof1({className, ...props}: IImageProps) {
  return (
    <Image sizes="20vw" {...props} src={img1} alt="Hotel img" className={clsx(className, s.imgFull, s['roof-1'])} />
  )
}

function Roof2({className, ...props}: IImageProps) {
  return (
    <Image sizes="20vw" {...props} src={img2} alt="Hotel img" className={clsx(className, s.imgFull, s['roof-2'])} />
  )
}

function Roof3({className, ...props}: IImageProps) {
  return (
    <Image sizes="20vw" {...props} src={img3} alt="Hotel img" className={clsx(className, s.imgFull, s['roof-3'])} />
  )
}

function Roof4({className, ...props}: IImageProps) {
  return (
    <Image sizes="20vw" {...props} src={img4} alt="Hotel img" className={clsx(className, s.imgFull, s['roof-4'])} />
  )
}

function Roof5({className, ...props}: IImageProps) {
  return (
    <Image sizes="20vw" {...props} src={img5} alt="Hotel img" className={clsx(className, s.imgFull, s['roof-5'])} />
  )
}

function Roof6({className, ...props}: IImageProps) {
  return (
    <Image sizes="20vw" {...props} src={img6} alt="Hotel img" className={clsx(className, s.imgFull, s['roof-6'])} />
  )
}

function Roof7({className, ...props}: IImageProps) {
  return (
    <Image sizes="20vw" {...props} src={img7} alt="Hotel img" className={clsx(className, s.imgFull, s['roof-7'])} />
  )
}

function Roof8({className, ...props}: IImageProps) {
  return (
    <Image sizes="20vw" {...props} src={img8} alt="Hotel img" className={clsx(className, s.imgFull, s['roof-8'])} />
  )
}
function Roof9({className, ...props}: IImageProps) {
  return (
    <Image sizes="20vw" {...props} src={img9} alt="Hotel img" className={clsx(className, s.imgFull, s['roof-9'])} />
  )
}
function Roof10({className, ...props}: IImageProps) {
  return (
    <Image sizes="20vw" {...props} src={img10} alt="Hotel img" className={clsx(className, s.imgFull, s['roof-10'])} />
  )
}
function Roof11({className, ...props}: IImageProps) {
  return (
    <Image sizes="20vw" {...props} src={img11} alt="Hotel img" className={clsx(className, s.imgFull, s['roof-11'])} />
  )
}
function Roof12({className, ...props}: IImageProps) {
  return (
    <Image sizes="20vw" {...props} src={img12} alt="Hotel img" className={clsx(className, s.imgFull, s['roof-12'])} />
  )
}
function Roof13({className, ...props}: IImageProps) {
  return (
    <Image sizes="20vw" {...props} src={img13} alt="Hotel img" className={clsx(className, s.imgFull, s['roof-13'])} />
  )
}
function Roof14({className, ...props}: IImageProps) {
  return (
    <Image sizes="20vw" {...props} src={img14} alt="Hotel img" className={clsx(className, s.imgFull, s['roof-14'])} />
  )
}

const components = [
  Roof1,
  Roof2,
  Roof3,
  Roof4,
  Roof5,
  Roof6,
  Roof7,
  Roof8,
  Roof9,
  Roof10,
  Roof11,
  Roof12,
  Roof13,
  Roof14,
]

export const ROOF_COUNT = components.length
function RoofWrapper({id, props}: IConstructionWrapper) {
  if (id < 0 || id >= components.length) return null
  const Component = components[id]
  return <Component {...props} />
}

export default RoofWrapper
