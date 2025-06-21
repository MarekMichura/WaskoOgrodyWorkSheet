'use client'

import HeroSection from '@/components/hero/heroSection'
import {type IHeroSection} from '@/components/hero/_type/IHeroSection'

import s from './css.module.scss'

function ProjectHeroImg(props: Omit<IHeroSection, 'children'>) {
  return (
    <HeroSection {...props}>
      <div className={s.heroLogo}>
        <h1>Jakiś tekst który dostanę od maćka</h1>
        <p>
          Jakiś opis który dostanę od macka. który powinien być dłuższy niż kilka zdań więc wypełnie to lorem ipsum.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod cumque facilis ipsam itaque recusandae
          consequatur ipsum repellat blanditiis qui saepe! Dolorem atque iste debitis delectus. Incidunt vel repudiandae
          nisi vitae.
        </p>
      </div>
    </HeroSection>
  )
}

export default ProjectHeroImg
