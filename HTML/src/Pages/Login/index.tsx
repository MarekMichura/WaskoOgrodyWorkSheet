import CustomInput from "../../Common/CustomInput"
import { FormikHelpers, useFormik } from "formik"
import { IValues, submit, Values } from "./form"
import { Bottom, Center, Container, Title, SVG } from "./style"
import CustomButton from "../../Common/CustomButton"
import { useContext, useEffect } from "react"
import { contextProfil } from "../../Common/ContextProfil/context"
import { contextNotification } from "../../Common/ContextNotification/Context/context"
import { LockIcon, LogoIcon, UserIcon } from "../../Common/Icons"
import { useNavigate, useSearchParams } from "react-router-dom"

function LoginPage() {
  const nav = useNavigate()
  const [search] = useSearchParams()
  const conProfil = useContext(contextProfil)
  const conNotification = useContext(contextNotification)
  const formik = useFormik({
    initialValues: Values, onSubmit: (values: IValues, helpers: FormikHelpers<IValues>) =>
      submit(values, helpers, conProfil, conNotification)
  })

  useEffect(function () {
    if (conProfil.profil !== undefined) {
      const returnUrl = search.get("path")
      nav(returnUrl ?? "/")
    }
  }, [])

  return (
    <Center>
      <Container>
        <LogoIcon width="120" height="120" />
        <Title>{conProfil.profil?.userName ?? "Waśko ogrody"}</Title>
        <CustomInput disabled={formik.isSubmitting} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text"
          value={formik.values.user} error={formik.errors.user} name="user" label="Nazwa użytkownika" icon={<UserIcon svg={SVG} />} />
        <CustomInput disabled={formik.isSubmitting} onChange={formik.handleChange} onBlur={formik.handleBlur} type="password"
          value={formik.values.password} error={formik.errors.password} name="password" label="Hasło" icon={<LockIcon svg={SVG} />} />
        <CustomButton value="Zaloguj się" disabled={formik.isSubmitting} onClick={formik.submitForm} />
        <Bottom />
      </Container>
    </Center>
  )
}

export default LoginPage