import {Player} from '@lottiefiles/react-lottie-player'

import errorData from './error.json'

function ErrorLottie() {
  return <Player src={errorData} autoplay keepLastFrame />
}

export default ErrorLottie
