import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const Kprive = () => {
  return (
    <>  
    <Navbar />
    <div>
         <img src="/SalonPhotos/juice,ghatkopar.webp" className="col-12 rounded-4 w-full h-[380px] object-cover"/>

         <div className="px-[120px] leading-[30px] ">
              <h1 className="font-medium text-[50px] py-[20px]">KPrive</h1>
              <p className="text-[16px] my-[10px]">Kprive Salon is a professional beauty salon, we provide our clients with the latest beauty treatments and services to keep them looking their best. Team of highly skilled professionals of Kprive Salon is passionate about providing the best possible service to our clients. We are committed to delivering the very best service to all of our clients and believe that everyone deserves to feel beautiful. We are proud of the quality of service that we provide and look forward to welcoming you to the Kprive salon.</p>
            </div>

            <div className="sm:px-[120px] px-[10px] my-[20px]">
            <h1 className="font-medium text-[20px] py-[20px]">Kprive Branches</h1>
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

export default Kprive