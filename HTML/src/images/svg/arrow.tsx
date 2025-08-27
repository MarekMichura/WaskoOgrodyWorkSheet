import s from '@/images/css.module.scss'
import {clsx} from '@/utils/func/clsx'

import {type ISvgProps} from '../IImageProps'

function ArrowIcon({className, ...props}: ISvgProps) {
  return (
    <svg {...props} className={clsx(s.imgFull, className)} viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
      <path d="M287-55 180-161l319-319-319-319 107-107 425 426L287-55Z" />
    </svg>
  )
}

export default ArrowIcon
