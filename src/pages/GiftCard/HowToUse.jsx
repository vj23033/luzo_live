
const HowToUse = () => {
  return (
    <div className="bg-[#E5E7EB] py-[30px] px-[10px] sm:px-[120px] mb-[20px]">

        <h1 className="text-center font-medium text-[#051036] text-[24px] leading-[32px]">How To Use ?</h1>
          
       <div className="flex sm:flex-row flex-col justify-between" >
                 <div className="flex flex-col sm:gap-[50px] items-center">
                    <img src="/icons/giftcard.png" alt="img" height='140' width='140'/>
                    <p className="text-center max-w-[80%]">Buy a gift card of any amount and share with your loved one.</p>
                 </div>

                 <div className="flex flex-col sm:gap-[50px] items-center">
                    <img src="/icons/pin.png" alt="img" height='140' width='140'/>
                    <p className="text-center  max-w-[80%]">The receiver will get a code to claim the gift card</p>
                 </div>

                
                 <div className="flex flex-col sm:gap-[50px] items-center">
                    <img src="/img/2.svg" alt="img" height='140' width='140'/>
                    <p className="text-center max-w-[80%]">Buy a gift card of any amount and share with your loved one.</p>
                 </div>

                

                


       </div>


    </div>
  )
}

export default HowToUse