export enum ECookie {
  identity = '.AspNetCore.Identity.Application',
  locale = '.locale',
  theme = '.theme',
  js = '.js',
}

export type ECookieKey = keyof typeof ECookie
