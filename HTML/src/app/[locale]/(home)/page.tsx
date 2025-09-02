'use client'

import dynamic from 'next/dynamic'
import {useTranslations} from 'next-intl'

import HomeCardImg from '@/images/cards/homeCardImg'
import ConstructionGlogeraWrapper, {CONSTRUCTION_GLOGERA_COUNT} from '@/images/construction/constructionGlogera'
import ConstructionHotelWrapper, {CONSTRUCTION_HOTEL_COUNT} from '@/images/construction/constructionHotel'
import ConstructionMaspexWrapper, {CONSTRUCTION_MASPEX_COUNT} from '@/images/construction/constructionMaspex'
import ConstructionPychowickaWrapper, {
  CONSTRUCTION_PYCHOWICKA_COUNT,
} from '@/images/construction/constructionPychowicka'
import ConstructionStawowaWrapper, {CONSTRUCTION_STAWOWA_COUNT} from '@/images/construction/constructionStawowa'
import ConstructionWizjonerowWrapper, {
  CONSTRUCTION_WIZJONEROW_COUNT,
} from '@/images/construction/constructionWizjonerow'
import HomeHeroImg from '@/images/homeHero/homeHeroImg'
import {EImgOrientation} from '@/utils/enum/EImgOrientation'

import HomeCards from './_com/cards/homeCards'
import HomeHero from './_com/hero/hero'
import HomeTiles from './_com/tiles/homeTiles'

const diggerIcon = dynamic(() => import('@/lottie/digger/digger'), {ssr: false})
const soilIcon = dynamic(() => import('@/lottie/soil/soil'), {ssr: false})
const plantIcon = dynamic(() => import('@/lottie/plant/plant'), {ssr: false})
const parkIcon = dynamic(() => import('@/lottie/park/park'), {ssr: false})
const cutterIcon = dynamic(() => import('@/lottie/cutter/cutter'), {ssr: false})
const bluePrintIcon = dynamic(() => import('@/lottie/bluePrint/bluePrint'), {ssr: false})

function HomePage() {
  const t_hero = useTranslations('home.hero')
  const t_tiles = useTranslations('home.tiles')
  const t_cards = useTranslations('home.cards')

  return (
    <>
      <HomeHero
        Img={HomeHeroImg}
        title={t_hero('title')}
        subTitle={t_hero('desc')}
        orientation={EImgOrientation.horizontal}
      />
      <HomeTiles
        title={t_tiles('title')}
        desc={t_tiles('desc')}
        titles={[
          {
            title: t_tiles('landscaping.title'),
            subTitle: t_tiles('landscaping.subtitle'),
            desc: t_tiles('landscaping.desc'),
            btn: t_tiles('btn'),
            Img: diggerIcon,
          },
          {
            title: t_tiles('roof.title'),
            subTitle: t_tiles('roof.subtitle'),
            desc: t_tiles('roof.desc'),
            btn: t_tiles('btn'),
            Img: soilIcon,
          },
          {
            title: t_tiles('planting.title'),
            subTitle: t_tiles('planting.subtitle'),
            desc: t_tiles('planting.desc'),
            btn: t_tiles('btn'),
            Img: plantIcon,
          },
          {
            title: t_tiles('architecture.title'),
            subTitle: t_tiles('architecture.subtitle'),
            desc: t_tiles('architecture.desc'),
            btn: t_tiles('btn'),
            Img: parkIcon,
          },
          {
            title: t_tiles('maintenance.title'),
            subTitle: t_tiles('maintenance.subtitle'),
            desc: t_tiles('maintenance.desc'),
            btn: t_tiles('btn'),
            Img: cutterIcon,
          },
          {
            title: t_tiles('Project.title'),
            subTitle: t_tiles('Project.subtitle'),
            desc: t_tiles('Project.desc'),
            btn: t_tiles('btn'),
            Img: bluePrintIcon,
          },
        ]}
      />
      <HomeCards
        title={t_cards('title')}
        desc={t_cards('desc')}
        Img={HomeCardImg}
        orientation={EImgOrientation.vertical}
        cards={[
          {
            name: t_cards('hotel.name'),
            title: t_cards('hotel.title'),
            desc: t_cards('hotel.desc'),
            Img: ConstructionHotelWrapper,
            count: CONSTRUCTION_HOTEL_COUNT,
          },
          {
            name: t_cards('wizjonerow.name'),
            title: t_cards('wizjonerow.title'),
            desc: t_cards('wizjonerow.desc'),
            Img: ConstructionWizjonerowWrapper,
            count: CONSTRUCTION_WIZJONEROW_COUNT,
          },
          {
            name: t_cards('stawowa.name'),
            title: t_cards('stawowa.title'),
            desc: t_cards('stawowa.desc'),
            Img: ConstructionStawowaWrapper,
            count: CONSTRUCTION_STAWOWA_COUNT,
          },
          {
            name: t_cards('maspex.name'),
            title: t_cards('maspex.title'),
            desc: t_cards('maspex.desc'),
            Img: ConstructionMaspexWrapper,
            count: CONSTRUCTION_MASPEX_COUNT,
          },
          {
            name: t_cards('glogera.name'),
            title: t_cards('glogera.title'),
            desc: t_cards('glogera.desc'),
            Img: ConstructionGlogeraWrapper,
            count: CONSTRUCTION_GLOGERA_COUNT,
          },
          {
            name: t_cards('pychowicka.name'),
            title: t_cards('pychowicka.title'),
            desc: t_cards('pychowicka.desc'),
            Img: ConstructionPychowickaWrapper,
            count: CONSTRUCTION_PYCHOWICKA_COUNT,
          },
        ]}
      />
    </>
  )
}

export default HomePage
