import {ChangeTheme} from './function/ChangeTheme'
import {InitTheme} from './function/InitTheme'
import Login from './function/Login'
import * as ACTION from './global/ACTIONS'
import {IAction} from './types/IAction'
import {IState} from './types/IState'

function MainReducer(state: IState, action: IAction): IState {
  switch (action.action) {
    case ACTION.ACTION_INIT: {
      const initTheme = InitTheme()
      return {...state, theme: initTheme}
    }
    case ACTION.ACTION_CHANGE_THEME: {
      const changeTheme = ChangeTheme(state.theme)
      return {...state, theme: changeTheme}
    }
    case ACTION.ACTION_LOGIN: {
      Login(action)
      return state
    }
    case ACTION.ACTION_PROFIL: {
      return {...state, profil: action.profil}
    }
    default: {
      return state
    }
  }
}

export default MainReducer
