export type IEnumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : IEnumerate<N, [...Acc, Acc['length']]>

export type IRange<F extends number, T extends number> = Exclude<IEnumerate<T>, IEnumerate<F>>
