/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'postcss-sort-media-queries' {
  import {Plugin} from 'postcss'

  interface SortMediaQueriesOptions {
    sort?: 'mobile-first' | 'desktop-first' | ((a: string, b: string) => number)
    configuration?: Record<string, any>
    onlyTopLevel?: boolean
  }

  const sortMediaQueries: (options?: SortMediaQueriesOptions) => Plugin

  export = sortMediaQueries
}
