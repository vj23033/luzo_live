import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { ArrowUpRight } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Twitter } from 'lucide-react';

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSendMessage = async (data) => {
    try {
      const res = await axios({
        method: "post",
        url: "http://localhost:8000/api/contact",
        data: { ...data, email: "xyz@gmail.com" },
      });
      console.log(res);
      alert("Message sent");
    } catch (error) {
      console.log(error);
      alert("Could not send message");
    }
  };
  return (
    <div className="sm:px-[100px] px-[10px]   mt-[100px]">
      <h1 className="text-[40px] font-medium">Contact Us</h1>

      <div className="flex sm:flex-row flex-col sm:py-[40px] gap-[30px] items-center">
        <form
          className="bg-[white] sm:w-[636px] px-[40px] py-[40px] rounded-md  shadow"
          onSubmit={handleSubmit(handleSendMessage)}
        >
          <p className="text-[20px] font-normal mb-[20px]">Send a message</p>
          <div className="flex flex-col gap-[20px]">
            <input
              placeholder="Full Name"
              className="border rounded-[5px] px-[10px] pb-[20px]"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}

            <input
              placeholder="Your Number"
              className="border rounded-[5px] px-[10px] pb-[20px] "
              {...register("number", {
                required: "Number is required",
                minLength: { value: 10, message: "Enter a valid phone number" },
                maxLength: { value: 11, message: "Enter a valid phone number" },
              })}
            />
            {errors.number && (
              <span className="text-red-500">{errors.number.message}</span>
            )}

            <input
              placeholder="Your Message"
              className="border rounded-[5px] px-[10px] pb-[100px] "
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <span className="text-red-500">{errors.message.message}</span>
            )}
          </div>

          <button
            className="bg-[#3554D1] mt-[10px] flex text-[white] font-medium px-[20px] py-[20px] rounded"
            type="submit"
          >
            Send a Message <ArrowUpRight />
          </button>
        </form>
        <div className=" ">
          <h1 className="text-[30px] sm:pb-[30px] font-medium">Get In Touch</h1>
          <div className="flex  text-[#697488]  cursor-pointer sm:flex-row flex-col gap-[50px]">
            <div className="">
              <h3 className=" text-[14px] sm:mb-[15px]">WhatsApp</h3>
              <p className="hover:text-[blue] text-[18px]">7738182493</p>
            </div>
            <div>
              <h3  className="text-[14px] sm:mb-[15px]">Need support?</h3>
              <p className="hover:text-[blue] text-[18px] sm:mb-[5px] ">info@luzo.app</p>
              <p className="hover:text-[blue] text-[18px]">founders@luzo.app</p>
            </div>
            <div>
              <h3  className="text-[14px] sm:mb-[15px]">Follow us on social media</h3>
              <span className=" h-10 flex flex-row gap-[10px]  "> <Instagram />     <Facebook />  <Linkedin /> <Twitter />
</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
