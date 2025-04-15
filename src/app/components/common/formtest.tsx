import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./footer";

const FormTest: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_9m0wdme", // Replace with your EmailJS service ID
          "template_rb520rh", // Replace with your EmailJS template ID
          form.current,
          "Fjx3BRBueQKO162kd" // Replace with your EmailJS public key
        )
        .then(
          (result) => {
            console.log("Success:", result.text);
            alert("Message sent successfully!");
          },
          (error) => {
            console.error("Error:", error.text);
            alert("Failed to send the message, please try again.");
          }
        );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className=" grid grid-cols-1 space-y-8">
      <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-full">
        <div className="flex flex-col mb-4 ">
          <span className="text-white text-sm mb-2 font-medium">First Name</span>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name..."
            className="h-9 px-4 text-white rounded-md bg-transparent focus:outline-none placeholder-white-500 border-[0.5px] border-white border-t-[#F1F1F1] border-b-[#8B8B8B] flex-grow w-[156px] text-xs"
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <span className="text-white text-sm mb-2 font-medium">Last name</span>
          <input
            type="email"
            name="user_email"
            placeholder="Your Email..."
            className="h-9 px-4 text-white rounded-md bg-transparent focus:outline-none placeholder-white-500 border-[0.5px] border-white border-t-[#F1F1F1] border-b-[#8B8B8B] flex-grow w-[156px] text-xs"
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <span className="text-white text-sm mb-2 font-medium">Email address</span>
          <input
            type="email"
            name="user_email"
            placeholder="Your Email..."
            className="h-9 px-4 text-white rounded-md bg-transparent focus:outline-none placeholder-white-500 border-[0.5px] border-white border-t-[#F1F1F1] border-b-[#8B8B8B] flex-grow w-[156px] text-xs"
            required
          />
        </div>
        <div className="flex flex-col mb-4  ">
          <span className="text-white text-sm mb-2 font-medium">Phone number</span>
          <input
            type="email"
            name="user_email"
            placeholder="Your Email..."
            className="h-9 px-4 text-white rounded-md bg-transparent focus:outline-none placeholder-white-500 border-[0.5px] border-white border-t-[#F1F1F1] border-b-[#8B8B8B] flex-grow w-[156px] text-xs"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 justify-center mb-4">
        <span className="text-white text-sm mb-2 font-medium">Your Message</span>
        <textarea
          name="message"
          placeholder="Leave us a message..."
          className="w-full h-32 px-4 pt-4 text-white rounded-md bg-transparent focus:outline-none placeholder-white-500 border-[0.5px] border-white border-t-[#F1F1F1] border-b-[#8B8B8B] mb-8"
          required
        ></textarea>
         <button
        type="submit"
        className="w-full h-8 bg-gradient-to-r from-[#F9D689] to-[#937E51] rounded-md text-sm text-[#101625] font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
        >
        Send Message
      </button>
      <div className="mt-32">
      <Footer />

      </div>
      
      </div>
  

   
  


 
    </form>
  );
};

export default FormTest;