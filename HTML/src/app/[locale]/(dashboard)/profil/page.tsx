import ProfilData from './_com/profilData'
import ProfilImage from './_com/profilImg'
import ProfilName from './_com/profilName'
import s from './css.module.scss'

function ProfilPage() {
  return (
    <div className={s.container}>
      <div className={s.sec}>
        <section className={s.image}>
          <ProfilImage />
        </section>
        <div className={s.separator} />
        <section>
          <ProfilName />
        </section>
      </div>
      <section className={s.sec}>
        <ProfilData />
      </section>
    </div>
  )
}

export default ProfilPage
