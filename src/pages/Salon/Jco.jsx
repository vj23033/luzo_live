import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const Jco = () => {
  return (
    <>  
    <Navbar />
    <div>
         <img src="/SalonPhotos/JCO.webp" className="col-12 rounded-4 w-full h-[380px] object-cover"/>

         <div className="px-[120px] leading-[30px] ">
              <h1 className="font-medium text-[50px] py-[20px]">JCO (Jean Claude Olivier)</h1>
              <p className="text-[14px] my-[20px]">Spanish luxury salon Jean Claude Olivier, is present in 07 Countries which are namely :- Spain , Portugal , Andora, United States Of America, Puerto Rico, Korea and Mexico (with more than 50 open hairdressing salons around the World). Their main asset is a prestigious cadre of professionals specialised in aesthetic treatments and hairdressers. All of them have solid academic training and extensive experience.</p>
          </div>

          <div className="px-[120px] my-[20px]">
            <h1 className="font-medium text-[20px] py-[20px]">JCO (Jean Claude Olivier) Branches</h1>
             <div className="flex flex-row gap-[30px]">
                <div className="border rounded px-[50px] sm:w-[400px] border-[#B9B9B9] py-[20px]  w-[400px] shadow-sm "><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Kemps Corner, Mumbai</span></div>
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

export default Jco