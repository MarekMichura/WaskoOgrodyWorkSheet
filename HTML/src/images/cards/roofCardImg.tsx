import Image from 'next/image'

import {clsx} from '@/utils/func/clsx'

import s from '../css.module.scss'
import {type IImageProps} from '../IImageProps'

import img from './roofCard.jpg'

function RoofCardImg({className, ...props}: IImageProps) {
  return <Image src={img} alt="Roof card" className={clsx(className, s.roofCardAR)} sizes="100vw" {...props} />
}

export default RoofCardImg
