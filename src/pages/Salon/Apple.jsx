import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"


const Apple = () => {
  return (
    <>  
    <Navbar />
    <div>
         <img src="/SalonPhotos/Apple(The Original).webp" className="col-12 rounded-4 w-full h-[380px] object-cover"/>

         <div className="sm:px-[120px] px-[10px] leading-[30px] ">
              <h1 className="font-medium text-[50px] py-[20px]">Apple</h1>
              <p className="text-[14px] my-[20px]">Apple Unisex Salon was incepted with a dream to not just change people’s appearances, but also to infuse their life with positivity and confidence.</p>
              <p className="text-[14px] my-[20px]">They offer premium quality hair and beauty services that enhance and enrich personalities.</p>
              <p className="text-[14px] my-[20px]">All their staff is highly trained and are professionals with years of experience who bring you the best style tips, recommendations, and services to ensure that your experience at Apple is truly relaxing, pampering, and fulfilling</p>
               </div>

          <div className="sm:px-[120px] px-[10px] my-[20px]">
            <h1 className="font-medium text-[20px] py-[20px]">Apple Branches</h1>
             <div className="flex sm:flex-row flex-col gap-[30px]">
                <div className="border border-[#B9B9B9] sm:w-[400px] rounded px-[50px] py-[20px]  shadow-sm "><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Kemps Corner, Mumbai</span></div>
                <div className="border border-[#B9B9B9] sm:w-[400px] rounded px-[50px] py-[20px]  shadow-sm"><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Kemps Corner, Mumbai</span></div>
                <div className="border border-[#B9B9B9] sm:w-[400px] rounded px-[50px] py-[20px]  shadow-sm"><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Kemps Corner, Mumbai</span></div>
             </div>
             <div className="flex sm:flex-row flex-col gap-[30px] mt-[20px]">
                <div className="border border-[#B9B9B9] w-[400px] rounded px-[50px] py-[20px]  shadow-sm"><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Kemps Corner, Mumbai</span></div>
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

export default Apple