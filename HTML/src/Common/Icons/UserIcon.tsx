import { createElement } from "react";
import IIcon from "./IIcon";

function UserIcon(p: IIcon) {
  const props = {
    viewBox: "0 0 1024 1024",
    ...p,
  };
  delete props.svg;

  const child =
    <path fillRule="evenodd" clipRule="evenodd" d="M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z" />

  return (p.svg === undefined) ?
    createElement("svg", props, child) :
    <p.svg {...props}>{child}</p.svg>
}

export default UserIcon;