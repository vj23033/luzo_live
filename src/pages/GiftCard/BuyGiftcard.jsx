import axios from "axios";
import { useForm } from "react-hook-form"
const BuyGiftcard = () => {
    const { register, handleSubmit, formState : { errors } } = useForm()

    const handleCreatePayment = async (data) => {
        try {
            // console.log(data);
            const res = await axios({
                method : "post",
                url : "http://localhost:8000/api/razorpay/createpayment",
                data
            })
            console.log(res);
            alert("Payment Created")
        } catch (error) {
            console.log(error)
            alert("Something went wrong")
        }   
    }

  return (
    <div className="sm:px-[184px] px-[10px] py-[60px]">
        <h1 className="text-[28px] font-medium leading-[35px] text-[#404040]">Buy Gift Card</h1>
        <p className="text-[#051036] leading-[24px] font-medium text-[16px] mt-[10px] ">The gift card is valid for 1 year and can be used to pay at 400+ salons, spas & dermatologists across Mumbai, Pune & Bengaluru via the LUZO app.</p>
        <div className="flex flex-row gap-[20px] cursor-pointer py-[20px]">
            <h1 className="text-[20px] text-[#60A5FA] leading-[24px]">Enter Details</h1>
            <h1 className="text-[20px] leading-[24px]">Payment</h1>
        </div>
            <hr className="border border-b border-[#60A5FA] w-full " />

        <form onSubmit={handleSubmit(handleCreatePayment)} className="flex flex-col sm:flex-row justify-between px-[20px] sm:px-[50px]">
            <div className="flex flex-col">
                <div>
                    <h1 className="font-medium my-[20px]">Your Name</h1>
                    <input type="text" placeholder="Enter Name" className="border  sm:w-[442px] w-[295px] px-[10px] rounded-[10px] py-[10px]" {...register("name", { required : "Please enter your name" })} />
                    {errors.name && <span className="text-red-500">{errors.name.message}</span> }
                </div>
                <div>
                    <h1 className="font-medium my-[20px]">Enter Your Number</h1>
                    <input type="text" min="0" placeholder="Enter Number" className="border w-[295px] sm:w-[442px] px-[10px] rounded-[10px] py-[10px]" {...register("number", { required : "Please enter your number", minLength : { value : 10, message : "Enter a valid number" }, maxLength : { value : 10, message : "Enter a valid number" } })} />
                    {errors.number && <span className="text-red-500">{errors.number.message}</span> }
                </div>
                <div>
                    <h1 className="font-medium my-[20px]">Enter Gift Card Amount</h1>
                    <input type="number" placeholder="Enter amount" className="border  w-[295px] sm:w-[442px] px-[10px] rounded-[10px] py-[10px]" {...register("amount", { required : "Value between 250 and 25000", min : { value : 250, message : "Value between 250 and 25000" }, max : { value : 25000, message : "Value between 250 and 25000" } })} />
                    {errors.amount && <span className="text-red-500">{errors.amount.message}</span> }
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
                    <input type="textarea" placeholder="Prompt for yourself" className="border w-[295px]  sm:w-[442px] px-[10px] rounded-[10px] pb-[80px]" {...register("description")} />
                </div>
                
                <button className="border mt-[10px]  bg-[#42a5f5] text-[white] rounded-[10px] px-[20px] py-[10px]">Add receivers Detail</button>
            </div>
 
        </form>  

    </div>
  )
}

export default BuyGiftcard