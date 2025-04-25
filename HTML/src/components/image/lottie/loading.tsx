import {Player} from '@lottiefiles/react-lottie-player'

import infoData from './loading.json'

function LoadingLottie() {
  return <Player src={infoData} autoplay loop />
}

export default LoadingLottie
