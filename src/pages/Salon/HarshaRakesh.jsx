import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const HarshaRakesh = () => {
  return (
    <>  
    <Navbar />
    <div>
         <img src="/SalonPhotos/HarshaRakesh.webp" className="col-12 rounded-4 w-full h-[40vh] object-cover"/>

         <div className="px-[120px] leading-[30px] ">
              <h1 className="font-semibold text-[50px] py-[20px]">Harsha & Rakesh</h1>
              <p className="text-[16px] mb-[10px]">Harsha & Rakesh is a professional luxury salon chain with expertise in hair-styling, skin, bridal makeup, tattoo, nail art & mehendi.</p>
              <p className="text-[16px] mb-[10px]">They are a Kerastase certified salon, one of the things they take pride in and being one of the very few salons in India to have been certified by Kerastase Paris, they ensure to live up to the international standards of professional & luxury hair & beauty care.</p>
              <p className="text-[16px] mb-[10px]">Whether it’s edgy and modern or sleek and elegant, they strive to create the perfect look for each individual client. They’re also determined to provide each and every client with the highest degree of customer service in a friendly and professional setting.</p>
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
                <div className="border rounded px-[50px] py-[20px]  shadow-sm"><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Kemps Corner, Mumbai</span></div>
             </div>
             <div className="flex sm:flex-row flex-col gap-[30px] mt-[20px]">
                <div className="border rounded px-[50px] py-[20px]  shadow-sm"><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Kemps Corner, Mumbai</span></div>
                <div className="border rounded px-[50px] py-[20px]  shadow-sm"><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Kemps Corner, Mumbai</span></div>
                <div className="border rounded px-[50px] py-[20px]  shadow-sm"><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Kemps Corner, Mumbai</span></div>
             </div>
             <div className="flex sm:flex-row flex-col gap-[30px] mt-[20px]">
                <div className="border rounded px-[50px] py-[20px]  shadow-sm"><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Kemps Corner, Mumbai</span></div>
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

export default HarshaRakesh