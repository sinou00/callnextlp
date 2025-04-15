import React from "react";
import { X } from "lucide-react";

interface MenuProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ toggleMenu, isMenuOpen }) => {
  return (
    <div
    className={`fixed top-0 left-0 z-20 h-full w-64 bg-gray-900 p-6 transform transition-transform duration-300 ${
      isMenuOpen ? "translate-x-0" : "-translate-x-full"
    }`}
  >
      <button
        onClick={toggleMenu}
        className="text-[#F9D689] flex items-center justify-center w-6 h-6 border border-[#F9D689] rounded-md hover:bg-gray-700 transition"
      >
        <X size={20} /> {/* Close icon */}
      </button>

    <nav className="mt-6">
      <ul className="space-y-4">
        <li>
          <a href="#" className="text-white block">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="text-white block">
            Team
          </a>
        </li>
        <li>
          <a href="#" className="text-white block">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="text-white block">
            Calendar
          </a>
        </li>
      </ul>
    </nav>
  </div>

  );
};
export default Menu;