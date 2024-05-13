
const BuyGiftcard = () => {
  return (
    <div className="sm:px-[184px] px-[10px] py-[60px]">
        <h1 className="text-[28px] font-medium leading-[35px] text-[#404040]">Buy Gift Card</h1>
        <p className="text-[#051036] leading-[24px] font-medium text-[16px] mt-[10px] ">The gift card is valid for 1 year and can be used to pay at 400+ salons, spas & dermatologists across Mumbai, Pune & Bengaluru via the LUZO app.</p>
        <div className="flex flex-row gap-[20px] cursor-pointer py-[20px]">
            <h1 className="text-[20px] text-[#60A5FA] leading-[24px]">Enter Details</h1>
            <h1 className="text-[20px] leading-[24px]">Payment</h1>
        </div>
            <hr className="border border-b border-[#60A5FA] w-full " />

        <div className="flex flex-col sm:flex-row justify-between px-[20px] sm:px-[50px]">
            <div className="flex flex-col">
                <div>
                    <h1 className="font-medium my-[20px]">Your Name</h1>
                    <input type="text" placeholder="Enter Name" className="border  sm:w-[442px] w-[295px] px-[10px] rounded-[10px] py-[10px]" />
                </div>
                <div>
                    <h1 className="font-medium my-[20px]">Enter Your Number</h1>
                    <input type="number" min="0" placeholder="Enter Number" className="border w-[295px] sm:w-[442px] px-[10px] rounded-[10px] py-[10px]" />
                </div>
                <div>
                    <h1 className="font-medium my-[20px]">Enter Gift Card Amount</h1>
                    <input type="number" placeholder="Enter amount" className="border  w-[295px] sm:w-[442px] px-[10px] rounded-[10px] py-[10px]" />
                    <div className="mt-[10px] flex flex-row gap-[10px]">
                        <p className="border text-center font-normal text-[16px]  leading-[24px] rounded-[10px] py-[6px] w-[66px]">₹1000</p>
                        <p className="border text-center font-normal text-[16px]  leading-[24px] rounded-[10px] py-[6px] w-[66px]">₹2000</p>
                        <p className="border text-center font-normal text-[16px]  leading-[24px] rounded-[10px] py-[6px] w-[66px]">₹5000</p>
                        <p className="border text-center font-normal text-[16px]  leading-[24px] rounded-[10px] py-[6px] w-[66px]">₹10000</p>
                    </div>
                </div>
            </div>

            <div>
                 <div>
                    <h1 className="font-medium my-[20px]">Message for your loved one! (Optional)</h1>
                    <input type="textarea" placeholder="Prompt for yourself" className="border w-[295px]  sm:w-[442px] px-[10px] rounded-[10px] pb-[80px]" />
                </div>
                
                <button className="border mt-[10px]  bg-[#42a5f5] text-[white] rounded-[10px] px-[20px] py-[10px]">Add receivers Detail</button>
            </div>
 
        </div>  

    </div>
  )
}

export default BuyGiftcard