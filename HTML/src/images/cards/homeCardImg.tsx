import Image from 'next/image'

import {clsx} from '@/utils/func/clsx'

import s from '../css.module.scss'
import {type IImageProps} from '../IImageProps'

import img from './homeCard.jpg'

function HomeCardImg({className, ...props}: IImageProps) {
  return (
    <Image src={img} alt="Home card" className={clsx(className, s.imgFull, s.homeHeroAR)} sizes="100vw" {...props} />
  )
}

export default HomeCardImg
