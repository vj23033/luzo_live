import Navbar from "../../components/Navbar"
import Footer from '../../components/Footer'
import Hero from "./Hero"
import AboutLuzo from "./AboutLuzo"


const index = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <AboutLuzo />
        <Footer />
    </div>
  )
}

export default index