"use client";
import { useState } from "react";
import { Input } from "../common/input";
import { clsx } from "clsx";
import AnimatedPinDemo from "../common/animatedpindemo";
const TeamSection = () => {
  

  return (


  <section id="animated-grid" className="bg-custom-radial h-screen w-screen flex items-center justify-center p-8 md:p-16 relative z-0">
    {/* Left Side - Animated Team Grid */}
    <div className="w-1/2 flex justify-center">
      <div className="grid grid-cols-2 gap-4">
        <AnimatedPinDemo name="Yassine Harisse" position="Front-End Developer" />
        <AnimatedPinDemo name="Adam Naoui" position="Backend Developer" />
        <AnimatedPinDemo name="Axel Massucci" position="Cloud Architect" />
        <AnimatedPinDemo name="Zouhair Derouich" position="Front-End Developer" />
      </div>
    </div>

    {/* Right Side - Team Introduction */}
    <div className="w-1/2 flex flex-col justify-start items-start text-left px-8 h-full">
    <h2 className="text-9xl font-bold mb-4 mt-8 bg-clip-text bg-[[#202C4B]">Meet Our Team</h2>
      <p className="text-lg text-gray-700">
        We are a passionate team dedicated to building innovative and scalable solutions. 
        Our mission is to collaborate, create, and push the boundaries of technology to deliver exceptional results.
      </p>
    </div>
  </section>

   
  );

};

export default TeamSection;