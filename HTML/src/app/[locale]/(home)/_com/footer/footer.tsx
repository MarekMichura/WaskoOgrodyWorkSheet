'use client'

import dynamic from 'next/dynamic'
import {useTranslations} from 'next-intl'

import Ripple from '@/components/ripple/ripple'
import LogoFullImg from '@/images/logo/logoFullImg'
import {clsx} from '@/utils/func/clsx'

import s from './css.module.scss'
import HomeFooterLink from './homeFooterLink'

const PinIcon = dynamic(() => import('@/lottie/pin/pin'), {ssr: false})
const PhoneIcon = dynamic(() => import('@/lottie/phone/phone'), {ssr: false})
const MailIcon = dynamic(() => import('@/lottie/mail/mail'), {ssr: false})
const FbIcon = dynamic(() => import('@/lottie/fb/fb'), {ssr: false})
const IgIcon = dynamic(() => import('@/lottie/ig/ig'), {ssr: false})

function HomeFooter() {
  const t_footer = useTranslations('footer')

  return (
    <footer className={s.footer} id="footer">
      <div className={s.con}>
        <div className={s.column}>
          <h1 className={s.title}>{t_footer('contact')}</h1>
          <nav>
            <ul className={s.list}>
              <HomeFooterLink Icon={PinIcon}>
                <Ripple
                  defClass
                  className={s.btn}
                  as="a"
                  href="https://www.google.com/maps/place/50.09605179017402,19.924549787417213"
                >
                  Adama&nbsp;Vetulaniego 5b, 31-226&nbsp;Kraków
                </Ripple>
              </HomeFooterLink>

              <HomeFooterLink Icon={PhoneIcon}>
                <Ripple defClass className={s.btn} as={'a'} href="tel:+48509808277">
                  Maciej&nbsp;Waśko: +48&nbsp;509&nbsp;808&nbsp;277
                </Ripple>
                <Ripple defClass className={s.btn} as={'a'} href="tel:+48730888972">
                  Adam&nbsp;Michalik: +48&nbsp;730&nbsp;888&nbsp;972
                </Ripple>
              </HomeFooterLink>

              <HomeFooterLink Icon={MailIcon}>
                <Ripple defClass className={s.btn} as="a" href="mailto:biuro@wawelgarden.pl">
                  biuro@wawelgarden.pl
                </Ripple>
                <Ripple defClass className={s.btn} as="a" href="michalik@wawelgarden.pl">
                  michalik@wawelgarden.pl
                </Ripple>
                <Ripple defClass className={s.btn} as="a" href="wasko@wawelgarden.pl">
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
                <Ripple defClass className={s.btn} as="a" href="#">
                  {t_footer('fb')}
                </Ripple>
              </HomeFooterLink>

              <HomeFooterLink Icon={IgIcon}>
                <Ripple defClass className={s.btn} as="a" href="#">
                  {t_footer('ig')}
                </Ripple>
              </HomeFooterLink>
            </ul>
          </nav>
        </div>
        <div className={clsx(s.column, s.center)}>
          <div className={s.logoCon}>
            <LogoFullImg priority fill className={s.logo} />
          </div>
          <p className={s.copyright}>&copy; 2025 Wawel Garden. {t_footer('copyright')}.</p>
        </div>
      </div>
    </footer>
  )
}

export default HomeFooter
