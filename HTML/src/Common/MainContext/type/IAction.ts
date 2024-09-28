import React from 'react'
import {MainAction} from '../global/ACTION'
import {IProfil} from './IProfil'
import {INotificationType} from './INotification'

export interface IActionInit {
  action: MainAction.INIT
  dispatch: React.Dispatch<IAction>
}

export interface IActionInitEnd {
  action: MainAction.INIT_END
}

export interface IActionChangeTheme {
  action: MainAction.CHANGE_THEME
  dispatch: React.Dispatch<IAction>
}

export interface IActionLogin {
  action: MainAction.LOGIN
  userName: string
  password: string
  dispatch: React.Dispatch<IAction>
}

export interface IActionLogout {
  action: MainAction.LOG_OUT
  dispatch: React.Dispatch<IAction>
}

export interface IActionProfilSet {
  action: MainAction.PROFIL_SET
  profil?: IProfil
}

export interface IActionNotificationAdd {
  action: MainAction.NOTIFICATION_ADD
  life: number
  text: string
  type: INotificationType
  dispatch: React.Dispatch<IAction>
}

export interface IActionNotificationRemove {
  action: MainAction.NOTIFICATION_REMOVE
  uID: string
}

export interface IActionLoadingAdd {
  action: MainAction.LOADING_ADD
  key: string
}

export interface IActionLoadingRemove {
  action: MainAction.LOADING_REMOVE
  key: string
}

export type IAction =
  | IActionInit
  | IActionInitEnd
  | IActionChangeTheme
  | IActionLogin
  | IActionLogout
  | IActionProfilSet
  | IActionNotificationAdd
  | IActionNotificationRemove
  | IActionLoadingAdd
  | IActionLoadingRemove
