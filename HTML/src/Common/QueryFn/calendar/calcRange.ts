export const calcRange = (year: number, month: number) => {
  const start = new Date(year, month, 1)
  const day = start.getDay() - 1
  start.setDate(start.getDate() - (day == -1 ? 6 : day))
  const end = new Date(start.getFullYear(), start.getMonth(), start.getDate() + 41)

  return {start, end}
}
