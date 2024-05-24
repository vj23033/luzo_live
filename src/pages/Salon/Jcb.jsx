import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"


const Jcb = () => {
  return (
    <>  
    <Navbar />
    <div>
         <img src="/SalonPhotos/JCB.webp" className="col-12 rounded-4 w-full h-[380px] object-cover"/>

         <div className="px-[120px] leading-[30px] ">
      
              <h1 className="font-medium text-[50px] py-[20px]">JCB (Jean-Claude Biguine)</h1>
              <p className="text-[16px] my-[20px]">Biguine India is a one-stop destination for all your grooming needs. Founded in 1982, Jean-Claude Biguine is one of the fastest-growing salon chains, to have successfully established over 400 salons across 20 countries. d Aligned with the global brand in both vision and quality, JCB India is the first-ever premium hair and beauty salon underlined with French Finesse.</p>   
              <p className="text-[16px] my-[20px]">Jean-Claude Biguine is a ‘Maison de Beauté’ that takes pride in meeting your beauty needs with consistency and customization. Their top French experts work closely with trained Indian beauty professionals, to discover trends that perfectly complement Indian patrons.</p>
              <p className="text-[16px] my-[20px]">Instilled with a passion to deliver an unparalleled French experience in beauty, Jean-Claude Biguine is determined to curate an exclusive repertoire of hair and beauty services with cutting-edge technology and creative excellence.</p>
          </div>

          <div className="sm:px-[120px] px-[10px] my-[20px]">
            <h1 className="font-medium text-[20px] py-[20px]">Apple Branches</h1>
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

export default Jcb


