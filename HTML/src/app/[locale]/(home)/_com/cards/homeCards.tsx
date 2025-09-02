'use client'

import s from './css.module.scss'
import HomeCard from './homeCard'
import HomeCardsHeader from './homeCardsHeader'
import {type IHomeCardsProps} from './IHomeCardsProps'

function HomeCards({cards, ...header}: IHomeCardsProps) {
  return (
    <section className={s.con} id="projects">
      <HomeCardsHeader {...header} />
      <div className={s.content}>
        {cards.map((card, i) => (
          <HomeCard key={i} {...card} />
        ))}
      </div>
    </section>
  )
}

export default HomeCards
