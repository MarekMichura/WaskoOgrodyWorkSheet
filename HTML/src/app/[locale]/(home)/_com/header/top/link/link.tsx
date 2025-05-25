import {useTranslations} from 'next-intl'

import Ripple from '@/components/ripple/ripple'
import {Link} from '@/locale/navigation'
import {type IHref} from '@/utils/enum/EHref'

import s from '../css.module.scss'

function HeaderNavLink({href, text}: IHref) {
  const t = useTranslations('nav')

  return (
    <Ripple as={Link} href={href} className={s.link}>
      {t(text)}
    </Ripple>
  )
}

export default HeaderNavLink
