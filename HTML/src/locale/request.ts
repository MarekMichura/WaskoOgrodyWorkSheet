import {getRequestConfig} from 'next-intl/server'

export default getRequestConfig(async ({requestLocale}) => {
  const lang = await requestLocale

  switch (lang) {
    // case 'en_US':
    //   return {locale: 'en-US', messages: (await import(`./translations/en_US`)).default}
    default:
    case 'pl-PL':
      return {locale: 'pl-PL', messages: (await import(`./translations/pl_PL`)).default}
  }
})
