import { Formik } from "formik"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Center, Content, FormGroup, IconSVG, Input, Form } from "./style"
import AnimatedButton from "./animatedButton"
import { IUser, UserContext } from "../app"

export const userIcon = () => {
  return <IconSVG className="icon" viewBox="0 0 1024 1024">
    <path fillRule="evenodd" clipRule="evenodd" d="M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z" />
  </IconSVG>
}
function passIcon() {
  return <IconSVG className="icon" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M5.5 10V7C5.5 5.27609 6.18482 3.62279 7.40381 2.40381C8.62279 1.18482 10.2761 0.5 12 0.5C13.7239 0.5 15.3772 1.18482 16.5962 2.40381C17.8152 3.62279 18.5 5.27609 18.5 7V10H19C20.6569 10 22 11.3431 22 13V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V13C2 11.3431 3.34315 10 5 10H5.5ZM9.52513 4.52513C10.1815 3.86875 11.0717 3.5 12 3.5C12.9283 3.5 13.8185 3.86875 14.4749 4.52513C15.1313 5.1815 15.5 6.07174 15.5 7V10H8.5V7C8.5 6.07174 8.86875 5.1815 9.52513 4.52513Z" />
  </IconSVG>
}

function LoginPage() {
  const { dispatch } = useContext(UserContext.Context)

  return <Center>
    <Content>
      <Formik initialValues={{ user: "", pass: "" }} onSubmit={(values, { setSubmitting }) => {
        fetch("/Login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ Login: values.user, Password: values.pass })
        }).then((response) => response.json())
          .then((user: IUser) => {
            dispatch({ type: "Login", user })
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
        }) => (<>
          <Form onSubmit={handleSubmit}>
            <AnimatedButton disabled={isSubmitting} onChange={handleChange} onBlur={handleBlur}
              value={values.user} error={errors.user} name="user" icon={userIcon} type="text" label="Nazwa użytkownika" />
            <AnimatedButton disabled={isSubmitting} onChange={handleChange} onBlur={handleBlur}
              value={values.pass} error={errors.pass} name="pass" icon={passIcon} type="password" label="Hasło" />
            <FormGroup>
              <Input type="submit" value="Zaloguj się" disabled={isSubmitting} style={{ cursor: isSubmitting ? "not-allowed" : "pointer" }} />
            </FormGroup>
          </Form>
        </>
        )}
      </Formik>
    </Content>
  </Center >
}

export default LoginPage
