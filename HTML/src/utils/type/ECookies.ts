export const ECookies = {
  identity: '.AspNetCore.Identity.Application',
  locale: '.locale',
  theme: '.Theme',
  js: '.js',
} as const

export type ECookiesKey = keyof typeof ECookies
export type ECookieValues = (typeof ECookies)[ECookiesKey]
