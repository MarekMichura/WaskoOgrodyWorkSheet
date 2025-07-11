import HomeConstructions from './_com/construction/homeConstructions'
import HomeContact from './_com/contact/contact'
import HomeFooter from './_com/footer/homeFooter'
import HomeHero from './_com/hero/homeHero'
import HomeMap from './_com/map/homeMap'
import HomeSect from './_com/sect/homeSect'

function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeSect />
      <HomeMap />
      <HomeConstructions />
      <HomeContact />
      <HomeFooter />
    </>
  )
}

export default HomePage
