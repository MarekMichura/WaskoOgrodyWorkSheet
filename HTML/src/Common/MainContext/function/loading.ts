import {IActionLoadingAdd, IActionLoadingRemove} from '../type/IAction'

export function addLoading(state: string[], {key}: IActionLoadingAdd): string[] {
  return [...state, key]
}

export function removeLoading(state: string[], {key}: IActionLoadingRemove): string[] {
  const newStateList = state.filter((a) => a !== key)
  return newStateList
}
