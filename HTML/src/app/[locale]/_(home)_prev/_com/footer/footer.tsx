'use client'

import dynamic from 'next/dynamic'
import {useTranslations} from 'next-intl'

import {EHref} from '@/utils/enum/EHref'

import s from './css.module.scss'
import FooterHref from './href'
import FooterIconBox from './iconBox'
import FooterLink from './link'

const PinIcon = dynamic(() => import('@/components/lottie/pin/pin'), {ssr: false})
const PhoneIcon = dynamic(() => import('@/components/lottie/phone/phone'), {ssr: false})
const MailIcon = dynamic(() => import('@/components/lottie/mail/mail'), {ssr: false})
const FbIcon = dynamic(() => import('@/components/lottie/fb/fb'), {ssr: false})
const IgIcon = dynamic(() => import('@/components/lottie/ig/ig'), {ssr: false})

function HomeFooter() {
  const t = useTranslations('nav')

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.column}>
          <h1 className={s.columnTitle}>{t('links')}</h1>
          <ul className={s.list}>
            {EHref.map(({text, href}, i) => (
              <li key={i} className={s.link}>
                <FooterLink href={href} text={text} />
              </li>
            ))}
          </ul>
        </div>
        <div className={s.column}>
          <h1 className={s.columnTitle}>{t('communication')}</h1>
          <ul className={s.list}>
            <li>
              <FooterIconBox Icon={PinIcon}>
                <FooterHref
                  href="https://www.google.com/maps/place/50.09605179017402,19.924549787417213"
                  text="Adama Vetulaniego 5b, 31-226 Kraków"
                />
              </FooterIconBox>
            </li>
            <li>
              <FooterIconBox Icon={PhoneIcon}>
                <FooterHref href="tel:+48509808277" text="Maciej Waśko: +48 509 808 277" />
                <FooterHref href="tel:+48730888972" text="Adam Michalik: +48 730 888 972" />
              </FooterIconBox>
            </li>
            <li>
              <FooterIconBox Icon={MailIcon}>
                <FooterHref href="mailto:biuro@wawelgarden.pl" text="biuro@wawelgarden.pl" />
                <FooterHref href="mailto:michalik@wawelgarden.pl" text="michalik@wawelgarden.pl" />
                <FooterHref href="mailto:wasko@wawelgarden.pl" text="wasko@wawelgarden.pl" />
              </FooterIconBox>
            </li>
          </ul>
        </div>
        <div className={s.column}>
          <h1 className={s.columnTitle}>{t('follow')}</h1>
          <ul className={s.list}>
            <li>
              <FooterIconBox Icon={FbIcon}>
                <FooterHref href="#" text="Facebook" />
              </FooterIconBox>
            </li>
            <li>
              <FooterIconBox Icon={IgIcon}>
                <FooterHref href="#" text="Instagram" />
              </FooterIconBox>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default HomeFooter
