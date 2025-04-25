import {Player} from '@lottiefiles/react-lottie-player'

import infoData from './info.json'

function InfoLottie() {
  return <Player src={infoData} autoplay keepLastFrame />
}

export default InfoLottie
