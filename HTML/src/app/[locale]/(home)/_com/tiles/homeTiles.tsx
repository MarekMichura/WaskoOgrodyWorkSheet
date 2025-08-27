import s from './css.module.scss'
import HomeTile from './homeTile'
import HomeTitlesHeader from './HomeTitlesHeader'
import {type IHomeTitlesProps} from './IHomeTitlesProps'

function HomeTiles({titles, ...header}: IHomeTitlesProps) {
  return (
    <section className={s.con}>
      <HomeTitlesHeader {...header} />
      <div className={s.content}>
        {titles.map((tile, i) => (
          <HomeTile key={i} {...tile} />
        ))}
      </div>
    </section>
  )
}

export default HomeTiles
