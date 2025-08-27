import Image from 'next/image'

import s from '@/images/css.module.scss'
import {type IImageProps} from '@/images/IImageProps'
import {clsx} from '@/utils/func/clsx'

import img1 from './glogera/090acc31-c749-42e9-b311-1904811d363c.jpg'
import img2 from './glogera/22a3b496-dfc7-4b74-a525-40d5987542e4.jpg'
import img3 from './glogera/36401134-2207-4974-8616-1fbbe4c97e75.jpg'
import img4 from './glogera/38689c7b-d058-49b4-ab6a-5e240168256f.jpg'
import img5 from './glogera/49605edd-4804-4fd6-8681-e4603c9083a9.jpg'
import img6 from './glogera/5c3032db-7675-4329-84b4-2f31ff13c0f4.jpg'
import img7 from './glogera/622343ae-1136-468a-b6b0-85a5e554ca0d.jpg'
import img8 from './glogera/77adfc82-10cf-4863-8865-bbfe52439064.jpg'
import {type IConstructionWrapper} from './IConstructionWrapper'

function ConstructionGlogera1({className, ...props}: IImageProps) {
  return (
    <Image sizes="50vw" {...props} src={img1} alt="Hotel img" className={clsx(className, s.imgFull, s['glogera-1'])} />
  )
}

function ConstructionGlogera2({className, ...props}: IImageProps) {
  return (
    <Image sizes="50vw" {...props} src={img2} alt="Hotel img" className={clsx(className, s.imgFull, s['glogera-2'])} />
  )
}

function ConstructionGlogera3({className, ...props}: IImageProps) {
  return (
    <Image sizes="50vw" {...props} src={img3} alt="Hotel img" className={clsx(className, s.imgFull, s['glogera-3'])} />
  )
}

function ConstructionGlogera4({className, ...props}: IImageProps) {
  return (
    <Image sizes="50vw" {...props} src={img4} alt="Hotel img" className={clsx(className, s.imgFull, s['glogera-4'])} />
  )
}

function ConstructionGlogera5({className, ...props}: IImageProps) {
  return (
    <Image sizes="50vw" {...props} src={img5} alt="Hotel img" className={clsx(className, s.imgFull, s['glogera-5'])} />
  )
}

function ConstructionGlogera6({className, ...props}: IImageProps) {
  return (
    <Image sizes="50vw" {...props} src={img6} alt="Hotel img" className={clsx(className, s.imgFull, s['glogera-6'])} />
  )
}

function ConstructionGlogera7({className, ...props}: IImageProps) {
  return (
    <Image sizes="50vw" {...props} src={img7} alt="Hotel img" className={clsx(className, s.imgFull, s['glogera-7'])} />
  )
}

function ConstructionGlogera8({className, ...props}: IImageProps) {
  return (
    <Image sizes="50vw" {...props} src={img8} alt="Hotel img" className={clsx(className, s.imgFull, s['glogera-8'])} />
  )
}

const components = [
  ConstructionGlogera1,
  ConstructionGlogera2,
  ConstructionGlogera3,
  ConstructionGlogera4,
  ConstructionGlogera5,
  ConstructionGlogera6,
  ConstructionGlogera7,
  ConstructionGlogera8,
]

export const CONSTRUCTION_GLOGERA_COUNT = components.length
function ConstructionGlogeraWrapper({id, props}: IConstructionWrapper) {
  if (id < 0 || id >= components.length) return null
  const Component = components[id]
  return <Component {...props} />
}

export default ConstructionGlogeraWrapper
