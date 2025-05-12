'use client'
import {useMemo} from 'react'

import {useTranslations} from '@/utils/locale/_help/useTranslations'

import {type IMelonLoading} from './_type/IMelonLoading'
import s from './css.module.scss'

function MelonLoading(props: IMelonLoading) {
  const t = useTranslations('toast')
  const text = useMemo(() => props.text ?? t('loading'), [props.text, t])

  return (
    <div className={s.container}>
      <div className={s.content} />
      <h1 className={s.text}>{text}</h1>
    </div>
  )
}

export default MelonLoading
