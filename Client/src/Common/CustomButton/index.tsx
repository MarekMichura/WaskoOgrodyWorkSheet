import { ICustomButton } from "./ICustomButton";
import { Input } from "./style"

function CustomButton(props: ICustomButton) {
  return <Input type="button" disabled={props.disabled} value={props.value} onClick={props.onClick} />
}

export default CustomButton