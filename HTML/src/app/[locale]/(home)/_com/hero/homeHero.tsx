'use client'

import Image from 'next/image'
import {useTranslations} from 'use-intl'

import logoImg from '@/components/img/logo/logoFull.png'
import Ripple from '@/components/ripple/ripple'

import {EHomeParts} from '../../_goto/EHomeParts'
import {gotoID} from '../../_goto/gotoFun'
import HomeHeader from '../header/homeHeader'

import img from './_img/ac2f1ad5-dcef-4e9c-9670-be29c4c80919.jpg'
import s from './css.module.scss'

function HomeHero() {
  const t_hero = useTranslations('home.hero')

  return (
    <section className={s.con}>
      <Image src={img} placeholder="blur" alt="" className={s.img} fill />
      <HomeHeader />
      {/* <div className={s.center}>
        <div className={s.content}>
          <div className={s.logoCon}>
            <Image src={logoImg} alt="Logo" className={s.logo} fill />
          </div>
          <h1 className={s.title}>{t_hero('title')}</h1>
          <h2 className={s.subtitle}>{t_hero('subtitle')}</h2>
          <div className={s.btns}>
            <Ripple className={s.btn} onClick={() => gotoID(EHomeParts.contact)}>
              {t_hero('contact')}
            </Ripple>
            <Ripple className={s.btn} onClick={() => gotoID(EHomeParts.projects)}>
              {t_hero('explore')}
            </Ripple>
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default HomeHero
