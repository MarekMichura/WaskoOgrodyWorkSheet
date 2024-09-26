import React from 'react'
import {IAction} from './IAction'

export interface IContext {
  dispatch: React.Dispatch<IAction>
}

export const context = React.createContext<IContext>({
  dispatch: () => {},
})
