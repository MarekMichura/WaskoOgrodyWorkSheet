'use client'
import Image from 'next/image'
import {useTranslations} from 'next-intl'

import logoImg from '@/components/img/logo/logoFull.png'
import Ripple from '@/components/ripple/ripple'

import {EHomeParts} from '../../_goto/EHomeParts'
import {gotoID} from '../../_goto/gotoFun'

import s from './css.module.scss'
import {Link} from '@/locale/navigation'

function HomeHeader() {
  const t_nav = useTranslations('home.nav')

  return (
    <header className={s.con}>
      <div className={s.center}>
        <div className={s.logo}>
          <Image src={logoImg} alt="Logo" placeholder="blur" fill className={s.logoImg} priority />
        </div>
        <nav className={s.nav}>
          <ul className={s.navList}>
            <li className={s.navItem}>
              <Ripple className={s.btn} defClass onClick={() => gotoID(EHomeParts.info)}>
                {t_nav('info')}
              </Ripple>
            </li>
            <li className={s.navItem}>
              <Ripple as={Link} href="/realizations" className={s.btn} defClass>
                {t_nav('map')}
              </Ripple>
            </li>
            <li className={s.navItem}>
              <Ripple className={s.btn} defClass onClick={() => gotoID(EHomeParts.projects)}>
                {t_nav('projects')}
              </Ripple>
            </li>
            <li className={s.navItem}>
              <Ripple className={s.btn} defClass onClick={() => gotoID(EHomeParts.contact)}>
                {t_nav('contact')}
              </Ripple>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default HomeHeader
