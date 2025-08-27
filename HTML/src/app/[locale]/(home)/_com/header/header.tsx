import {useTranslations} from 'next-intl'

import Ripple from '@/components/ripple/ripple'
import LogoFullImg from '@/images/logo/logoFullImg'
import {clsx} from '@/utils/func/clsx'

import s from './css.module.scss'

function HomeHeader() {
  const t = useTranslations('header')

  return (
    <header className={clsx(s.header, 'flexBetween')}>
      <LogoFullImg alt="Logo" />
      <nav className={s.nav}>
        <ul className={s.list}>
          <li className={s.ele}>
            <Ripple defClass defColor="light" className={s.btn}>
              {t('info')}
            </Ripple>
          </li>
          <li className={s.ele}>
            <Ripple defClass defColor="light" className={s.btn}>
              {t('map')}
            </Ripple>
          </li>
          <li className={s.ele}>
            <Ripple defClass defColor="light" className={s.btn}>
              {t('projects')}
            </Ripple>
          </li>
          <li className={s.ele}>
            <Ripple defClass defColor="light" className={s.btn}>
              {t('roofs')}
            </Ripple>
          </li>
          <li className={s.ele}>
            <Ripple defClass defColor="light" className={s.btn}>
              {t('contact')}
            </Ripple>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HomeHeader
