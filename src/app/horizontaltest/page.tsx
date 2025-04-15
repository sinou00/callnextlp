"use client";
import React from "react";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AnimatedListDemo } from "../components/common/animatedlistdemo";
import ImageSticky from "../components/common/imagesticky";
import VerticalText from "../components/common/verticaltext";
import { DockDemo } from "../components/common/dockicondemo";



const MockupsSection = ( ) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);

  const [isIntersecting1, setIsIntersecting1] = useState(false);
  const [isIntersecting2, setIsIntersecting2] = useState(false);
  const [isIntersecting3, setIsIntersecting3] = useState(false);

  // Register ScrollTrigger plugin with GSAP
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sectionWidth = sectionRef.current?.scrollWidth || 0;
    const viewportWidth = window.innerWidth;
   

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
            snapTo: 1/2 , // Divide by number of sections minus one (for 3 sections)
            duration: 0.5, // Duration of snap animation
            ease: "power1.inOut", // Smooth easing for snap
          },
        },
      }
    );

    // Horizontal scroll for the sticky image
    const imageMove = gsap.fromTo(
      stickyRef.current,
      { x: 0 }, // initial horizontal position
      {
        x: "200vw", // move image horizontally as the user scrolls
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
        },
      }
    );

    return () => {
      pin.kill(); // Cleanup on unmount
      imageMove.kill(); // Cleanup the image animation
    };
  }, []);

  return (
    <section className="relative overflow-hidden w-full">
      {/* ScrollTrigger trigger */}
      <div ref={triggerRef} className="relative z-0">
        <div ref={sectionRef} className="flex w-[300vw] h-screen">
           
          {/* Section 1 */}
            <section
            id="content"
            className="bg-custom-radial h-screen w-screen flex flex-col p-4"
            >
            {/* Top Half: VerticalText + Sticky Image */}
            <div className="flex flex-row flex-grow h-2/3">
                <div className="w-1/2 flex items-start justify-center items-center">
                <VerticalText text="Find" />
                </div>
                <div className="w-1/4 flex items-center justify-center">
                <div ref={stickyRef} className="sticky top-16 z-10">
                    <img
                    src="/imagemockup/mockup1.png"
                    alt="Mockup"
                    className="rounded-lg w-[800px] h-[650px] max-w-none"
                    />
                </div>
                </div>
            </div>

            {/* Bottom Text Section */}
            <div className="h-1/3 flex items-end justify-start">
                <div className="text-left w-full">
                <h2 className="text-2xl font-bold mb-4">Find the Parks around you</h2>
                <p className="text-lg text-gray-300">
                    Discover all the nearby parks with our interactive map. Easily locate football,
                    volleyball, and basketball courts in your area.
                    Filter by sport, availability, and distance to find the perfect spot.
                </p>
                <p className="text-lg text-gray-300 mt-4">
                    No more searching, just pick a park 
                    and start playing!
                </p>
                </div>
            </div>
            </section>

          {/* Section 2  */}
          <section
            id="content"
            className="bg-custom-radial h-screen w-screen flex flex-col p-4"
            >
            {/* Top Half: VerticalText + Sticky Image */}
            <div className="flex flex-row flex-grow h-2/3">
                <div className="w-1/2 flex items-start justify-center items-center z-0">
                <VerticalText text="Join" />
                </div>
                <div className="w-1/2 flex items-center justify-center">

                </div>
            </div>

            {/* Bottom Text Section */}
            <div className="h-1/3 flex items-end justify-start">
                <div className="text-left w-full md:w-3/5">
                <h2 className="text-2xl font-bold mb-4">Join a Game Session</h2>
                <p className="text-lg text-gray-300">
                Find and join game sessions that fit your schedule, whether solo or with a team. 
                Compete against other players and challenge the winners with our CallNext feature.
                </p>
                <p className="text-lg text-gray-300 mt-4">
                  No teammates? No problem! We'll match you with other players.
                </p>
                </div>
            </div>
            </section>

          {/* Section 3  */}
          <section
            id="content"
            className="bg-custom-radial h-screen w-screen flex flex-col p-4"
            >
            {/* Top Half: VerticalText + Sticky Image */}
            <div className="flex flex-row flex-grow h-2/3">
                
                <div className="w-1/2 flex items-start justify-center items-center z-0">
                <VerticalText text="Play" />
                </div>
                <div className="w-1/2 flex items-center justify-center">

                </div>
            </div>

            {/* Bottom Text Section */}
            <div className="h-1/3 flex items-end justify-start">
                <div className="text-left w-full">
                <h2 className="text-2xl font-bold mb-4">Play & Make New Friends</h2>
                <p className="text-lg text-gray-300">
                Enjoy your favorite sport and connect with players who share your passion. 
                Build your team, improve your skills, and create lasting memories on the court.
                </p>
                <p className="text-lg text-gray-300 mt-4">
                Whether for fun or competition, every match is a chance to grow, win, and make new friends!
                </p>
                </div>
            </div>
            </section>
        </div>
      </div>
    </section>
  );
};

export default MockupsSection;






