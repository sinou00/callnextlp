import React from "react";


interface VerticalTextProps {
  text:string;
}


const VerticalText: React.FC<VerticalTextProps> = ({text}) => {
  return (
    <div
      className=" -rotate-90 text-transparent bg-clip-text bg-gradient-to-b from-[#F1F1F1] to-[#202C4B]  
      font-light
      text-[12rem] sm:text-9xl md:text-9xl lg:text-9xl"
    >
      {text}
     
    </div>
  );
};
export default VerticalText;