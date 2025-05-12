'use client'
import {useReducer} from 'react'

import {type IChildren} from '@/utils/types/IChildren'

import Context, {homeLayoutStateDefault} from './default'
import homeLayoutReducer from './reducer'

function HomeLayoutContext({children}: IChildren) {
  const context = useReducer(homeLayoutReducer, homeLayoutStateDefault)

  return <Context value={context}>{children}</Context>
}

export default HomeLayoutContext
