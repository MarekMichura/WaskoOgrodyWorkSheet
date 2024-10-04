export type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

export type MonthRange = Range<0, 12>
export type DayRange = Range<0, 7>
