import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const FashionTv = () => {
  return (
    <>  
    <Navbar />
    <div>
         <img src="/SalonPhotos/FTV.webp" className="col-12 rounded-4 w-full h-[380px] object-cover"/>

         <div className="px-[120px] leading-[30px] ">
              <h1 className="font-medium text-[50px] py-[20px]">Fashion TV</h1>
              <p className="text-[14px] my-[20px]">It started as a way for people from the fashion industry to hang out, this led Michel Adam to come up with a channel dedicated 24*7 to fashion and this led to the birth of Fashion. With 20+ years in India and presence in more than 100 countries today, FashionTV is loved globally.</p>
            </div>

            <div className="sm:px-[120px] px-[10px] my-[20px]">
            <h1 className="font-medium text-[20px] py-[20px]">Apple Branches</h1>
             <div className="flex sm:flex-row flex-col gap-[30px]">
                <div className="border sm:w-[400px] border-[#B9B9B9] rounded px-[50px] py-[20px]  shadow-sm"><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Kemps Corner, Mumbai</span></div>
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

export default FashionTv