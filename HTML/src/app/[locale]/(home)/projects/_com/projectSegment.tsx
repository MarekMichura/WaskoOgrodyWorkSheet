import Image from 'next/image'

import {type IProjectSegment} from '../_type/IProjectSegment'
import s from '../css.module.scss'

function ProjectSegment({images, children}: IProjectSegment) {
  return (
    <section className={s.segment}>
      <div className={s.flex}>
        <div className={s.sticky}>{children}</div>
        <div className={s.images}>
          {images.map(({src, base64, height, width}, i) => (
            <Image key={i} src={src} blurDataURL={base64} width={width} height={height} placeholder="blur" alt="img" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectSegment
