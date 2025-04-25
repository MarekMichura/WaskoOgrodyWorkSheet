'use client'

import Image from 'next/image'
import {useMemo} from 'react'

import {useProfil} from '@/utils/query/auth/useProfil'

import {getColorDataFromText} from './_fun/genColorFromText'
import {type ILetterAvatarProps} from './_type/ILetterAvatarProps'

function LetterAvatar(props: ILetterAvatarProps) {
  const {profil} = useProfil()

  const url = useMemo(() => {
    const {bgColor, textColor} = getColorDataFromText(`${profil.firstName} ${profil.lastName}`)
    const url = new URL('https://ui-avatars.com/api/')

    url.searchParams.set('format', 'svg')
    url.searchParams.set('name', `${profil.firstName} ${profil.lastName}`)
    url.searchParams.set('bold', 'true')
    url.searchParams.set('background', bgColor)
    url.searchParams.set('color', textColor)
    return url.toString()
  }, [profil.firstName, profil.lastName])

  return <Image width={100} height={100} src={url} alt="Avatar" unoptimized {...props} />
}

export default LetterAvatar
