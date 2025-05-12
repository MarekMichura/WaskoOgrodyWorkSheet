'use client'

import Image from 'next/image'

import FormLink from '@/components/form/btn/formLink'
import LetterAvatar from '@/components/letterAvatar/letterAvatar'
import {useTranslations} from '@/utils/locale/_help/useTranslations'
import {useProfil} from '@/utils/query/auth/useProfil'

import s from '../css.module.scss'

function NavProfil() {
  const route = useTranslations('route')

  const {profil} = useProfil()

  return (
    <FormLink className={s.sidebarAccount} href={route('profil')}>
      {!profil.image || profil.image == '' ? ( //
        <LetterAvatar />
      ) : (
        <Image src={profil.image} alt="profil" width={100} height={100} />
      )}
      <h1>{`${profil.firstName} ${profil.lastName}`}</h1>
    </FormLink>
  )
}

export default NavProfil
