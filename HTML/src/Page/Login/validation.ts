import {FormikErrors} from 'formik'

import {ILoginValues} from './ITypes'

export const validationLogin = (values: ILoginValues) => {
  const errors: FormikErrors<ILoginValues> = {}

  if (values.userName == undefined || values.userName == '') errors.userName = 'Musisz wpisać login'
  if (values.password == undefined || values.password == '') errors.password = 'Musisz wpisać hasło'
  if (!values.userName || !values.password) return errors

  if (values.userName.length < 4) errors.userName = 'Zbyt krótki login'
  if (values.password.length < 4) errors.password = 'Zbyt krótkie hasło'
  return errors
}
