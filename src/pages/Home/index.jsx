
import SalonCrousal from './SalonCrousal'
import PopularSalonsCrousal from './PopularSalonsCrousal'
import Footer from '../../components/Footer'
import Discount from './Discount'
import Trust from './Trust'
import Testimonial from './Testimonial'
import Navbar from '../../components/Navbar'
import HeaderCrousal from './HeaderCrousal'
import Banner from './Banner'
import HowToUse from './HowToUse'

const home = () => {
  return (
    <div >
      <Navbar />
        <HeaderCrousal />
        <SalonCrousal />
        <Discount />
        <HowToUse />
        <PopularSalonsCrousal />
        <Trust />
        <Testimonial />
       <Banner />
        <Footer />
    </div>
  )
}

export default home