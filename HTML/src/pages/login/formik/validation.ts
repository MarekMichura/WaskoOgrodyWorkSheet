import {FormikErrors} from 'formik'

import {loginRequest} from '/query/profile/types/_loginRequest'

export const loginValidator = (value: loginRequest) => {
  const errors: FormikErrors<loginRequest> = {}

  if (value.login === undefined || value.login === '') errors.login = 'Proszę uzupełnić nazwę użytkownika.'
  else if (value.login.length < 4) errors.login = 'Twoja nazwa użytkownika jest zbyt krótka.'
  if (value.password === undefined || value.password === '') errors.password = 'Proszę uzupełnić hasło.'
  else if (value.password.length < 4) errors.password = 'Twoje hasło jest zbyt krótkie.'
  return errors
}
