import React from "react";

interface BurgerProps {
  toggleMenu: () => void;
}

const Burger: React.FC<BurgerProps> = ({ toggleMenu }) => {
  return (

    <button onClick={toggleMenu} >
    {/* Burger Menu Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-[#F9D689]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>

  );
};
export default Burger;