import {getContrastYIQ} from './getContrastYIQ'
import {hashToColor} from './hashToColor'
import {stringToHash} from './stringToHash'

export function getColorDataFromText(text: string) {
  const hash = stringToHash(text)
  const bgColor = hashToColor(hash)
  const textColor = getContrastYIQ(bgColor)
  return {bgColor, textColor}
}
