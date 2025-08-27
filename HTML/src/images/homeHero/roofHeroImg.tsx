import Image from 'next/image'

import {clsx} from '@/utils/func/clsx'

import s from '../css.module.scss'
import {type IImageProps} from '../IImageProps'

import img from './roofHero.jpg'

function RoofHeroImg({className, ...props}: IImageProps) {
  return (
    <Image src={img} alt="HomeHero" className={clsx(className, s.imgFull, s.roofHeroAR)} sizes="100vw" {...props} />
  )
}

export default RoofHeroImg
