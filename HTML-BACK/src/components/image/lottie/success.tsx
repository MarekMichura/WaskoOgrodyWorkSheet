import {Player} from '@lottiefiles/react-lottie-player'

import successData from './success.json'

function SuccessLottie() {
  return <Player src={successData} autoplay keepLastFrame />
}

export default SuccessLottie
