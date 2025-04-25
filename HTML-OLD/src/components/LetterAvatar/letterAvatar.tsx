import {getColorDataFromText} from './genColor'

export function LetterAvatar({name, lastName, className}: {name: string; lastName: string; className?: string}) {
  const {bgColor, textColor} = getColorDataFromText(`${name} ${lastName}`)
  const url = new URL('https://ui-avatars.com/api/')

  url.searchParams.set('format', 'svg')
  url.searchParams.set('name', `${name} ${lastName}`)
  url.searchParams.set('bold', 'true')
  url.searchParams.set('background', bgColor)
  url.searchParams.set('color', textColor)
  const src = url.toString()

  // eslint-disable-next-line @next/next/no-img-element
  return <img width={100} height={100} src={src} alt="Avatar" className={className} />
}
