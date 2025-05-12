'use client'
import {type UseMutationResult} from '@tanstack/react-query'
import {type FormEvent} from 'react'

import {type EThemeValues} from '@/utils/type/EThemes'

export function changeThemeSubmit(mutate: UseMutationResult<EThemeValues, Error, void, unknown>) {
  return (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate.mutate()
  }
}
