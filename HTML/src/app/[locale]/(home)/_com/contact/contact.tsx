import Input from '@/components/input/input'
import Ripple from '@/components/ripple/ripple'

import {EHomeParts} from '../../_goto/EHomeParts'

import s from './css.module.scss'

function HomeContact() {
  return (
    <section className={s.sec} id={EHomeParts.contact}>
      <h1 className={s.title}>Skontaktuj się z nami</h1>
      <Input label="imie" />
      <Input label="email" type="email" />
      <textarea className={s.text} />
      <Ripple defClass className={s.btn}>
        Wyślij
      </Ripple>
    </section>
  )
}

export default HomeContact
