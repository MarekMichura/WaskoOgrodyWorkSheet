import {NextIntlClientProvider} from 'next-intl'

import {type ILocale} from '@/utils/locale/locales'
import {type IChildren} from '@/utils/type/props/IChildren'

interface IIntlProps extends IChildren {
  lang: ILocale
}

function Intl({children, lang}: IIntlProps) {
  return <NextIntlClientProvider locale={lang}>{children}</NextIntlClientProvider>
}

export default Intl
