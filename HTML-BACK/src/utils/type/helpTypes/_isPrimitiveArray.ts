export function isInPrimitiveArray<T>(obj: unknown, table: Readonly<T[]>): obj is T {
  if (typeof obj === 'object' || obj === null || !table.includes(obj as any)) {
    return false
  }

  return true
}
