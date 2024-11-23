import RepeatIcon from '/svg/Repeat'

import ErrorPage from './error'

function Error404() {
  return <ErrorPage error={{name: '404', message: 'Nie znaleziono strony'}} Icon={<RepeatIcon />} />
}

export default Error404
