import { useState, useRef } from "react"
import { FormGroup, IconHolder, Input, Label, BottomBorder } from "./style"

export interface IAnimatedButton {
  type: string,
  name: string,
  label: string,
  value: string,
  error?: string,
  disabled: boolean,
  icon?: () => JSX.Element,
  onBlur: (p: string | React.ChangeEvent<unknown>) => void,
  onChange: (p: string | React.ChangeEvent<unknown>) => void,
}

function AnimatedButton(props: IAnimatedButton) {
  const [empty, setEmpty] = useState(false)
  const [focus, setFocus] = useState(false)
  function change(p: React.ChangeEvent<HTMLInputElement>) {
    setEmpty(p.target.value !== "")
    props.onChange(p)
  }
  const ref = useRef<HTMLInputElement>(null)
  const inUsing = empty || focus

  return <>
    <FormGroup onClick={() => ref.current?.focus()} style={{ cursor: props.disabled ? "not-allowed" : "text", filter: props.disabled ? "brightness(95%)" : "" }}>
      {props.icon ? <IconHolder><props.icon /></IconHolder> : ""}
      <Input type={props.type} name={props.name} value={props.value} disabled={props.disabled} required
        onChange={change} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} ref={ref} />
      <Label style={{ opacity: inUsing ? "0" : "100%" }}>{props.label}</Label>
      <BottomBorder style={{ left: "50%", width: focus ? "50%" : "0" }} />
      <BottomBorder style={{ right: "50%", width: focus ? "50%" : "0" }} />
    </FormGroup>
  </>
}

export default AnimatedButton