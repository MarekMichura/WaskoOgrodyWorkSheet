import CustomInput from "../../Common/CustomInput"
import { useFormik } from "formik"
import { submit, Values } from "./form"
import { Bottom, Container, Title } from "./style"
import { userIcon, passIcon, LogoIcon } from "./icon"
import CustomButton from "../../Common/CustomButton"

function LoginPage() {
  const formik = useFormik({ initialValues: Values, onSubmit: submit })

  return (
    <Container>
      <LogoIcon />
      <Title>Waśko ogrody</Title>
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