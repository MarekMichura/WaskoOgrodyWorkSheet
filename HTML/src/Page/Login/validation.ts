import {FormikErrors} from 'formik'

import {ILoginValues} from './ITypes'

export function validationLogin(values: ILoginValues) {
  const errors: FormikErrors<ILoginValues> = {}

  if (values.login == undefined || values.login == '') errors.login = 'Musisz wpisać login'
  if (values.password == undefined || values.password == '') errors.password = 'Musisz wpisać hasło'
  if (!values.login || !values.password) return errors

  if (values.login.length < 4) errors.login = 'Zbyt krótki login'
  if (values.password.length < 4) errors.password = 'Zbyt krótkie hasło'
  return errors
}
