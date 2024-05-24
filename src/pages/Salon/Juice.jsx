import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"


const Juice = () => {
  return (
    <>  
    <Navbar />
    <div>
         <img src="/SalonPhotos/juice,ghatkopar.webp" className="col-12 rounded-4 w-full h-[380px] object-cover"/>

         <div className="px-[100px] leading-[30px] ">
              <h1 className="font-medium text-[50px] py-[20px]">Juice</h1>
              <p className="text-[16px] sm:leading-[30px] my-[20px]">JUICE is one of India’s trendiest salon chains with 30+ branches spread internationally. In India, Juice has a widespread presence across metros and mini-metros catering to the beauty needs of ardent fashion followers, trendsetters and celebrities.</p>
              <p className="text-[16px] sm:leading-[30px] my-[20px]">This leading salon chain aims to bring the latest fashion trends and cutting-edge technology to their customers in a comfortable and sleek environment, using the best international products in the market. Hair stylists at JUICE believe that perfect beauty is different for every person which is why they do not mass produce but tailor-make a look, keeping in mind an individual’s features when conceiving their cut and colour.</p>
              <p className="text-[16px] sm:leading-[30px] my-[20px]">Their fundamental belief is that each customer is special and they work hard to make each one feel that before they walk out of their salon.</p>
          </div>

          <div className="sm:px-[100px] px-[10px] my-[20px]">
            <h1 className="font-medium text-[20px]">Juice Branches</h1>
             <div className="flex sm:flex-row flex-col gap-[30px]">
                <div className="border border-solid rounded px-[30px] py-[20px]  shadow-sm "><span className="flex gap-[30px] "><img src="/img/pin.svg" height='20' width='20'/>Kemps Corner, Mumbai</span></div>
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

export default Juice