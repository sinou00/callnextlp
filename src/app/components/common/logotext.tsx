import React from "react";

const LogoText: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-1 ">
    <img 
    src="/logo.png" 
    alt="Logo" 
    className="w-12 h-12 sm: w-8 sm: h-8" />
    <span className="text-[#F1F1F1] font-poppins font-bold text-sm">CallNext</span>
  </div>
  );
};

export default LogoText;