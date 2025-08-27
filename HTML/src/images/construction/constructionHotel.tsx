import Image from 'next/image'

import s from '@/images/css.module.scss'
import {type IImageProps} from '@/images/IImageProps'
import {clsx} from '@/utils/func/clsx'

import img1 from './hotel/0ccdce66-48fa-4d1f-8cee-9f6c24f23a56.jpg'
import img2 from './hotel/20959a27-5d30-42c6-a5c7-47d78b5bea31.jpg'
import img3 from './hotel/2724bf2d-49f2-4514-acb6-e539245a90c3.jpg'
import img4 from './hotel/2f4f1abe-1ff9-4373-b99b-32c7a69f7e87.jpg'
import img5 from './hotel/3a4fc4ea-85de-4a0d-8d75-56c1294fe93a.jpg'
import img6 from './hotel/a325def6-f3fa-4aa3-8b6d-ad1ccb7c9159.jpg'
import img7 from './hotel/bd56dd71-e0fd-4868-9bb9-6a4bcbdf014a.jpg'
import img8 from './hotel/fb609493-7346-420d-8561-77847c116d76.jpg'
import {type IConstructionWrapper} from './IConstructionWrapper'

function ConstructionHotel1({className, ...props}: IImageProps) {
  return (
    <Image sizes="50vw" {...props} src={img1} alt="Hotel img" className={clsx(className, s.imgFull, s['hotel-1'])} />
  )
}

function ConstructionHotel2({className, ...props}: IImageProps) {
  return (
    <Image sizes="50vw" {...props} src={img2} alt="Hotel img" className={clsx(className, s.imgFull, s['hotel-2'])} />
  )
}

function ConstructionHotel3({className, ...props}: IImageProps) {
  return (
    <Image sizes="50vw" {...props} src={img3} alt="Hotel img" className={clsx(className, s.imgFull, s['hotel-3'])} />
  )
}

function ConstructionHotel4({className, ...props}: IImageProps) {
  return (
    <Image sizes="50vw" {...props} src={img4} alt="Hotel img" className={clsx(className, s.imgFull, s['hotel-4'])} />
  )
}

function ConstructionHotel5({className, ...props}: IImageProps) {
  return (
    <Image sizes="50vw" {...props} src={img5} alt="Hotel img" className={clsx(className, s.imgFull, s['hotel-5'])} />
  )
}

function ConstructionHotel6({className, ...props}: IImageProps) {
  return (
    <Image sizes="50vw" {...props} src={img6} alt="Hotel img" className={clsx(className, s.imgFull, s['hotel-6'])} />
  )
}

function ConstructionHotel7({className, ...props}: IImageProps) {
  return (
    <Image sizes="50vw" {...props} src={img7} alt="Hotel img" className={clsx(className, s.imgFull, s['hotel-7'])} />
  )
}

function ConstructionHotel8({className, ...props}: IImageProps) {
  return (
    <Image sizes="50vw" {...props} src={img8} alt="Hotel img" className={clsx(className, s.imgFull, s['hotel-8'])} />
  )
}

const components = [
  ConstructionHotel1,
  ConstructionHotel2,
  ConstructionHotel3,
  ConstructionHotel4,
  ConstructionHotel5,
  ConstructionHotel6,
  ConstructionHotel7,
  ConstructionHotel8,
]

export const CONSTRUCTION_HOTEL_COUNT = components.length
function ConstructionHotelWrapper({id, props}: IConstructionWrapper) {
  if (id < 0 || id >= components.length) return null
  const Component = components[id]
  return <Component {...props} />
}

export default ConstructionHotelWrapper
