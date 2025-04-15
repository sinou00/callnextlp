"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroSection from '../components/sections/herosection';
import MockupsSection from '../components/sections/mockupssection';
import TeamSection from '../components/sections/teamsection';
import ProductsSection from '../components/sections/productssection';
import ContactSection from '../components/sections/contactsection';
import FooterSection from "../components/sections/footersection";






export default function Home() {



 



  return (
    <div className="bg-custom-radial overflow-hidden">

      {/* First Section */}
      <HeroSection />
    
      {/* Second Section */}
      <MockupsSection />
      

      {/* Third Section */}
      <TeamSection />

      {/* Forth Section */}
      <ProductsSection />

      {/* Fifth Section */}
      <ContactSection />

      {/* Sixth Section */}
      <FooterSection />
  

    </div>
       
    
  );
}