import {myLazy} from '/lazy/myLazy'

export const login = myLazy(() => import('/page/login/login'))
export const main = myLazy(() => import('/page/main/main'))

export const error = myLazy(() => import('/page/error/error'))
export const error404 = myLazy(() => import('/page/error/error404'))
