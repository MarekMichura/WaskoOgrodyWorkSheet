import React from "react";
import { IProfilContextState } from "./types";

export const contextProfil = React.createContext<IProfilContextState>({
  dispatch: () => { },
  profil: undefined
});