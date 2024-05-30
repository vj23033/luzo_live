import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"



const Tatvva = () => {
  return (
    <>  
    <Navbar />
    <div>
         <img src="/SalonPhotos/TattvaSpa.webp" className="col-12 rounded-4 w-full h-[380px] object-cover"/>

         <div className="px-[120px]">
              <h1 className="font-medium text-[50px] py-[20px]">Tattva Spa</h1>
      
              <p className="text-[14px] my-[20px]">Prithivi, Akash, Jal, Agni, Vayu (Earth, Sky, Water, Fire, Air) are the five Tattva’s or elements that the universe and the human body is composed of.</p>
              <p className="text-[14px] my-[20px]">Ancient eastern philosophy holds that the balance of these five Tattvas or elements in entire universe, including the human body, is the essence of wellness.</p>
              <p className="text-[14px] my-[20px]">Balance. That is what Tattva Spa aims to strive for your mind, body and soul.</p>
              
          </div>

          <div className="sm:px-[120px] px-[10px] my-[20px]">
            <h1 className="font-medium text-[20px] py-[20px]">Tattva Branches</h1>
             <div className="flex sm:flex-row flex-col gap-[30px]">
                <div className="border sm:w-[400px] border-[#B9B9B9] rounded px-[50px] py-[20px]  shadow-sm "><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>The Pride Hotel, Shivajinagar, Pune</span></div>
                <div className="border sm:w-[400px] border-[#B9B9B9] rounded px-[50px] py-[20px]  shadow-sm"><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Lemon Tree Premier, City Centre, Pune</span></div>
                <div className="border sm:w-[400px] border-[#B9B9B9] rounded px-[50px] py-[20px]  shadow-sm"><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Four Points by Sheraton, Viman Nagar, Pune</span></div>
             </div>
             <div className="flex sm:flex-row flex-col gap-[30px] mt-[20px]">
                <div className="border sm:w-[400px] border-[#B9B9B9] rounded px-[50px] py-[20px]  shadow-sm"><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Courtyard by Marriott, Hinjewadi, Pune</span></div>
                <div className="border sm:w-[400px] border-[#B9B9B9] rounded px-[50px] py-[20px]  shadow-sm"><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Radisson Blu, Kharadi, Pune</span></div>
                <div className="border sm:w-[400px] border-[#B9B9B9] rounded px-[50px] py-[20px]  shadow-sm"><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Double Tree by Hilton, Chinchwad, Pune</span></div>
             </div>
             <div className="flex sm:flex-row flex-col gap-[30px] mt-[20px]">
                <div className="border sm:w-[400px] border-[#B9B9B9] rounded px-[50px] py-[20px]  shadow-sm"><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Radisson, Lonavala, Mumbai</span></div>
                <div className="border sm:w-[400px] border-[#B9B9B9] rounded px-[50px] py-[20px]  shadow-sm"><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Novotel Imagica, Khopoli, Mumbai</span></div>
                <div className="border sm:w-[400px] border-[#B9B9B9] rounded px-[50px] py-[20px]  shadow-sm"><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Radisson Blu, Karjat, Mumbai</span></div>
             </div>
             <div className="flex sm:flex-row flex-col gap-[30px] mt-[20px]">
                <div className="border sm:w-[400px] border-[#B9B9B9] rounded px-[50px] py-[20px]  shadow-sm"><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Novotel Hotel, Andheri (East), Mumbai</span></div>
                <div className="border sm:w-[400px] border-[#B9B9B9] rounded px-[50px] py-[20px]  shadow-sm"><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Holiday Inn, Andheri (East), Mumbai</span></div>
                <div className="border sm:w-[400px] border-[#B9B9B9] rounded px-[50px] py-[20px]  shadow-sm"><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Radisson Blu, Andheri (East), Mumbai</span></div>
             </div>
             <div className="flex sm:flex-row flex-col gap-[30px] mt-[20px]">
                <div className="border sm:w-[400px] border-[#B9B9B9] rounded px-[50px] py-[20px]  shadow-sm"><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Radisson Hotel, Goregaon (West), Mumbai</span></div>
                <div className="border sm:w-[400px] border-[#B9B9B9] rounded px-[50px] py-[20px]  shadow-sm"><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Marriott Executive Apartments, Navi Mumbai, Mumbai</span></div>
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

export default Tatvva