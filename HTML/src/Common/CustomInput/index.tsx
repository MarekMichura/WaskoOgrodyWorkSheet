import { useRef, useState } from "react"
import { BottomBorder, Content, Input, Label } from "./style"
import ICustomInput from "./ICustomInput";

function CustomInput(props: ICustomInput) {
  const [focus, setFocus] = useState(false)
  function open() { setFocus(true) }
  function close(p: string | React.ChangeEvent<HTMLInputElement>) { setFocus(false); props.onBlur(p) }
  const input = useRef<HTMLInputElement>(null)

  const isOpen = focus || props.value !== ""
  function focusInput() {
    input.current?.focus();
  }

  return (
    <Content>
      {props.icon}
      <Input
        type={props.type}
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        onChange={props.onChange}
        onFocus={open}
        onBlur={close}
        ref={input}
      />
      <Label open={isOpen} disabled={props.disabled} onClick={focusInput}>{props.label}</Label>
      <BottomBorder $left={true} open={isOpen} />
      <BottomBorder $left={false} open={isOpen} />
    </Content>
  )
}

export default CustomInput