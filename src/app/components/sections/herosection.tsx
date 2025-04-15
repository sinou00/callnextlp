"use client";

import { Canvas } from "@react-three/fiber";
import StarryBackground from "../common/starrybackground";
import { ShimmerButton } from "../common/shimmerbutton";
import { AnimatedListDemo } from "../common/animatedlistdemo";
import Link from "next/link";
import { FlipWordsDemo } from "../common/flipwordsdemo";
import Navbar from "../common/navbar";
import Image from "next/image";
import { Apple } from "lucide-react";
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div className="bg-custom-radial text-white h-screen">
      <Navbar />

      {/* Main Section */}
      <section className="flex min-h-screen overflow-hidden relative">

  
        {/* Left Side */}
        <div className="flex flex-col w-full md:w-2/3 lg:w-2/3 md:flex-col lg:flex-col justify-center px-12 mb-64 mt-16">
          <FlipWordsDemo />
          <p className="text-gray-400 mt-4 ml-32">
          Basketball, Football, Volleyball — find parks around you and join or create sessions to play! <br />
          Meet new people, have fun, and turn any day into game day!
          </p>
          <div className="mt-6 ml-64 flex gap-4">

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
          <div className="mt-32 ml-64 flex items-center gap-16">
            <div className="flex items-center gap-2">
              <span className="text-6xl font-bold  bg-gradient-to-r from-[#F9D689] to-[#937E51] text-transparent bg-clip-text">100+</span>
              <span className="text-lg text-gray-400">Parks</span>
            </div>
            <div className="h-12 border-l border-gray-500"></div>
            <div className="flex items-center gap-2">
              <span className="text-6xl font-bold bg-gradient-to-r from-[#F9D689] to-[#937E51] text-transparent bg-clip-text">3</span>
              <span className="text-lg text-gray-400">Sports</span>
            </div>
          </div>
        </div>       

        <StarryBackground />

        {/* Right Side */}
        <div className="w-full md:w-1/3 lg:w-1/3 md:h-screen lg:h-screen bg-gold-gradient rounded-xl flex justify-start relative z-10" />

        </section>
        

        <Image
            src="/imagemockup/mocky3.png"
            alt="Huge Mockup"
            width={650}
            height={100}
            className="absolute right-[40px] bottom-0 z-10"
          />
    </div>
  );
}
export default HeroSection;