export function calcDateRestrictions(year: number, month: number, from: Date, to: Date) {
  const result = {
    nextYear: false,
    prevYear: false,
    month: [false, false, false, false, false, false, false, false, false, false, false, false],
  }

  if (year === from.getFullYear()) {
    result.prevYear = true
    result.month.fill(true, 0, from.getMonth() - 1)
  }

  if (year === to.getFullYear()) {
    result.nextYear = true

    result.month = result.month.fill(true, to.getMonth() + 1, 12)
  }

  return result as Readonly<typeof result>
}
