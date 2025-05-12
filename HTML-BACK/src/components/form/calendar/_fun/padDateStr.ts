export function padDateStr({day, month, year}: {day: number; month: number; year: number}) {
  const mm = (month + 1).toString().padStart(2, '0')
  const dd = day.toString().padStart(2, '0')
  return `${year}-${mm}-${dd}`
}
