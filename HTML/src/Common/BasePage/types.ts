export interface IPageAction {
  type: "setTitle",
  title: string
}

export type IPageReducerData = string | undefined

export interface IPageContextState {
  title: IPageReducerData
  dispatch: React.Dispatch<IPageAction>
}