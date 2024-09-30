import {IActionLoadingAdd, IActionLoadingRemove} from '../type/IAction'

export function addLoading(state: string[], {key}: IActionLoadingAdd): string[] {
  if (!state.includes(key)) return [...state, key]
  return [...state]
}

export function removeLoading(state: string[], {key}: IActionLoadingRemove): string[] {
  const newStateList = state.filter((a) => a !== key)
  return newStateList
}
