export type IStringify<T> = {
  [K in keyof T]: T[K] extends object ? IStringify<T[K]> : string
}
