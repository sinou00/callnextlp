import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex space-x-4">
    <span className="text-sm text-[#F1F1F1] font-light">App</span>
    <span className="text-sm text-[#F1F1F1] font-light">Blog</span>
    <span className="text-sm text-[#F1F1F1] font-light">About</span>
    <span className="text-sm text-[#F1F1F1] font-light">FAQ</span>
  </div>
  );
};

export default Header;