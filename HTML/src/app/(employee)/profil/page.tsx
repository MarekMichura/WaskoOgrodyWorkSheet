'use client'
import Image from 'next/image'
import {useMemo} from 'react'

import FormInput from '@/components/form/input/formInput'
import {LetterAvatar} from '@/components/LetterAvatar/letterAvatar'
import {useProfil} from '@/utils/query/profilUse'

import s from './cssProfil.module.scss'

function ProfilPage() {
  const {profil} = useProfil()
  const profilImage = useMemo(() => {
    if (!profil.image || profil.image != '') return <LetterAvatar name={profil.firstName} lastName={profil.lastName} />
    return <Image src={profil.image} alt="profil" width={100} height={100} />
  }, [profil.firstName, profil.image, profil.lastName])

  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.image}>{profilImage}</div>
        <div className={s.separator} />
        <div>
          <h1 className={s.title}>
            {profil.firstName} {profil.lastName}
          </h1>
          <h2 className={s.title}>{profil.roles[0]}</h2>
        </div>
      </div>
      <div className={s.right}>
        <h1 className={s.title}>Szczegoły</h1>
        <div className={s.separator} />
        <FormInput className={s.noMargin} label="Imie" value={profil.firstName} name="firstName" disabled={true} />
        <FormInput className={s.noMargin} label="Nazwisko" value={profil.lastName} name="lastName" disabled={true} />
        <FormInput className={s.noMargin} label="Data rozpoczęcia pracy" value={profil.workStartDate} name="workStartDate" disabled={true} />
        <div>
          <span>Role: </span>
          <ul style={{marginLeft: '2rem'}}>
            {profil.roles.map((role, i) => (
              <li key={i}>{role}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProfilPage
