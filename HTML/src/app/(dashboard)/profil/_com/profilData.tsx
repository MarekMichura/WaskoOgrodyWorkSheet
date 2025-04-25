'use client'

import FormInput from '@/components/form/input/formInput'
import {useTranslations} from '@/utils/locale/_help/useTranslations'
import {useProfil} from '@/utils/query/auth/useProfil'

import s from '../css.module.scss'

function ProfilData() {
  const t = useTranslations('profil')
  const {profil} = useProfil()

  return (
    <div style={{display: 'contents'}}>
      <h1 className={s.title}>{t('details')}</h1>
      <div className={s.separator} />
      <FormInput className={s.noMargin} disabled={true} label={t('name')} value={profil.firstName} name="firstName" />
      <FormInput className={s.noMargin} disabled={true} label={t('lastName')} value={profil.lastName} name="lastName" />
      <FormInput className={s.noMargin} disabled={true} label={t('date')} value={profil.workStartDate} name="workStartDate" />
      <div>
        <span>{t('role')}</span>
        <ul style={{marginLeft: '2rem'}}>
          {profil.roles.map((role, i) => (
            <li key={i}>{role}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProfilData
