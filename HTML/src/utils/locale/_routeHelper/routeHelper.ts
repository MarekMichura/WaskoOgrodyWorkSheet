import {EExtraRoutesSplitted, ERoutesEN} from '@/utils/type/ERoutes'

export function splitRemoveEmpty(a: string) {
  return a.split('/').filter((a) => a !== '')
}

function isDynamicProps(a: string) {
  return a.startsWith('%5B') && a.endsWith('%5D')
}

function filterMapFun(a: string, b: string) {
  return isDynamicProps(a) || a === b
}

function combinePaths(a: string, b: string, c: string) {
  if (isDynamicProps(b)) return a + '/' + c
  return a + '/' + b
}

export function checkIfRouteIsExtraAndParseToDefault(path: string) {
  const pathSplit = path.split('/').filter((a) => a !== '')
  let map = EExtraRoutesSplitted.filter((a) => a.value.length === pathSplit.length)
  for (let i = 0; i < pathSplit.length; i++) {
    if (map.length === 0) break

    map = map.filter((map) => filterMapFun(map.value[i], pathSplit[i]))
  }
  const result = map.pop()
  if (result === undefined) return

  return ERoutesEN[result.key]
    .split('/')
    .filter((a) => a !== '')
    .reduce((a, b, c) => combinePaths(a, b, pathSplit[c]))
}
