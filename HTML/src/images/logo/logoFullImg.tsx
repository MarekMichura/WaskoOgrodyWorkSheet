import Image from 'next/image'

import {clsx} from '@/utils/func/clsx'

import s from '../css.module.scss'
import {type IImageProps} from '../IImageProps'

import img from './logoFull.png'

function LogoFullImg({className, ...props}: IImageProps) {
  return <Image src={img} alt="Logo" className={clsx(className, s.imgFull, s.logoAR)} {...props} />
}

export default LogoFullImg
