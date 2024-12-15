export function isDateBeetween(year: number, month: number, day: number, {dateBefore, dateAfter}: {dateBefore?: Date; dateAfter?: Date}) {
  const date = new Date(year, month, day)
  if (dateBefore && date < dateBefore) return false
  if (dateAfter && date > dateAfter) return false
  return true
}
