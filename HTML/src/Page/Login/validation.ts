import {ILoginValues} from './types'

function validationLogin(values: ILoginValues) {
  const errors: ILoginValues = {}

  if (values.username == undefined || values.username == '')
    errors.username = 'Musisz wpisać login'
  if (values.password == undefined || values.password == '')
    errors.password = 'Musisz wpisać hasło'
  if (!values.username || !values.password) return errors

  if (values.username.length < 5) errors.username = 'Zbyt krótki login'
  if (values.password.length < 5) errors.password = 'Zbyt krótkie hasło'
  return errors
}

export default validationLogin
