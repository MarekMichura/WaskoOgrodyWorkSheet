export interface ISearchProps<T> {
  searchParams: Promise<Partial<Record<keyof T, string | string[] | undefined>>>
}

export interface IProps<T> {
  params: Promise<T>
}
