

import React from 'react'
import {IAction} from './IAction'
import {IState, StateDefault} from './IState'


export interface IContext {
  dispatch: React.Dispatch<IAction>
  state: IState
}

export const context = React.createContext<IContext>({
  dispatch: () => {},
  state: StateDefault,
})
