"use client";
import { Observer } from 'gsap/all';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import EmailInput from "./components/common/emailinput";
import ScrollSection from "./components/common/scrollsection";
import ContactSection from "./components/common/contactsection";
import Selectionner from "./components/common/selectionner";
import Sports from "./components/common/sports";
import JoinWaitList from "./components/common/joinwaitlist";
import Join from "./components/common/joinbutton";
import MainText from "./components/common/maintext";
import Header from "./components/common/header";
import LogoText from "./components/common/logotext";
import JoinButton from "./components/common/joinbutton";
import Burger from "./components/common/burger";
import Test from "./components/common/test";
import VerticalText from "./components/common/verticaltext";
import TextSection from "./components/common/textsection";
import HorizontalSection from './components/common/horizontalsection';
import ContactSectionIphone from './components/common/contactsectioniphone';
import Menu from './components/common/menu';
import ImageSticky from './components/common/imagesticky';


// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  //menu opened or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const [position, setPosition] = useState<"sticky" | "fixed" | "relative">("sticky");;
  const section3Ref = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPosition('fixed');
        } else {
          setPosition('sticky');
        }
      },
      {
        threshold: 0.1, // Trigger when 50% of the section is in view
      }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

 



  return (
    <div className="min-h-[200vh] bg-custom-radial flex flex-col items-center max-w-screen overflow-clip">

  

      
    {/* First page*/}
     
      {/* Header contains Logo+burger menu for small and medium screens */}
      <section className="flex items-center justify-between w-full px-4 mt-4">



       
        
      

        <div className="flex-1 flex justify-center">
          <LogoText />
        </div>
        <div className="flex">
          <Burger toggleMenu={toggleMenu} />
        </div>
      </section>

       {/* Mobile menu */}
       <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />







      {/* Main Content: Main text + email input to join waitlist */}
      <section className="flex flex-col items-center justify-center mt-8 sm:mt-8 lg:mt-32 md:mt-32 space-y-8 sm:space-y-8 lg:space-y-12 ">

        <MainText/>
        <EmailInput/>

      </section>

      {/* Sticky Image for Small Screens */}
     
     <ImageSticky position={position} /> 

    
    
   



    
   

      {/* Second Page */}
      <div className="relative w-full overflow-hidden">
        <HorizontalSection section3Ref={section3Ref} />
      </div>

     


      {/* Third Page */}
      <div ref={contactRef}>
        <ContactSectionIphone />
      </div>
      
    
     

    </div>
       
    
  );
}
