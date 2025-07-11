'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import {useTranslations} from 'use-intl'

import logoImg from '@/components/img/logo/logoFull.png'
import Ripple from '@/components/ripple/ripple'
import {clsx} from '@/utils/func/clsx'

import s from './css.module.scss'
import HomeFooterLink from './homeFooterLink'

const PinIcon = dynamic(() => import('@/components/lottie/pin/pin'), {ssr: false})
const PhoneIcon = dynamic(() => import('@/components/lottie/phone/phone'), {ssr: false})
const MailIcon = dynamic(() => import('@/components/lottie/mail/mail'), {ssr: false})
const FbIcon = dynamic(() => import('@/components/lottie/fb/fb'), {ssr: false})
const IgIcon = dynamic(() => import('@/components/lottie/ig/ig'), {ssr: false})

function HomeFooter() {
  const t_footer = useTranslations('home.footer')

  return (
    <footer className={s.footer}>
      <div className={s.con}>
        <div className={s.column}>
          <h1 className={s.title}>{t_footer('contact')}</h1>
          <nav>
            <ul className={s.list}>
              <HomeFooterLink Icon={PinIcon}>
                <Ripple defClass className={s.btn}>
                  Adama&nbsp;Vetulaniego 5b, 31-226&nbsp;Kraków
                </Ripple>
              </HomeFooterLink>

              <HomeFooterLink Icon={PhoneIcon}>
                <Ripple defClass className={s.btn}>
                  Maciej&nbsp;Waśko: +48&nbsp;509&nbsp;808&nbsp;277
                </Ripple>
                <Ripple defClass className={s.btn}>
                  Adam&nbsp;Michalik: +48&nbsp;730&nbsp;888&nbsp;972
                </Ripple>
              </HomeFooterLink>

              <HomeFooterLink Icon={MailIcon}>
                <Ripple defClass className={s.btn}>
                  biuro@wawelgarden.pl
                </Ripple>
                <Ripple defClass className={s.btn}>
                  michalik@wawelgarden.pl
                </Ripple>
                <Ripple defClass className={s.btn}>
                  wasko@wawelgarden.pl
                </Ripple>
              </HomeFooterLink>
            </ul>
          </nav>
        </div>
        <div className={s.column}>
          <h1 className={s.title}>{t_footer('follow')}</h1>
          <nav>
            <ul className={s.list}>
              <HomeFooterLink Icon={FbIcon}>
                <Ripple defClass className={s.btn}>
                  {t_footer('fb')}
                </Ripple>
              </HomeFooterLink>

              <HomeFooterLink Icon={IgIcon}>
                <Ripple defClass className={s.btn}>
                  {t_footer('ig')}
                </Ripple>
              </HomeFooterLink>
            </ul>
          </nav>
        </div>
        <div className={clsx(s.column, s.center)}>
          <div className={s.logoCon}>
            <Image src={logoImg} alt="Logo" priority fill className={s.logo} />
          </div>
          <p className={s.copyright}>&copy; 2025 Wawel Garden. {t_footer('copyright')}.</p>
        </div>
      </div>
    </footer>
  )
}

export default HomeFooter
