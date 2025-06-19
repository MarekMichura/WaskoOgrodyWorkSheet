export interface ISearchParams<T> {
  readonly searchParams: Promise<Partial<Record<keyof T, string | string[] | undefined>>>
}
