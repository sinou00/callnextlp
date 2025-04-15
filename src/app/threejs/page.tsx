"use client";

import { Canvas } from "@react-three/fiber";
import StarryBackground from "../components/common/starrybackground";
import { ShimmerButton } from "../components/common/shimmerbutton";
import { AnimatedListDemo } from "../components/common/animatedlistdemo";
import Link from "next/link";
import { FlipWordsDemo } from "../components/common/flipwordsdemo";
import Navbar from "../components/common/navbar";
import Image from "next/image";
import { Apple } from "lucide-react";
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const ThreeJsPage = () => {
  return (
    <div className="bg-custom-radial text-white h-screen">
      <Navbar />

      {/* Main Section */}
      <section className="flex flex-col h-screen overflow-hidden relative">

  
        {/* Left Side */}
       
        <div className="flex flex-col w-full mt-24 md:w-2/3 lg:w-2/3 md:justify-center lg:justify-center lg:px-12 lg:mb-64 lg:mt-16 md:px-12 md:mb-64 md:mt-16">
          <FlipWordsDemo />
          <p className="text-gray-400 text-xs md:text-base lg:text-base mt-8 ml-8 mr-8 md:mt-4 lg:mt-4 md:ml-32 lg:ml-32">
          
          Basketball, Football, Volleyball find parks around you and join or create sessions to play! <br />
          Meet new people, have fun, and turn any day into game day!
          </p>
          <div className="mt-6 ml-8 lg:ml-64 flex gap-4">

          <div className="mt-8">
                <Link href="#content" scroll={false}>
                <ShimmerButton className="shadow-2xl">
                    <div className="flex items-center gap-2">
                    {/* Apple Icon */}
                    <FaApple className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-xl" />
                    <div className="flex flex-col leading-tight text-left">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-xs">Download on the</span>
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">App Store</span>
                    </ div >
                </ div>
                    
                    
                
                </ShimmerButton>
                </Link>
            </div>

            <div className="mt-8">
                <Link href="#content" scroll={false}>
                <ShimmerButton className="shadow-2xl">
                    <div className="flex items-center gap-2">
                    {/* Android Icon */}
                    <FaGooglePlay className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg" />
                    <div className="flex flex-col leading-tight text-left">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-xs">Get it on </span>
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">Play Store</span>
                    </ div >
                </ div>
                </ShimmerButton>
                </Link>
            </div>
          </div>

          {/* Stats Section (147 Parks & 3 Sports) */}
          <div className="mt-16 mb-64 flex items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold  bg-gradient-to-r from-[#F9D689] to-[#937E51] text-transparent bg-clip-text">100+</span>
              <span className="text-lg text-gray-400">Parks</span>
            </div>
            <div className="h-6 border-l border-gray-500"></div>
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold bg-gradient-to-r from-[#F9D689] to-[#937E51] text-transparent bg-clip-text">3</span>
              <span className="text-lg text-gray-400">Sports</span>
            </div>
          </div>
        </div>       

        <StarryBackground />

        {/* Right Side */}
        <div className="w-full h-[400px] md:w-1/3 lg:w-1/3 md:h-screen lg:h-screen bg-gold-gradient rounded-sm flex flex-col" />

        </section>
        

        <Image
            src="/imagemockup/mocky3.png"
            alt="Huge Mockup"
            width={300}
            height={50}
            className="absolute right-[40px] bottom-0 z-10"
          />
    </div>
  );
}
export default ThreeJsPage;









