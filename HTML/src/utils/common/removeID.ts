export function removeKey<T extends {[K in P]: T[P]}, P extends keyof T>(
  table: T[],
  key: T[P],
  property: P = 'key' as P
): T[] {
  return table.filter((element) => key !== element[property])
}
