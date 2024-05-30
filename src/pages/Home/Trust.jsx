
const Trust = () => {
  return (
    <div className="sm:px-[40px] px-[10px] max-w-[1400px] mx-auto">
        <h1 className="text-[30px] font-bold">Why trust LUZO?</h1>
        
        <div className="items-center flex justify-center flex-wrap gap-[40px] flex-row sm:gap-[200px] py-[40px]">
                
            <div className="flex flex-col  items-center">
                <img src="/icons/schedule.svg" width="40px" alt="img" />
                <h1 className="text-[#3554D1] text-[30px] leading-[39px] font-medium">50,000+</h1>
                <p className="text-[#707070] font-medium">Appointments</p>
            </div>
            <div className="flex flex-col  items-center">
                <img src="/icons/satisfaction.svg" width="40px" alt="img" />
                <h1 className="text-[#3554D1] text-[30px] leading-[39px] font-medium">27,000+</h1>
                <p className="text-[#707070] text-[14px] font-medium">Happy Customers</p>
            </div>
            <div className="flex flex-col  items-center">
                <img src="/icons/hair-salon.svg" width="40px" alt="img" />
                <h1 className="text-[#3554D1] text-[30px] leading-[39px] font-medium">200+</h1>
                <p className="text-[#707070] text-[14px] font-medium">Salons and Spas</p>
            </div>
            <div className="flex flex-col  items-center">
                <img src="/icons/get-money.svg" width="40px" alt="img" />
                <h1 className="text-[#3554D1] text-[30px] leading-[39px] font-medium">34,00,000+</h1>
                <p className="text-[#707070]  text-[14px] font-medium">Customer Savings</p>
            </div> 
        </div>
        
    </div>
  )
}

export default Trust