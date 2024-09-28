import getProfile from './function/getProfile'
import {addLoading, removeLoading} from './function/loading'
import login from './function/login'
import {addNotification, removeNotification} from './function/notification'
import {MainAction} from './global/ACTION'
import {IThemes} from './global/THEME'
import {IAction} from './type/IAction'
import {IState} from './type/IState'

function MainReducer(state: IState, action: IAction): IState {
  switch (action.action) {
    case MainAction.INIT: {
      getProfile(action)
      return {...state}
    }
    case MainAction.INIT_END: {
      return {...state, init: true}
    }
    case MainAction.CHANGE_THEME: {
      return {...state, theme: state.theme == IThemes.THEME_DARK ? IThemes.THEME_LIGHT : IThemes.THEME_DARK}
    }
    case MainAction.LOADING_ADD: {
      const loading = addLoading(state.loading, action)
      return {...state, loading}
    }
    case MainAction.LOADING_REMOVE: {
      const loading = removeLoading(state.loading, action)
      return {...state, loading}
    }
    case MainAction.LOGIN: {
      login(action)
      return {...state}
    }
    case MainAction.LOG_OUT: {
      return {...state}
    }
    case MainAction.PROFIL_SET: {
      return {...state, profil: action.profil}
    }
    case MainAction.NOTIFICATION_ADD: {
      const notifications = addNotification(state.notifications, action)
      return {...state, notifications}
    }
    case MainAction.NOTIFICATION_REMOVE: {
      const notifications = removeNotification(state.notifications, action)
      return {...state, notifications}
    }
    default: {
      return {...state}
    }
  }
}

export default MainReducer
