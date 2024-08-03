import React, { useEffect, useReducer, useState } from "react";
import Login from "./Login"
import Router from "./router";

export interface IUser {
  name: string,
  image: Blob,
  start: Date,
  roles: IRole[]
}

export type IRole = "User" | "Admin"

namespace UserReducer {
  export type IDate = IUser | undefined
  interface IActionLogin {
    type: "Login",
    user: IUser,
  }
  interface IActionLogOut {
    type: "LogOut"
  }
  export type IAction = IActionLogin | IActionLogOut

  export const def: IDate = undefined

  export const reducer = (state: IDate, action: IAction): IDate => {
    if (action.type === "Login") {
      return action.user;
    }
    else if (action.type === "LogOut") {
      return undefined
    }
    return state;
  }
};

export namespace UserContext {
  export interface IContextState {
    user: UserReducer.IDate
    dispatch: React.Dispatch<UserReducer.IAction>
  }
  const def: IContextState = {
    user: undefined,
    dispatch: () => { }
  }
  export const Context = React.createContext(def)
}

function App() {
  const [user, dispatch] = useReducer(UserReducer.reducer, UserReducer.def);

  useEffect(() => {
    fetch("/User")
      .then((response) => response.json())
      .then((user: IUser) => {
        dispatch({ type: "Login", user })
      })
      .catch(() => { })
  }, [])

  return <UserContext.Context.Provider value={{ user, dispatch }}>
    <div>
      {user === undefined ? <Login /> : <Router />}
    </div>
  </UserContext.Context.Provider>
}

export default App;