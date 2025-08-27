import Image from 'next/image'

import {clsx} from '@/utils/func/clsx'

import s from '../css.module.scss'
import {type IImageProps} from '../IImageProps'

import img from './homeHero.jpg'

function HomeHeroImg({className, ...props}: IImageProps) {
  return (
    <Image src={img} alt="HomeHero" className={clsx(className, s.imgFull, s.homeHeroAR)} sizes="100vw" {...props} />
  )
}

export default HomeHeroImg
