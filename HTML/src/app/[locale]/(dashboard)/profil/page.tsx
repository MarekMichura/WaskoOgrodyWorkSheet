import ProfilData from './_com/profilData'
import ProfilImage from './_com/profilImg'
import ProfilName from './_com/profilName'
import s from './css.module.scss'

function ProfilPage() {
  return (
    <div className={s.container}>
      <div className={s.sec}>
        <div className={s.image}>
          <ProfilImage />
        </div>
        <div className={s.separator} />
        <div>
          <ProfilName />
        </div>
      </div>
      <div className={s.sec}>
        <ProfilData />
      </div>
    </div>
  )
}

export default ProfilPage
