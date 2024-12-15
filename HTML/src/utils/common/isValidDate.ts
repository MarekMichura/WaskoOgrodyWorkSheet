export function isValidDate(year: number, month: number, day: number) {
  const date = new Date(year, month, day)

  return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day
}
