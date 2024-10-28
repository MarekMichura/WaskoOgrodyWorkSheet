export enum IMonth {
  'styczeń',
  'luty',
  'marzec',
  'kwiecień',
  'maj',
  'czerwiec',
  'lipiec',
  'sierpień',
  'wrzesień',
  'październik',
  'listopad',
  'grudzień',
}

export const months = Object.values(IMonth)
  .filter((a) => typeof a == 'string')
  .map((a) => a.toString())
