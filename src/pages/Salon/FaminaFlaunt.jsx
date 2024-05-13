import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const FaminaFlaunt = () => {
  return (
    <>  
    <Navbar />
    <div>
         <img src="/SalonPhotos/feminaflaunt.webp" className="col-12 rounded-4 w-full h-[40vh] object-cover"/>

         <div className="px-[120px] leading-[30px] ">
              <h1 className="font-semibold text-[50px] py-[20px]">Femina Flaunt</h1>
              <p className="text-[16px] mb-[10px]">Femina, a leading women's lifestyle magazine for over 60 years, has been capturing the essence of urban Indian women and celebrating Fashion, Beauty, and Lifestyle like no other. From showcasing the beauty icons and their styles over the years, the house of Femina now brings those Global Beauty trends, right next door with the launch of Femina FLAUNT Studio Salon.</p>
            </div>

            <div className="sm:px-[120px] px-[10px] my-[20px]">
            <h1 className="font-medium text-[20px]">Apple Branches</h1>
             <div className="flex sm:flex-row flex-col gap-[30px]">
                <div className="border rounded px-[50px] py-[20px]  shadow-sm "><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Kemps Corner, Mumbai</span></div>
                <div className="border rounded px-[50px] py-[20px]  shadow-sm"><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Kemps Corner, Mumbai</span></div>
                <div className="border rounded px-[50px] py-[20px]  shadow-sm"><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Kemps Corner, Mumbai</span></div>
             </div>
             <div className="flex sm:flex-row flex-col gap-[30px] mt-[20px]">
                <div className="border rounded px-[50px] py-[20px]  shadow-sm"><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Kemps Corner, Mumbai</span></div>
                <div className="border rounded px-[50px] py-[20px]  shadow-sm"><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Kemps Corner, Mumbai</span></div>
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

export default FaminaFlaunt



