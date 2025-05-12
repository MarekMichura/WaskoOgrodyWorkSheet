import {getTranslations} from '@/utils/locale/_help/getTranslations'

import ProfilData from './_com/profilData'
import ProfilImage from './_com/profilImg'
import ProfilName from './_com/profilName'
import s from './css.module.scss'

export async function generateMetadata() {
  const t = await getTranslations('profil')
  return {title: t('title')}
}

function ProfilPage() {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.image}>
          <ProfilImage />
        </div>
        <div className={s.separator} />
        <div>
          <ProfilName />
        </div>
      </div>
      <div className={s.right}>
        <ProfilData />
      </div>
    </div>
  )
}

export default ProfilPage
