export enum IUserRole {
  EmployeeManager,
  Employee,
  ConstructionManager,
  DayOffManager,
}

export interface IProfil {
  firstName: string
  lastName: string
  userName: string
  workStartDate: string
  roles: IUserRole[]
}
