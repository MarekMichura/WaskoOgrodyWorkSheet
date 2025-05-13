'use client'

import dynamic from 'next/dynamic'
import {useTranslations} from 'next-intl'

import LoadFbIcon from '@/components/img/icon/fb/LoadFbIcon'
import LoadIGIcon from '@/components/img/icon/IG/loadIGIcon'
import LoadLocPinIcon from '@/components/img/icon/locPin/locPinLoading'
import LoadMailIcon from '@/components/img/icon/mail/loadMail'
import LoadPhoneIcon from '@/components/img/icon/phone/loadPhone'
import {EHref} from '@/utils/enums/EHref'

import s from './css.module.scss'
import FooterLink from './footerLink'
import FooterLinkOutside from './footerLinkOutside'
import FooterLinkPhone from './footerLinkPhone'

const PhoneIcon = dynamic(() => import('@/components/img/icon/phone/phone'), {ssr: false, loading: LoadPhoneIcon})
const MailIcon = dynamic(() => import('@/components/img/icon/mail/mail'), {ssr: false, loading: LoadMailIcon})
const FbIcon = dynamic(() => import('@/components/img/icon/fb/fb'), {ssr: false, loading: LoadFbIcon})
const IgIcon = dynamic(() => import('@/components/img/icon/IG/ig'), {ssr: false, loading: LoadIGIcon})
const LocPinIcon = dynamic(() => import('@/components/img/icon/locPin/locPin'), {ssr: false, loading: LoadLocPinIcon})

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
              <FooterLinkOutside
                href="https://www.google.com/maps/place/50.09605179017402,19.924549787417213"
                text="Adama Vetulaniego 5b, 31-226 Kraków"
                icon={<LocPinIcon />}
              />
            </li>
            <li>
              <FooterLinkPhone
                data={[
                  {href: 'tel:+48509808277', text: 'Maciek Waśko: +48 509 808 277 '},
                  {href: 'tel:+48730888972', text: 'Adam Michalik: +48 730 888 972 '},
                ]}
                icon={<PhoneIcon />}
              />
            </li>
            <li>
              <FooterLinkOutside href="biuro@wawelgarden.pl" text="biuro@wawelgarden.pl" icon={<MailIcon />} />
            </li>
          </ul>
        </div>
        <div className={s.column}>
          <h1 className={s.columnTitle}>{t('follow')}</h1>
          <ul className={s.list}>
            <li>
              <FooterLinkOutside href="tel:+48509808277" text="Facebook" icon={<FbIcon />} />
            </li>
            <li>
              <FooterLinkOutside href="tel:+48509808277" text="Instagram" icon={<IgIcon />} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default HomeFooter
