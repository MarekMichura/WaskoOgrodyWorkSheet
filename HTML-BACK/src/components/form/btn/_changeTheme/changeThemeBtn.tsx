'use client'

import {useMemo} from 'react'

import {actionChangeTheme} from '@/utils/action/theme/actionChangeTheme'
import {useMutateChangeTheme} from '@/utils/query/theme/mutateSwitchTheme'

import {type ISubmitButtonProps} from '../_type/ISubmitButtonProps'
import FormBtn from '../formBtn'

import {changeThemeSubmit} from './_fun/changeThemeSubmit'

function ChangeThemeBtn(props: ISubmitButtonProps) {
  const mutate = useMutateChangeTheme()
  const submit = useMemo(() => changeThemeSubmit(mutate), [mutate])

  return (
    <form action={actionChangeTheme} onSubmit={submit}>
      <FormBtn {...props} />
    </form>
  )
}

export default ChangeThemeBtn
