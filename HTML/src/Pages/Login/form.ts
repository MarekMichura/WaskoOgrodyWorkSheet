import { FormikHelpers } from 'formik';
import { IProfil, IProfilContextState } from '../../Profile/type';

export interface IValues {
  user: string, password: string
}

export const Values: IValues = {
  user: '',
  password: ''
}

interface IResponseSuccess {
  authenticated: true,
  profil: IProfil
}

interface IResponseFail {
  authenticated: false,
}

type IResponse = IResponseSuccess | IResponseFail

export function submit(values: IValues, helpers: FormikHelpers<IValues>, context: IProfilContextState) {
  fetch("/Authenticate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Login: values.user, Password: values.password })
  }).then((res) => {
    return res.json()
  }).then((res: IResponse) => {
    if (res.authenticated == true) {
      context.dispatch({ type: "Login", profil: res.profil })
    }
  }).catch(() => {
    console.log("error");
  }).finally(() => {
    helpers.setSubmitting(false);
  });
}