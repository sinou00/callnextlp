"use client";
import DeveloperCard from "./developercard";
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'; // Import icons
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md"; // Import filled icons
import Form from "./form";
import FormTest from "./formtest";

const ContactSectionIphone = () => {
  return (
    <section className="w-full h-full flex flex-col justify-items-stretch items-center mt-8 text-white">
      {/* Top row with 4 DeveloperCards */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-16 w-auto mb-32">
      <DeveloperCard rectangleColor="#202C4B" name="Yassine" position="Frontend Developer" profileImage="./Creators/user.png"/>
      <DeveloperCard rectangleColor="#FFD700" name="Zouhair" position="Frontend Developer" profileImage="./Creators/user.png"/>
      <DeveloperCard rectangleColor="#973131" name="Adam" position="Frontend Developer" profileImage="./Creators/user.png"/>
      <DeveloperCard rectangleColor="#F1F1F1" name="Axel" position="Frontend Developer" profileImage="./Creators/user.png"/>
       
      </div>  
      
     
    
        <div className="flex-1 ">
          <h2 className="text-4xl font-bold mb-0">Get in Touch</h2>
          <p className="text-lg font-light mb-10 font-['Inter']">
            Feel free to contact us anytime!
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 ">
            <FormTest />
        </div>
      
    </section>
  );
};

export default ContactSectionIphone;