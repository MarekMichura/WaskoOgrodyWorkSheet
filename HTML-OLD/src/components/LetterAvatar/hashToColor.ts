export function hashToColor(hash: number) {
  const r = (hash >> 16) & 0xff
  const g = (hash >> 8) & 0xff
  const b = hash & 0xff
  return `#${[r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('')}`
}
