'use client'

import {useProfil} from '@/utils/query/auth/useProfil'

import s from '../css.module.scss'

function ProfilName() {
  const {profil} = useProfil()

  return (
    <>
      <h1 className={s.title}>
        {profil.firstName} {profil.lastName}
      </h1>
      <h2 className={s.title}>{profil.roles[0]}</h2>
    </>
  )
}

export default ProfilName
