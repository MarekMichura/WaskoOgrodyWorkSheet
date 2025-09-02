'use client'

import {useTranslations} from 'next-intl'

import RoofCardImg from '@/images/cards/roofCardImg'
import RoofWrapper, {ROOF_COUNT} from '@/images/construction/roof'
import RoofHeroImg from '@/images/homeHero/roofHeroImg'
import {EImgOrientation} from '@/utils/enum/EImgOrientation'

import HomeCardsHeader from '../_com/cards/homeCardsHeader'
import HomeGallery from '../_com/gallery/homeGallery'
import HomeHero from '../_com/hero/hero'
import HomeTitlesHeader from '../_com/tiles/HomeTitlesHeader'

import s from './css.module.scss'
function HomeRoof() {
  const t_hero = useTranslations('roof.hero')
  const t_tiles = useTranslations('roof.tiles')
  const t_cards = useTranslations('roof.cards')

  return (
    <>
      <HomeHero
        title={t_hero('title')}
        subTitle={t_hero('desc')}
        Img={RoofHeroImg}
        orientation={EImgOrientation.vertical}
      />
      <section className={s.section}>
        <HomeTitlesHeader title={t_tiles('title')} desc={t_tiles('desc')} />
      </section>
      <section>
        <HomeCardsHeader
          title={t_cards('title')}
          desc={t_cards('desc')}
          Img={RoofCardImg}
          orientation={EImgOrientation.vertical}
        />
      </section>
      <HomeGallery Img={RoofWrapper} count={ROOF_COUNT} />
    </>
  )
}

export default HomeRoof
