import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const TheFirst = () => {
  return (
    <>  
    <Navbar />
    <div>
         <img src="/SalonPhotos/TheFirst.webp" className="col-12 rounded-4 w-full h-[40vh] object-cover"/>

         <div className="px-[120px] leading-[30px] ">
              <h1 className="font-semibold text-[50px] py-[20px]">Juice</h1>
              <p className="text-[16px] mb-[10px]" >“The First” is an intimate salon in Pune that is favoured by a discerning clientele and fashion insiders.</p>             
              <p className="text-[16px] mb-[10px]">It is meant to be a discreet space that offers beauty editors superior services consistently with a happy and relentless attitude while standing within an affordable budget.</p>
              <p className="text-[16px] mb-[10px]">As a new lifestyle concept, what they offer you is not just a luxury salon but a post-work retreat, a place to relax and what is more, the coffee here is to die for.</p>
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

export default TheFirst