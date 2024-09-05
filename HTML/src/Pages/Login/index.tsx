import CustomInput from "../../Common/CustomInput"
import { FormikHelpers, useFormik } from "formik"
import { IValues, submit, Values } from "./form"
import { Bottom, Container, Title } from "./style"
import { userIcon, passIcon, LogoIcon } from "./icon"
import CustomButton from "../../Common/CustomButton"
import { useContext } from "react"
import { contextProfil } from "../../Common/ContextProfil/context"
import { contextNotification } from "../../Common/ContextNotification/context"

function LoginPage() {
  const conProfil = useContext(contextProfil)
  const conNotification = useContext(contextNotification)
  const formik = useFormik({
    initialValues: Values, onSubmit: (values: IValues, helpers: FormikHelpers<IValues>) =>
      submit(values, helpers, conProfil, conNotification)
  })

  return (
    <Container>
      <LogoIcon />
      <Title>{conProfil.profil?.UserName ?? "Waśko ogrody"}</Title>
      <CustomInput disabled={formik.isSubmitting} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text"
        value={formik.values.user} error={formik.errors.user} name="user" label="Nazwa użytkownika" icon={userIcon} />
      <CustomInput disabled={formik.isSubmitting} onChange={formik.handleChange} onBlur={formik.handleBlur} type="password"
        value={formik.values.password} error={formik.errors.password} name="password" label="Hasło" icon={passIcon} />
      <CustomButton value="Zaloguj się" disabled={formik.isSubmitting} onClick={formik.submitForm} />
      <Bottom />
    </Container>
  )
}

export default LoginPage