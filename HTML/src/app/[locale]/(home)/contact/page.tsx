'use client'
import dynamic from 'next/dynamic'

import Input from '@/components/input/input'
import Ripple from '@/components/ripple/ripple'

import s from './css.module.scss'
const Map = dynamic(() => import('./map'), {ssr: false})

function ContactPage() {
  return (
    <div className={s.con}>
      <div className={s.left}>
        <div>
          <h1>Kontakt</h1>
          <h2>Email</h2>
          <div>
            <span>biuro@wawelgarden.pl</span>
            <br />
            <span>michalik@wawelgarden.pl</span>
            <br />
            <span>wasko@wawelgarden.pl</span>
          </div>
          <h2>Telefon</h2>
          <div>
            <span>Maciej Waśko: +48 509 808 277</span>
            <br />
            <span>Adam Michalik: +48 730 888 972</span>
          </div>
          <h2>Biuro</h2>
          <div>
            <span>Adama Vetulaniego 5b, 31-226 Kraków</span>
          </div>
        </div>
        <div className={s.map}>
          <Map />
        </div>
      </div>
      <div className={s.right}>
        <h1>Skontaktuj się z nami bezpośrednio poprzez formularz</h1>
        <Input label="Imie" />
        <Input label="Nazwisko" />
        <Input label="Email" />

        <label htmlFor="area">Treść</label>
        <textarea name="area" className={s.area}></textarea>
        <Ripple className={s.btn}>Wyślij</Ripple>
      </div>
    </div>
  )
}

export default ContactPage
