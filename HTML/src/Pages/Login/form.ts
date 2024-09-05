import { FormikHelpers } from 'formik';
import { IProfil, IProfilContextState } from '../../Common/ContextProfil/types';
import { INotificationContextState } from '../../Common/ContextNotification/types';
import CreateNotification from '../../Common/ContextNotification/create';

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

export function submit(values: IValues, helpers: FormikHelpers<IValues>, conProfil: IProfilContextState, conNotification: INotificationContextState) {
  fetch("/Authenticate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Login: values.user, Password: values.password })
  }).then((res) => {
    return res.json()
  }).then((res: IResponse) => {
    if (res.authenticated == true) {
      conProfil.dispatch({ type: "Login", profil: res.profil })
      CreateNotification({ text: "Zalogowałeś się: " + res.profil.UserName, type: "success", dispatch: conNotification.dispatch });
    } else {
      CreateNotification({ text: "Nie udało się zalogować", type: "error", dispatch: conNotification.dispatch });
    }
  }).catch(() => {
    CreateNotification({ text: "Błąd połączenia z serwerem", type: "error", dispatch: conNotification.dispatch });
  }).finally(() => {
    helpers.setSubmitting(false);
  });
}