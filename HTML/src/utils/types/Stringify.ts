export type Stringify<T> = {
  [K in keyof T]: T[K] extends object ? Stringify<T[K]> : string
}
