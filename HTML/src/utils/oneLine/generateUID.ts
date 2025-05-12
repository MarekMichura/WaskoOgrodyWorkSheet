export function generateUID() {
  const firstPart = (Math.random() * 46656) | 0
  const secondPart = (Math.random() * 46656) | 0

  return ('000' + firstPart.toString(36)).slice(-3) + ('000' + secondPart.toString(36)).slice(-3)
}

export function removeUID<T extends {[K in P]: T[P]}, P extends keyof T>(
  table: T[],
  key: T[P],
  property: P = 'key' as P
): T[] {
  return table.filter((element) => key !== element[property])
}
