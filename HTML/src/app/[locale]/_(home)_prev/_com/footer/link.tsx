import {useTranslations} from 'next-intl'

import {Link} from '@/locale/navigation'
import {type IHref} from '@/utils/enum/EHref'

import s from './css.module.scss'

function FooterLink({href, text}: IHref) {
  const t = useTranslations('nav')

  return (
    <Link href={href} className={s.menIcon}>
      {t(text)}
    </Link>
  )
}



export default FooterLink
