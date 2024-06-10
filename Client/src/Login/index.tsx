import { Formik } from "formik"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Center = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: var(--text1);
  font-family: "RobotoDraft", "Roboto", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

const Content = styled.div`
  max-width: 350px;
  padding: 15px;
  width: 90%;
  border-radius: 5px;
  background-color: var(--white);
  box-shadow: 0 3px 5px var(--black), 3px 0 5px var(--black);
`

const Form = styled.form`
  flex-direction: column;
  display: flex;
  gap: 14px;
`

const FormGroup = styled.div`
  display: flex;
  background-color: var(--gray);
  position: relative;
`

const IconHolder = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  width: 53px;
  height: 53px;
`;

const Icon = styled.svg`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 50%;
  max-width: 50%;
  overflow: hidden;
  border-radius: 100%;
`

const Input = styled.input`
  flex: 1;
  border: 0;
  font: inherit;
  position: relative;
  outline: 0;
  background-color: inherit;
  transition: background-color 0.3s;
  padding: 16px;
  width: 100%;
  cursor: inherit;
  &[type='submit']{
    background-color: var(--color);
  }

  &[type='submit']:disabled{
    filter: brightness(95%);
  }
`

const Label = styled.label`
  position: absolute;
  left: 70px;
  top: 50%;
  transform: translateY(-50%);
  transition: opacity 500ms;
  cursor: inherit;
`

const BottomBorder = styled.div`
  position: absolute;
  background-color: var(--red);
  height: 3px;
  transition: width 500ms;
  bottom: 0;
`

const userIcon =
  <Icon className="icon" viewBox="0 0 1024 1024">
    <path fillRule="evenodd" clipRule="evenodd" d="M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z" />
  </Icon>
const passIcon =
  <Icon className="icon" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M5.5 10V7C5.5 5.27609 6.18482 3.62279 7.40381 2.40381C8.62279 1.18482 10.2761 0.5 12 0.5C13.7239 0.5 15.3772 1.18482 16.5962 2.40381C17.8152 3.62279 18.5 5.27609 18.5 7V10H19C20.6569 10 22 11.3431 22 13V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V13C2 11.3431 3.34315 10 5 10H5.5ZM9.52513 4.52513C10.1815 3.86875 11.0717 3.5 12 3.5C12.9283 3.5 13.8185 3.86875 14.4749 4.52513C15.1313 5.1815 15.5 6.07174 15.5 7V10H8.5V7C8.5 6.07174 8.86875 5.1815 9.52513 4.52513Z" />
  </Icon>

interface IAnimatedButton {
  type: string,
  name: string,
  label: string,
  value: string,
  error?: string,
  disabled: boolean,
  icon: JSX.Element,
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
      <IconHolder>
        {props.icon}
      </IconHolder>
      <Input type={props.type} name={props.name} value={props.value} disabled={props.disabled} required
        onChange={change} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} ref={ref} />
      <Label style={{ opacity: inUsing ? "0" : "100%" }}>{props.label}</Label>
      <BottomBorder style={{ left: "50%", width: focus ? "50%" : "0" }} />
      <BottomBorder style={{ right: "50%", width: focus ? "50%" : "0" }} />
    </FormGroup>
  </>
}

function LoginPage() {
  const navigate = useNavigate();

  return <>
    <Center>
      <Content>
        <Formik initialValues={{ user: "", pass: "" }} onSubmit={(values, { setSubmitting }) => {
          fetch("Login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ Login: values.user, Password: values.pass })
          }).then((response) => response.json())
            .then((roles: string[]) => {
              navigate("/Role", { state: { roles } });
            })
            .catch(() => { console.log("error") })
            .finally(() => {
              setSubmitting(false);
            })
        }}>
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              <AnimatedButton disabled={isSubmitting} onChange={handleChange} onBlur={handleBlur}
                value={values.user} error={errors.user} name="user" icon={userIcon} type="text" label="Nazwa użytkownika" />
              <AnimatedButton disabled={isSubmitting} onChange={handleChange} onBlur={handleBlur}
                value={values.pass} error={errors.pass} name="pass" icon={passIcon} type="password" label="Hasło" />
              <FormGroup>
                <Input type="submit" value="Zaloguj się" disabled={isSubmitting} style={{ cursor: isSubmitting ? "not-allowed" : "pointer" }} />
              </FormGroup>
            </Form>
          )}
        </Formik>
      </Content>
    </Center >
  </>
}

export default LoginPage