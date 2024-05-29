import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import BuyGiftcard from "./BuyGiftcard"
import Carousel from "./Carousel"
import HowToUse from "./HowToUse"

const index = () => {
  return (
    <div>
        <Navbar />
        <Carousel />
        <BuyGiftcard />
        <HowToUse />
        <Footer/>
    </div>
  )
}

export default index