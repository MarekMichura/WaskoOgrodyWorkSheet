import { IPageAction, IPageReducerData } from "./types";

export function reducerPage(state: IPageReducerData, action: IPageAction): IPageReducerData {
  if (action.type === "setTitle") {
    return action.title;
  }
  return state;
}