
const HowToUse = () => {
  return (
    <div className="bg-[#ECF4FF] sm:mx-[10px] rounded-md py-[30px] px-[10px] sm:px-[100px] mb-[20px]">

        <h1 className="text-center font-bold text-[#051036] text-[24px] leading-[32px]">How To use ?</h1>
          
       <div className="flex sm:flex-row flex-col justify-between" >
                 <div className="flex flex-col sm:gap-[30px] items-center">
                    <img src="/icons/giftcard.png" alt="img" height='140' width='140'/>
                    <p className="text-center max-w-[80%]">Buy a gift card of any amount and share with your loved one.</p>
                 </div>

                 <div className="flex flex-col sm:gap-[30px] items-center">
                    <img src="/icons/pin.png" alt="img" height='140' width='140'/>
                    <p className="text-center  max-w-[80%]">The receiver will get a code to claim the gift card</p>
                 </div>

                
                 <div className="flex flex-col sm:gap-[30px] items-center">
                    <img src="/img/2.svg" alt="img" height='140' width='140'/>
                    <p className="text-center max-w-[80%]">Buy a gift card of any amount and share with your loved one.</p>
                 </div>

                

                


       </div>


    </div>
  )
}

export default HowToUse