"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import TextSection from "@/app/components/common/textsection";
import Selectionner from "./selectionner";



interface ScrollSectionProps {
  onSectionChange: (sectionIndex: number) => void; // Define the type for onSectionChange
}


const ScrollSection: React.FC<ScrollSectionProps> = ({ onSectionChange }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  const [isIntersecting1, setIsIntersecting1] = useState(false);
  const [isIntersecting2, setIsIntersecting2] = useState(false);
  const [isIntersecting3, setIsIntersecting3] = useState(false);

  const section1Ref = useRef<HTMLDivElement | null>(null);
  const section2Ref = useRef<HTMLDivElement | null>(null);
  const section3Ref = useRef<HTMLDivElement | null>(null);

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
  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting1(entry.isIntersecting);
        if (entry.isIntersecting) onSectionChange(0);
      },
      { threshold: 0.5 }
    );
    const observer2 = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting2(entry.isIntersecting);
        if (entry.isIntersecting) onSectionChange(1);
      },
      { threshold: 0.5 }
    );
    const observer3 = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting3(entry.isIntersecting);
        if (entry.isIntersecting) onSectionChange(2);
      },
      { threshold: 0.5 }
    );

    if (section1Ref.current) observer1.observe(section1Ref.current);
    if (section2Ref.current) observer2.observe(section2Ref.current);
    if (section3Ref.current) observer3.observe(section3Ref.current);

    return () => {
      observer1.disconnect();
      observer2.disconnect();
      observer3.disconnect();
    };
  }, []);

  return (
    <section className="overflow-hidden">
      {/* ScrollTrigger trigger */}
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="flex w-[300vw] h-screen relative border border-purple-500"
        >
          {/* Section 1 */}
          <div
            ref={section1Ref}
            className="flex justify-center items-center w-screen h-screen border border-red-500"
          >
            <TextSection 
            isIntersecting={isIntersecting1}
            findText="Find"
            joinText="Join a game session at"
            parkText="your local park"
             />
            {isIntersecting1 && (
              <div className="absolute bottom-4 left-4 z-10">
                <Selectionner activeIndex={1} />
              </div>
            )}
          </div>
          {/* Section 2 */}
          <div
            ref={section2Ref}
            className="relative flex justify-center items-center w-screen h-full border border-yellow-500"
          >
            <TextSection 
            isIntersecting={isIntersecting2}
            findText="Join"
            joinText="Join a game session at"
            parkText="your local park"

             />
            {isIntersecting2 && (
              <div className="absolute bottom-10 left-4  z-10">
                <Selectionner activeIndex={2} />
              </div>
            )}
          </div>
          {/* Section 3 */}
          <div
            ref={section3Ref}
            className="relative flex justify-center items-center w-screen h-full border border-white-500"
          >
            <TextSection 
            isIntersecting={isIntersecting3}
            findText="Play"
            joinText="Join a game session at"
            parkText="your local park"
             />
            {isIntersecting3 && (
              <div className="absolute bottom-4 left-4  z-10">
                <Selectionner activeIndex={3} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;