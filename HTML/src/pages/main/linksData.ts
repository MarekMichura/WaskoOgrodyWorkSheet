import {ERoutes} from '/route/eRoutes'
import {link} from '/route/link'
import {routeComponents} from '/route/routeComponents'

import {linksIcon} from './linksIcon'
import {linksText} from './linksText'

function linksData(permissions?: Record<ERoutes, boolean>) {
  return Object.keys(ERoutes)
    .map((id) => Number(id) as ERoutes)
    .filter((id) => !isNaN(id))
    .map((id) => {
      const perm = permissions ? permissions[id] : false
      if (!perm) return undefined
      return {
        id,
        path: link[id],
        Icon: linksIcon[id],
        text: linksText[id],
        com: routeComponents[id].preload,
      }
    })
    .filter((obj) => obj !== undefined)
}

export default linksData
