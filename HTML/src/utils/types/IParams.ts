export interface IParams<T> {
  readonly params: Promise<T>
}

export interface IParamProps<T> {
  readonly params: T
}
