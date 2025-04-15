import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form: React.FC = () => {
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
    <form ref={form} onSubmit={sendEmail} className="space-y-6">
      <div className="flex flex-col flex-row space-x-4">
        <div className="flex flex-col mb-4 mt-8 ml-32">
          <span className="text-white text-sm mb-2 font-medium">Your Name</span>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name..."
            className="h-10 px-4 text-white rounded-md bg-transparent focus:outline-none placeholder-white-500 border-[0.5px] border-white border-t-[#F1F1F1] border-b-[#8B8B8B] flex-grow w-[200px]"
            required
          />
        </div>
        <div className="flex flex-col mb-4 mt-8 ml">
          <span className="text-white text-sm mb-2 font-medium">Your Email</span>
          <input
            type="email"
            name="user_email"
            placeholder="Your Email..."
            className="h-12 px-4 text-white rounded-md bg-transparent focus:outline-none placeholder-white-500 border-[0.5px] border-white border-t-[#F1F1F1] border-b-[#8B8B8B] flex-grow w-[200px]"
            required
          />
        </div>
      </div>
      <div className="flex flex-col mb-4 mt-[-30px]">
        <span className="text-white text-sm mb-2 font-medium">Your Message</span>
        <textarea
          name="message"
          placeholder="Leave us a message..."
          className="w-full h-32 px-4 pt-4 text-white rounded-md bg-transparent focus:outline-none placeholder-white-500 border-[0.5px] border-white border-t-[#F1F1F1] border-b-[#8B8B8B]"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full md:w-auto px-64 py-2 bg-gradient-to-r from-[#F9D689] to-[#937E51] rounded-lg text-sm text-[#101625] font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;