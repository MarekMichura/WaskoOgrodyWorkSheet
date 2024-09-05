export type IUserRole =
  "EmployeeManager" |
  "Employee" |
  "ConstructionManager" |
  "DayOffManager" |
  "ConstructionManager";

export interface IProfil {
  FirstName: string;
  LastName: string;
  UserName: string;
  WorkStartDate: string;
  Roles: IUserRole[];
}

interface IProfilActionLogin {
  type: "Login",
  profil: IProfil,
}

interface IProfilActionLogOut {
  type: "LogOut"
}

export type IProfilAction = IProfilActionLogin | IProfilActionLogOut

export type IProfilReducerData = IProfil | undefined

export interface IProfilContextState {
  profil: IProfilReducerData
  dispatch: React.Dispatch<IProfilAction>
}