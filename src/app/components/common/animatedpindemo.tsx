"use client";
import React from "react";
import { PinContainer } from "./pincontainer";
import { ShineBorder } from "./shineborder";



interface NameProps {
  name:string;
  position:string;
}

const AnimatedPinDemo:React.FC<NameProps> =({name,position}) =>{
  return (
    
    <div className="w-full flex items-center justify-center">
      
      <PinContainer
        title="/LinkedInProfile"
        href="https://youtube.com/"
        imageUrl="./creators/user.png" // Add the developer's image here
      >


       <ShineBorder shineColor={["#9AA5BC", "#202C4B", "#9AA5BC"]} />
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[15rem] h-[15rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            {name}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
              {position}
            </span>
          </div>
          <div 
          className="flex flex-1 w-full rounded-lg md:mt-4 lg:mt-4 bg-cover bg-center"
          style={{ backgroundImage: "url('./creators/user.png')" }} 
          />
        </div>
      </PinContainer>
    </div>
  );
}
export default AnimatedPinDemo;
