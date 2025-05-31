import Hello from '../Componentes/Hello'
import Mainfood from '../Componentes/MainFood'
import BatmanHeroSection from '../Componentes/HeroSection'
import Footer from '../Componentes/Footer'

function Home() {
  return (
    <div>
      <Hello/>
      <BatmanHeroSection/>
      <Mainfood/>
    </div>
  )
}

export default Home
