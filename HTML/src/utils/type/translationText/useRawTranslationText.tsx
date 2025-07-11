import {useMemo} from 'react'

import {type IRawTranslationText} from './IRawTranslationText'
import {type IUseRawTranslationTextOpt} from './IUseRawTranslationTextOpt'

function useRawTranslationText(text: IRawTranslationText, opt?: IUseRawTranslationTextOpt) {
  return useMemo(() => {
    return text.map((item, i) => {
      switch (item.type) {
        case 'p':
          return (
            <p key={i} {...opt?.p}>
              {item.text}
            </p>
          )
        case 'list':
          return (
            <ul key={i} {...opt?.list}>
              {item.element.map((el, j) => (
                <li key={j}>{el}</li>
              ))}
            </ul>
          )
      }
    })
  }, [text, opt])
}

export default useRawTranslationText
