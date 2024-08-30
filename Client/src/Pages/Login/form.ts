import { FormikHelpers } from 'formik';
import { IProfil } from '../../Profile/type';

interface IValues {
  user: string, password: string
}

export const Values: IValues = {
  user: '',
  password: ''
}

interface IResponseSuccess {
  Authenticated: true,
  Profil: IProfil
}

interface IResponseFail {
  Authenticated: false,
}

type IResponse = IResponseSuccess | IResponseFail

export function submit(values: IValues, helpers: FormikHelpers<IValues>) {
  fetch("/Authenticate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Login: values.user, Password: values.password })
  }).then((res) => {
    return res.json()
  }).then((res: IResponse) => {
    console.log(res);
  }).catch(() => {
    console.log("error");
  }).finally(() => {
    helpers.setSubmitting(false);
  });
}