import CustomInput from "../../Common/CustomInput"
import { FormikHelpers, useFormik } from "formik"
import { IValues, submit, Values } from "./form"
import { Bottom, Container, Title } from "./style"
import { userIcon, passIcon, LogoIcon } from "./icon"
import CustomButton from "../../Common/CustomButton"
import { useContext } from "react"
import { ProfilContext } from "../../Profile/Reducer"

function LoginPage() {
  const context = useContext(ProfilContext)
  const formik = useFormik({
    initialValues: Values, onSubmit: (values: IValues, helpers: FormikHelpers<IValues>) => {
      submit(values, helpers, context)
    }
  })

  return (
    <Container>
      <LogoIcon />
      <Title>{context.profil?.UserName ?? "Waśko ogrody"}</Title>
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