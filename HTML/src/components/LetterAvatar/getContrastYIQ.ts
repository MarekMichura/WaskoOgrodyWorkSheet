export function getContrastYIQ(hexColor: string) {
  const r = parseInt(hexColor.slice(1, 2), 16)
  const g = parseInt(hexColor.slice(3, 2), 16)
  const b = parseInt(hexColor.slice(5, 2), 16)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 128 ? '#000000' : '#FFFFFF'
}
