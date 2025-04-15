"use client";
import DeveloperCard from "./developercard";
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'; // Import icons
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md"; // Import filled icons
import Form from "./form";
import FormTest from "./formtest";

const ContactSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-items-stretch items-center py-8 px-8  text-white">
      {/* Top row with 4 DeveloperCards */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-16 w-auto mb-64">
      <DeveloperCard rectangleColor="#202C4B" name="Yassine" position="Frontend Developer" profileImage="./Creators/user.png"/>
      <DeveloperCard rectangleColor="#FFD700" name="Zouhair" position="Frontend Developer" profileImage="./Creators/user.png"/>
      <DeveloperCard rectangleColor="#973131" name="Adam" position="Frontend Developer" profileImage="./Creators/user.png"/>
      <DeveloperCard rectangleColor="#F1F1F1" name="Axel" position="Frontend Developer" profileImage="./Creators/user.png"/>
       
      </div>  
      {/* Contact Section Layout */}
      <div className="flex w-full max-w-6xl">
        {/* Left Side: Text */}
        <div className="flex-1 text-left pr-8">
          <h2 className="text-4xl font-bold mb-0">Get in Touch</h2>
          <p className="text-lg font-light mb-10 font-['Inter']">
            Feel free to contact us anytime!
          </p>

            {/* Contact Info Lines */}
           <div className="space-y-4">
            {/* Phone Line */}
            <div className="flex items-center">
              <MdPhone 
                className="mr-4"
                style={{
                width: "30px",
                height: "30px",
                background: "transparent",
                color: "#F9D689",
                opacity: 0.9,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                }}
              />
              <span className="text-white text-lg font-normal font-['Inter']">514-790341</span>
            </div>
            {/* Email Line */}
            <div className="flex items-center">
              <MdEmail 
              className="text-xl mr-4"
              style={{
                width: "30px",
                height: "30px",
                background: "transparent",
                color: "#F9D689",
                opacity: 0.9,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                }}
               />
              <span className="text-white text-lg font-normal font-['Inter']">callnext@gmail.com</span>
            </div>
            {/* Location Line */}
            <div className="flex items-center">
              <MdLocationOn 
              className="text-xl mr-4"
              style={{
                width: "30px",
                height: "30px",
                background: "transparent",
                color: "#F9D689",
                opacity: 0.9,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                }}
               />
              <span className="text-white text-lg font-normal font-['Inter']">48 Palms trees, Newportbeach, CA, Y9X 37G</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 ">
            <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;