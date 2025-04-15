'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ScrollProgress } from './scrollprogress';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 fixed w-full z-30 top-0 start-0 border-b-[0px] border-gray-100 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ml-[-5px]">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src="/logo.png" width={22} height={22} alt="Logo" />
            <span className="self-center text-md font-bold whitespace-nowrap dark:text-white">CallNext</span>
          </Link>

          <div className="flex md:order-2 space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-mobile"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col md:flex-row md:space-x-6 rtl:space-x-reverse">
              {['Home', 'About', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="block text-sm text-gray-900 hover:text-[#F9D689] md:p-0 dark:text-white dark:hover:text-[#F9D689]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Side Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-3/4 sm:w-2/3 h-screen bg-black z-40 p-6 flex flex-col gap-6 transition-all duration-300">
          <button
            className="text-white text-xl self-end"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
          <ul className="flex flex-col gap-4 mt-8">
            {['Home', 'About', 'Products', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="text-white text-lg hover:text-[#F9D689]"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Scroll Progress Below Navbar */}
      <ScrollProgress className="top-[65px]" />
    </>
  );
};

export default Navbar;



