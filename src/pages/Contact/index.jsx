
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Contact from "./Contact"
import ContactUsForm from "./ContactUsForm"

const index = () => {
  return (
    <div>
        <Navbar />
        {/* <Contact /> */}
        <ContactUsForm />

        <Footer />
    </div>
  )
}

export default index