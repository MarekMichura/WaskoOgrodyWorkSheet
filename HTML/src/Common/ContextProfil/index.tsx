import { useReducer, useEffect, ReactNode } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { contextProfil } from "./context";
import { reducerProfil } from "./reducer";
import { IProfil } from "./types";

export default function ContextProfil(props: { children?: ReactNode }) {
  const [profil, dispatch] = useReducer(reducerProfil, undefined);
  const [search] = useSearchParams()
  const nav = useNavigate()
  const loc = useLocation()

  useEffect(() => {
    if (profil === undefined) fetch("GetProfil")
      .then(res => res.json())
      .then((profil: IProfil) => {
        dispatch({ type: "Login", profil })
      })
      .catch(() => { })
  }, []);

  useEffect(() => {
    if (profil === undefined) {
      const path = loc.pathname.toLowerCase()
      if (!(path == "/login" || path == "/login/"))
        nav("/login?path=" + loc.pathname)
    } else {
      const path = loc.pathname.toLowerCase()
      const returnUrl = search.get("path")
      if (path == "/login" || path == "/login/") {
        nav(returnUrl ?? "/")
      }
    }
  }, [profil])

  return (
    <contextProfil.Provider value={{ dispatch, profil }}>
      {props.children}
    </contextProfil.Provider>
  )
}