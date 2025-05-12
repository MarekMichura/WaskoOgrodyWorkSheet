import Image from 'next/image'

import HeroVideo from '@/components/heroVid/heroVideo'
import LogoFull from '@/components/img/logo/logoFull.png'
import {getPublicBase64} from '@/utils/plaiceholder/getBase64'

import CarouselTrustedUs from './_com/carouselTrustedUs'
import HomeIconsLabor from './_com/IconsLabor'
import HomeIconStrengths from './_com/IconsStrengths'
import {HERO_IMG, HERO_MP4, HERO_WEBM} from './_data/HERO_DATA'
import s from './css.module.scss'

async function HomePage() {
  const imgHero = await getPublicBase64(HERO_IMG)

  return (
    <main>
      <HeroVideo img={imgHero} video={{mp4: HERO_MP4, webm: HERO_WEBM}} sectionName="heroImg">
        <Image src={LogoFull} alt="Logo" className={s.heroLogo} priority />
      </HeroVideo>
      <section className={s.cards}>
        <HomeIconStrengths />
        <HomeIconsLabor />
        <CarouselTrustedUs />
      </section>
    </main>
  )
}

export default HomePage
