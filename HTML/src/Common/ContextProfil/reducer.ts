import { IProfilReducerData, IProfilAction } from "./types";

export function reducerProfil(state: IProfilReducerData, action: IProfilAction): IProfilReducerData {
  if (action.type === "Login") {
    return action.profil;
  }
  else if (action.type === "LogOut") {
    return undefined;
  }
  return state;
}