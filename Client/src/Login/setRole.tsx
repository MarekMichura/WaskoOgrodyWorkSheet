import { useLocation, useNavigate } from "react-router-dom";
import { Center, Content, Input } from "./style";
import { useEffect } from "react";

type role = "User" | "Admin"
interface ILocationState {
  roles: role[]
}

const mapRoleToRoute = {
  "User": "/User",
  "Admin": "/Admin"
};

const SetRole = () => {
  const location = useLocation()
  const locationState = location.state as ILocationState
  const navigate = useNavigate()

  useEffect(() => {
    if (locationState.roles.length === 1) {
      navigate(mapRoleToRoute[locationState.roles[0]]);
    }
  }, [])

  function logOut() {
    fetch("Logout").then(() => {
      navigate("/");
    }).catch(() => { console.log("error") });
  }

  function setRole(e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
    const target = e.target as HTMLInputElement;
    const role = target.value as role;
    navigate(mapRoleToRoute[role]);
  }

  return <Center>
    <Content>
      {locationState.roles.map((role, id) =>
        <Input type="button" onClick={setRole} key={role} value={role} style={{ cursor: "pointer", margin: id === 0 ? "" : "25px 0 0 0" }} />
      )}
      <Input type="button" onClick={logOut} value="Wyloguj się" style={{ cursor: "pointer", margin: "25px 0 0 0" }} />
    </Content>
  </Center>
}

export default SetRole;

// export default () => { return <></> }