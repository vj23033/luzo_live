import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const ToniAndGuy = () => {
  return (
    <>  
    <Navbar />
    <div>
         <img src="/SalonPhotos/toninguy.webp" className="col-12 rounded-4 w-full h-[40vh] object-cover"/>

         <div className="px-[120px] leading-[30px] ">
              <h1 className="font-semibold text-[50px] py-[20px]">Toni & Guy</h1>
              <p className="text-[16px] mb-[10px]">What makes TONI & GUY unique is their iconic brand with over five decades of experience. From the South of Italy to the South of London, North America, Asia and across the globe, Toni & Guy has become synonymous with quality hairdressing and innovation within the beauty industry.</p>
          </div>

          <div className="sm:px-[120px] px-[10px] my-[20px]">
            <h1 className="font-medium text-[20px]">Apple Branches</h1>
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

export default ToniAndGuy