import {getPublicBase64} from '@/components/img/placeHolder/getBase64'

import HomeDescription from './_com/dest/description'
import HomeHeroImg from './_com/heroImg/hero'
import HomeRotateSection from './_com/RotateSection/RotateSection'

async function HomePage() {
  const hero = await getPublicBase64('/mainHero/output.jpg')

  return (
    <>
      <HomeHeroImg
        video={[
          {src: '/mainHero/output.webm', type: 'video/webm'},
          {src: '/mainHero/output.mp4', type: 'video/mp4'},
        ]}
        placeHolder={{...hero, alt: 'HeroImg'}}
      />
      <HomeDescription />
      <HomeRotateSection />
    </>
  )
}

export default HomePage
