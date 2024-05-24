import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const TipAndToe = () => {
  return (
    <>  
    <Navbar />
    <div>
         <img src="/SalonPhotos/timntoe.webp" className="col-12 rounded-4 w-full h-[380px] object-cover"/>

         <div className="sm:px-[120px] px-[10px] leading-[30px] ">
              <h1 className="font-semibold text-[50px] py-[20px]">Tip & Toe</h1>
         
              <p className="text-[16px] my-[20px]">Tip & Toe Nail Salon is all about the experience. A place to feel welcomed and special. A place to relax and feel a sense of indulgence. In other words, a place to celebrate YOU!</p>
              <p className="text-[16px] my-[20px]">Since opening our doors in 2011, Tip and Toe Nail Salon & Spa has earned a reputation for top-of-the-line services, unparalleled customer service, and a unique, welcoming atmosphere. Recently hailed as one of Mumbai’s best in the business in Nail-a-Thon, we have been blessed to be Rated #1 in India, and we continue to garner attention and praise from satisfied guests. Most preferred by the B-TOWN Celebrities & fashionistas, Tip and Toe is frequented by most of the A-listers.</p>
          </div>

          <div className="sm:px-[120px] px-[10px] my-[20px]">
            <h1 className="font-medium text-[20px] py-[20px]">Tip & Toe Branches</h1>
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

export default TipAndToe


