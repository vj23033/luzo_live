import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const ContactUsForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleSendMessage = async(data) => {
        try {
            const res = await axios({
                method : "post",
                url : "http://localhost:8000/api/contact",
                data : { ...data, email : "xyz@gmail.com" }
            })
            console.log(res)
            alert("Message sent")
        } catch (error) {
            console.log(error);
            alert("Could not send message")
        }
    }
    return (
        <div className='sm:px-[120px] px-[10px] py-[40px] mt-[100px]'>

      
      <h1 className='sm:text-[40px] text-[20px] font-medium'>Contact Us</h1>
        <div className=' flex sm:flex-row flex-col gap-[20px] items-center'>
            <form className="bg-[white]  sm:px-[40px] px-[10px] py-[40px] shadow-md rounded-md w-full  " onSubmit={handleSubmit(handleSendMessage)}>
            <p className="text-[20px] font-normal mb-[20px]">Send a message</p>
            <div className="flex flex-col gap-[20px]">
                <input placeholder="Full Name" className="border rounded-[5px] px-[10px]  pb-[20px] " {...register("name", {required : "Name is required"})} />
                {errors.name && <span className='text-red-500'>{errors.name.message}</span> }

                <input placeholder="Your Number" className="border rounded-[5px] px-[10px]  pb-[20px] " {...register("number", {required : "Number is required", minLength : {value : 10, message : "Enter a valid phone number"}, maxLength :{value : 11, message : "Enter a valid phone number"} })} />
                {errors.number && <span className='text-red-500'>{errors.number.message}</span> }

                <input placeholder="Your Message" className="border rounded-[5px] px-[10px]  pb-[100px]  " {...register("message", {required : "Message is required"})} />
                {errors.message && <span className='text-red-500'>{errors.message.message}</span> }

            </div>

            <button className="bg-[#3554D1] mt-[10px] text-[white] font-bold px-[20px] py-[20px] rounded" type='submit'>Send a Message</button>

        </form>
        
         <div>
             <h1 className='text-[40px] font-medium'>Get In Touch</h1>   
            <div className="flex flex-col sm:flex-row flex-col gap-[60px] ">
                
                <div className="flex flex-col gap-[10px]">
                    <p className="text-[14px] text-[#697488] leading-[27px]">WhatsApp</p>
                    <h1 className="text-[18px]">7738182493</h1>
                </div>

                <div className="flex flex-col gap-[10px]"> 
                    <p className="text-[14px] text-[#697488] leading-[27px]">Need support?</p>
                    <h1 className="text-[18px]"> info@luzo.app</h1>
                    <p className="text-[18px]">founders@luzo.app</p>
                </div>
                <div className="flex flex-col gap-[10px] sm:items-center">
                    <p className="text-[14px] text-[#697488] ">Follow us on social media</p>
                    <h1 className="text-[18px]">7738182493</h1>
                </div>

            </div>
         </div>
  </div>
  </div>
    )
}

export default ContactUsForm