'use client'

import Image from 'next/image'

import LetterAvatar from '@/components/letterAvatar/letterAvatar'
import useProfil from '@/utils/query/profil/useProfil'

function ProfilImage() {
  const {profil} = useProfil()

  return !profil.image || profil.image == '' ? (
    <LetterAvatar />
  ) : (
    <Image src={profil.image} alt="profil" width={100} height={100} />
  )
}

export default ProfilImage
