import s from './css.module.scss'

function FooterHref({href, text}: {href: string; text: string}) {
  return (
    <a href={href} className={s.menIcon}>
      {text}
    </a>
  )
}

export default FooterHref
