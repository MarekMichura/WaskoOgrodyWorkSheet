'use client'

import Image from 'next/image'

import FormLink from '@/components/form/btn/formLink'
import LetterAvatar from '@/components/letterAvatar/letterAvatar'
import {useLocale} from '@/utils/locale/_help/useLocale'
import {useProfil} from '@/utils/query/auth/useProfil'
import {ERoutes} from '@/utils/type/ERoutes'

import s from '../css.module.scss'

function NavProfil() {
  const locale = useLocale()
  const path = ERoutes[locale]

  const {profil} = useProfil()

  return (
    <FormLink className={s.sidebarAccount} href={path.profil} prefetch={true}>
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
