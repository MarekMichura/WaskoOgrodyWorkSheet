import { useNavigate } from "react-router-dom";
import { Center, Content, Input } from "./style";
import { useContext, useEffect } from "react";
import { IRole, UserContext } from "../app";
import { mapRoleToRoute } from "../router";

const SetRole = () => {
  const navigate = useNavigate()
  const { user, dispatch } = useContext(UserContext.Context);

  function logOut() {
    fetch("Logout").then(() => {
      navigate("/");
      dispatch({ type: "LogOut" })
    }).catch(() => { console.log("error") });
  }

  function setRole(e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
    const target = e.target as HTMLInputElement;
    const role = target.value as IRole;
    navigate(mapRoleToRoute[role]);
  }

  return <Center>
    <Content>
      {user?.roles.map((role, id) =>
        <Input type="button" onClick={setRole} key={role} value={role} style={{ cursor: "pointer", margin: id === 0 ? "" : "25px 0 0 0" }} />
      )}
      <Input type="button" onClick={logOut} value="Wyloguj się" style={{ cursor: "pointer", margin: "25px 0 0 0" }} />
    </Content>
  </Center>
}

export default SetRole;

// export default () => { return <></> }