function stringToHash(str: string) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  return hash
}

function hashToColor(hash: number) {
  const r = (hash >> 16) & 0xff
  const g = (hash >> 8) & 0xff
  const b = hash & 0xff
  return `#${[r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('')}`
}

function getContrastYIQ(hexColor: string) {
  const r = parseInt(hexColor.slice(1, 2), 16)
  const g = parseInt(hexColor.slice(3, 2), 16)
  const b = parseInt(hexColor.slice(5, 2), 16)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 128 ? '#000000' : '#FFFFFF'
}

export function getColorDataFromText(text: string) {
  const hash = stringToHash(text)
  const bgColor = hashToColor(hash)
  const textColor = getContrastYIQ(bgColor)
  return {bgColor, textColor}
}
