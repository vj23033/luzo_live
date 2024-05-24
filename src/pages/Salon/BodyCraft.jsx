import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
const BodyCraft = () => {
  return (
    <>  
    <Navbar />
    <div>
         <img src="/SalonPhotos/juice,ghatkopar.webp" className="col-12 rounded-4 w-full h-[380px] object-cover"/>

         <div className="px-[120px] leading-[30px] ">
              <h1 className="font-medium text-[50px] py-[20px]">BodyCraft</h1>
              <p className="text-[16px] my-[20px]">Bodycraft understands the value of personal grooming and keeping up with the latest skin, hair and spa trends for a relaxed body.</p>
              <p className="text-[16px] my-[20px]">Get professional hair, skin and nail salon services by the best dermatologists, stylists and technician. They offer the best-in-class hair salon services like hair spa, haircut, hair colour and more using top quality hair products like System Professional and Sebastian from Wella.</p>
              <p className="text-[16px] my-[20px]">Let their salon experts take care of your skin for services like facial, waxing, clean up, bleaching and more, with international brands like Dermalogica, Ainhoa and Bodycraft’s skincare range, designed for the needs of Indian skin.</p>
          </div>

          <div className="sm:px-[120px] px-[10px] my-[20px]">
            <h1 className="font-medium text-[20px] py-[20px]">BodyCraft Branches</h1>
             <div className="flex sm:flex-row flex-col gap-[30px]">
                <div className="border rounded px-[50px] py-[20px]  shadow-sm "><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Kemps Corner, Mumbai</span></div>
              </div>
            
          </div>

    </div>
    <div className="flex flex-row gap-[10px] items-center justify-center mb-[60px] py-[15px]">
      <img src="/img/appstore.webp" alt="img" width='150'  />
      <img src="/img/playstore.webp" alt="img" width='150'  />

    </div>
    <Footer />
    </>
  )
}

export default BodyCraft