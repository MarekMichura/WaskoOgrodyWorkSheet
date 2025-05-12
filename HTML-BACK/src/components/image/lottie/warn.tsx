import {Player} from '@lottiefiles/react-lottie-player'

import warnData from './warn.json'

function WarnLottie() {
  return <Player src={warnData} autoplay keepLastFrame />
}

export default WarnLottie
