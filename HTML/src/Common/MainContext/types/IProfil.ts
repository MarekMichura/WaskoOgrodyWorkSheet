export type IUserRole =
  | 'EmployeeManager'
  | 'Employee'
  | 'ConstructionManager'
  | 'DayOffManager'
  | 'ConstructionManager'

export interface IProfil {
  firstName: string
  lastName: string
  userName: string
  workStartDate: string
  roles: IUserRole[]
}
