import React from 'react'
import {IAction} from './IAction'
import {IState, defState} from './IState'

export interface IContext {
  dispatch: React.Dispatch<IAction>
  state: IState
}

const Context = React.createContext<IContext>({
  dispatch: () => {},
  state: defState,
})

export default Context
