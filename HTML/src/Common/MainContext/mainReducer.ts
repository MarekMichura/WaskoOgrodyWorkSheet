import {LOCAL_STORAGE_THEME} from '/global/LS'
import {MainAction} from '/global/MAIN_ACTION'
import {routePermission} from '/global/ROUTE'
import {IThemes} from '/global/THEME'
import {LOADING_MIN_TIME} from '/global/TIME'

import getProfile from './function/getProfile'
import {addLoading, removeLoading} from './function/loading'
import login from './function/login'
import logOut from './function/logOut'
import {addNotification, removeNotification} from './function/notification'
import {IAction} from './type/IAction'
import {IState} from './type/IState'

function MainReducer(state: IState, action: IAction): IState {
  switch (action.action) {
    case MainAction.INIT: {
      getProfile(action).then(() => {
        action.dispatch({action: MainAction.LOADING_REMOVE, key: 'Wczytywanie strony', dispatch: action.dispatch})
      })
      const theme =
        (localStorage.getItem(LOCAL_STORAGE_THEME) as IThemes) ??
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? IThemes.THEME_DARK : IThemes.THEME_LIGHT)
      return {...state, theme}
    }
    case MainAction.INIT_END: {
      return {...state, init: true}
    }
    case MainAction.CHANGE_THEME: {
      const theme = state.theme == IThemes.THEME_DARK ? IThemes.THEME_LIGHT : IThemes.THEME_DARK
      localStorage.setItem(LOCAL_STORAGE_THEME, theme)
      return {...state, theme: state.theme == IThemes.THEME_DARK ? IThemes.THEME_LIGHT : IThemes.THEME_DARK}
    }
    case MainAction.CHANGE_TITLE: {
      return {...state, title: action.title}
    }
    case MainAction.LOADING_ADD: {
      const loading = addLoading(state.loading, action)
      setTimeout(() => action.dispatch({action: MainAction.LOADING_START}), LOADING_MIN_TIME)
      return {...state, loading}
    }
    case MainAction.LOADING_REMOVE: {
      const loading = removeLoading(state.loading, action)
      action.dispatch({action: MainAction.LOADING_STOP})
      return {...state, loading}
    }
    case MainAction.LOADING_START: {
      if (state.loading.length > 0) return {...state, loadingStart: true}
      return {...state}
    }
    case MainAction.LOADING_STOP: {
      if (state.loading.length > 0) return {...state}
      return {...state, loadingStart: false}
    }
    case MainAction.LOGIN: {
      login(action)
      return {...state}
    }
    case MainAction.LOG_OUT: {
      logOut(action)
      return {...state}
    }
    case MainAction.PROFIL_SET: {
      if (action.profil != undefined) action.profil.workStartDate = new Date(action.profil.workStartDate)
      return {...state, profil: action.profil, permission: routePermission(action.profil?.roles ?? [])}
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
