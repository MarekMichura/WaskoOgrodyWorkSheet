'use client'

import dynamic from 'next/dynamic'
import {FormEvent} from 'react'

import {useMutationTheme} from '@/utils/query/themeMutate'
import {updateTheme} from '@/utils/theme/server/updateTheme'

import {IFormBtn} from '../form/button/IFormBtnProps'
const FormBtn = dynamic(() => import('../form/button/formBtn'), {ssr: true})

function ChangeThemeBtn(props: IFormBtn & {type: 'submit'}) {
  const themeMutation = useMutationTheme()

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    themeMutation.mutate()
  }

  return (
    <form action={updateTheme} onSubmit={submit}>
      <FormBtn {...props} />
    </form>
  )
}

export default ChangeThemeBtn
