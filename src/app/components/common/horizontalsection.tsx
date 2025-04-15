
"use client";
import React from "react";
import Test from "./test";
import VerticalText from "./verticaltext";
import Selectionner from "./selectionner";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";




interface ScrollSectionProps {
  section3Ref: React.RefObject<HTMLDivElement | null>;
}

 // Handle section image change

const HorizontalSection: React.FC<ScrollSectionProps> = ({section3Ref }) => {

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);


 

  const [isIntersecting1, setIsIntersecting1] = useState(false);
  const [isIntersecting2, setIsIntersecting2] = useState(false);
  const [isIntersecting3, setIsIntersecting3] = useState(false);

    // Register ScrollTrigger plugin with GSAP
    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
  
      // Horizontal scrolling animation
      const pin = gsap.fromTo(
        sectionRef.current,
        { translateX: 0 },
        {
          translateX: "-200vw", // Scroll horizontally
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top", // End animation after scroll reaches this point
            scrub: 0.6,
            pin: true,
            
            snap: {
              snapTo: 1/2, // Divide by number of sections minus one (for 3 sections)
              duration: 0.5, // Duration of snap animation
              ease: "power1.inOut", // Smooth easing for snap
            },
          },
        }
      );

  
  
      return () => {
        pin.kill(); // Cleanup on unmount
      };
    }, []);
  
    // Intersection observers for individual sections

  return (

    <section className="overflow-hidden">
    {/* ScrollTrigger trigger */}
    <div ref={triggerRef}>
      <div ref={sectionRef} className="flex w-[300vw] h-auto">
        {/* Section 1  */}
        <section  className="grid grid-cols-1 gap-y-48 w-full mt-8 ">
          {/* Top Centered Text */}
          <div className="justify-self-center">
            <Test/>
          </div>

          {/* Below it, Left-Aligned Text */}
          <div className="justify-self-start -ml-16">
            <VerticalText text="Find"/>
          </div>
          
          <div className="justify-self-center">
            <Selectionner activeIndex={2}/>
          </div>
        </section>

        {/* Section 2  */}
        <section className="grid grid-cols-1 gap-y-48 w-full mt-8 ">
          {/* Top Centered Text */}
          <div className="justify-self-center">
            <Test/>
          </div>

          {/* Below it, Left-Aligned Text */}
          <div className="justify-self-start -ml-16">
            <VerticalText text="Join"/>
          </div>
          
          <div className="justify-self-center">
            <Selectionner activeIndex={2}/>
          </div>
        </section>


        {/* Section 3  */}
        <section ref={section3Ref} className="grid grid-cols-1 gap-y-48 w-full mt-8 ">
          {/* Top Centered Text */}
          <div className="justify-self-center">
            <Test/>
          </div>

          {/* Below it, Left-Aligned Text */}
          <div className="justify-self-start -ml-16">
            <VerticalText text="Play"/>
          </div>
          
          <div className="justify-self-center">
            <Selectionner activeIndex={2}/>
          </div>
        </section>

      </div>
    </div>
    </section>
  );
};
export default HorizontalSection;