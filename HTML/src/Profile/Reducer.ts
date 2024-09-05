import React from "react";
import { IProfilReducerData, IProfilAction, IProfilContextState } from "./type";
import { profile } from "console";

export const ProfilReducer = (state: IProfilReducerData, action: IProfilAction): IProfilReducerData => {
  if (action.type === "Login") {
    return action.profil;
  }
  else if (action.type === "LogOut") {
    return undefined
  }
  return state;
}

export const ProfilContext = React.createContext<IProfilContextState>({
  dispatch: () => { },
  profil: undefined
});