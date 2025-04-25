'use client'

import Image from 'next/image'
import {useMemo} from 'react'

import FormBtn from '@/components/form/button/formBtn'
import {LetterAvatar} from '@/components/LetterAvatar/letterAvatar'
import {useProfil} from '@/utils/query/profilUse'
import {ERoute} from '@/utils/type/common/ERoute'

import s from '../cssEmployee.module.scss'

function NavProfil() {
  const {profil} = useProfil()
  const profilImage = useMemo(() => {
    if (!profil.image || profil.image != '') return <LetterAvatar name={profil.firstName} lastName={profil.lastName} />
    return <Image src={profil.image} alt="profil" width={100} height={100} />
  }, [profil.firstName, profil.image, profil.lastName])

  return (
    <FormBtn className={s.sidebarAccount} type="Link" href={ERoute.profil} prefetch={true}>
      {profilImage}
      <h1>{`${profil.firstName} ${profil.lastName}`}</h1>
    </FormBtn>
  )
}

export default NavProfil
