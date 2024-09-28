import {ILoginValues} from './ITypes'

function validationLogin(values: ILoginValues) {
  const errors: ILoginValues = {}

  if (values.userName == undefined || values.userName == '') errors.userName = 'Musisz wpisać login'
  if (values.password == undefined || values.password == '') errors.password = 'Musisz wpisać hasło'
  if (!values.userName || !values.password) return errors

  if (values.userName.length < 5) errors.userName = 'Zbyt krótki login'
  if (values.password.length < 5) errors.password = 'Zbyt krótkie hasło'
  return errors
}

export default validationLogin
