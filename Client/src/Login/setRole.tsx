import { useLocation } from "react-router-dom";

interface ILocationState {
  roles: string[]
}

function setRole() {
  const location = useLocation();
  const locationState = location.state as ILocationState;

  return <>
    {locationState.roles.map(role => <div key={role}>{role}</div>)}
  </>
}

export default setRole;