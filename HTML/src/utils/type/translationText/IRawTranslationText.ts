interface IRawTranslationTextParagraph {
  type: 'p'
  text?: string
}
interface IRawTranslationTextList {
  type: 'list'
  element: string[]
}
export type IRawTranslationText = (IRawTranslationTextParagraph | IRawTranslationTextList)[]
