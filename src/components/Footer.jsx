
const Footer = () => {
  return (
    <div className="sm:px-[120px] px-[10px] gap-[30px] pb-[100px] flex flex-col sm:flex-row justify-between bg-blue-100 bg-opacity-5 py-[20px] border-t ">
       <ul className="flex flex-col gap-[20px]">
         <h1 className="text-[16px] font-semibold ">Pages</h1>
         <li>About us</li>
         <li>Get in Touch</li>
         <li>Privacy and Policy</li>
         <li>Terms of services</li>
       </ul>
       <ul className="flex flex-col gap-[20px]">
         <h1 className="text-[16px] font-semibold">Social</h1>
         <li className="flex items-center gap-[10px]"><img  src="/img/instagram.svg" width='25' alt="instagram"/>Instagram</li>
         <li className="flex items-center gap-[10px]"><img  src="/img/linkedin.svg" width='25' alt="instagram"/>linkedin</li>
         <li className="flex items-center gap-[10px]"><img  src="/img/facebook.svg" width='25' alt="instagram"/>Facebook</li>
         <li className="flex items-center gap-[10px]"><img  src="/img/youtube.svg" width='25' alt="instagram"/>Youtube</li>
         <li className="flex items-center gap-[10px]"><img  src="/img/twitter.svg" width='25' alt="instagram"/>Twitter</li>
        
        

        

       </ul>
       <ul className="flex flex-col gap-[20px]">
         <h1 className="text-[16px] font-semibold">Contact us</h1>
         <li>WhatsApp</li>
         <li>Email</li>
         <div className="flex flex-col gap-[10px]">
              <img src="/img/appstore.webp" alt="img" width='150'/>
              <img src="/img/playstore.webp" alt="img" width='150'/>
         </div>
       </ul>
    </div>
  )
}

export default Footer