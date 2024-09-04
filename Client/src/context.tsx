import { useReducer, useEffect } from "react";
import { useSearchParams, useNavigate, useLocation, Outlet } from "react-router-dom";
import { ProfilReducer, ProfilContext } from "./Profile/Reducer";
import { IProfil } from "./Profile/type";

export default function ContextProfil() {
  const [profil, dispatch] = useReducer(ProfilReducer, undefined);
  const [search] = useSearchParams()
  const nav = useNavigate()
  const loc = useLocation()

  useEffect(() => {
    if (profil === undefined) fetch("GetProfil")
      .then(res => res.json())
      .then((profil: IProfil) => {
        dispatch({ type: "Login", profil })

        const path = loc.pathname.toLowerCase()
        const returnUrl = search.get("path")
        if (path == "/login" || path == "/login/") {
          nav(returnUrl ?? "/")
        }
      })
      .catch(() => {
        const path = loc.pathname.toLowerCase()
        if (!(path == "/" || path == "/login" || path == "/login/"))
          nav("/login?path=" + loc.pathname)
      })
  }, [profil]);

  return (
    <ProfilContext.Provider value={{ dispatch, profil }}>
      <Outlet />
    </ProfilContext.Provider>
  )
}