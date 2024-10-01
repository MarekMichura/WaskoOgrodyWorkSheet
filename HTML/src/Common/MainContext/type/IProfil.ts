export enum IUserRole {
  Pracownik = 'Pracownik',
  Ogrodnik = 'Ogrodnik',
  PolskieSwieta = 'PolskieSwieta',
}

export interface IProfil {
  firstName: string
  lastName: string
  userName: string
  workStartDate: string
  roles: IUserRole[]
  image?: string
}
