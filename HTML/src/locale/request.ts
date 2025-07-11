import {getRequestConfig} from 'next-intl/server'

export default getRequestConfig(async ({requestLocale}) => {
  const lang = await requestLocale

  switch (lang) {
    default:
    case 'pl-PL':
      return {locale: 'pl-PL', messages: (await import(`./translations/pl_PL`)).default}
  }
})
