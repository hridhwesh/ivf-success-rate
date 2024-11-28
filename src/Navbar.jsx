import React, { useState } from "react";
import logo from './ivf-pulse-logo.png';
import arrow from './Masked Icon.png';
import ham from './TextAlignJustify.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#FFFFFF] text-[#1E231E] font-poppins border-b-[1px] border-[#E6E3D2] h-[80px] md:px-[80px] ">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold">
          <img
          alt = "logo"
          src={logo}
          className="w-[126px] h-[30px] mt-[20px]"
          />
        </div>

        {/* Hamburger Menu (Visible on small screens) NOT COMPLETED  */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <img
          alt = "logo"
          src={ham}
          className="w-[24px] h-[24px]  mt-[20px]"
          />
        </button>

        {/* Navigation Links */}
        <div
          className={`lg:flex space-x-0 3xl:space-x-6 items-center md:mt-[10px] ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <a href="#" className="block px-3 py-2 ">
            Donor Programme
          </a>
          <a href="#" className="block px-3 py-2 ">
            Fertility Preservation
          </a>
          <a href="#" className="block px-3 py-2 ">
            Advanced Treatments
          </a>
          <a href="#" className="block px-3 py-2 ">
            Infertility Treatments
          </a>
          <a href="#" className="block px-3 py-2 ">
            IVF Testing
          </a>
          <a href="#" className="block px-3 py-2 ">
            About Us
          </a>
          <div className="flex flex-row">
            <a
            href="#"
            className="block px-3 py-2 bg-[#D75555] text-white rounded flex items-center space-x-2">
            <span>Talk to Us</span>
            <img src={arrow} alt="Arrow Icon" className="w-[24px] h-[24px]" 
            />
            </a>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
