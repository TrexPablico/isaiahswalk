import React, { useState } from "react";
import logo from "../assets/Navbar/logo.png";
import { MdClose } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className="w-full h-24 flex flex-col justify-center items-center sticky top-0 z-50 bg-white shadow-md bg-opacity-80">
      <div className="max-w-[1400px] mx-auto lg:px-3 w-full">
        <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
          <div className="flex items-center gap-x-2">
            <Link
              to="home"
              className="leading-normal no-underline text-black font-bold text-lg hover:text-primary cursor-pointer"
            >
              <img
                src={logo}
                alt="Logo"
                className="h-[80px] w-auto object-cover"
              />
            </Link>
          </div>
          <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
            <Link
              to="home"
              className="leading-normal no-underline text-black font-bold text-lg hover:text-primary cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              className="leading-normal no-underline text-black font-bold text-lg hover:text-primary cursor-pointer"
            >
              About
            </Link>
            <Link
              to="tour-packages"
              className="leading-normal no-underline text-black font-bold text-lg hover:text-primary cursor-pointer"
            >
              Tour Packages
            </Link>
            <Link
              to="valued-clients"
              className="leading-normal no-underline text-black font-bold text-lg hover:text-primary cursor-pointer"
            >
              Valued Clients
            </Link>
            <Link
              to="testimonials"
              className="leading-normal no-underline text-black font-bold text-lg hover:text-primary cursor-pointer"
            >
              Testimonials
            </Link>
            <Link
              to="contact-us"
              className="leading-normal no-underline text-black font-bold text-lg hover:text-primary cursor-pointer"
            >
              Contact Us
            </Link>
          </ul>
          {dropdown ? (
            <div
              onClick={showDropdown}
              className="lg:hidden text-[22px] cursor-pointer text-black"
            >
              <MdClose />
            </div>
          ) : (
            <div
              onClick={showDropdown}
              className="lg:hidden text-[22px] cursor-pointer text-black"
            >
              <HiMenuAlt3 />
            </div>
          )}
        </div>
        <div
          className={`lg:hidden w-full fixed top-24 bg-gray transition-all duration-300 ${
            dropdown ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="w-full flex flex-col items-baseline gap-4">
            <ul className="flex flex-col justify-center w-full">
              <Link
                onClick={showDropdown}
                to="home"
                className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid cursor-pointer"
              >
                Home
              </Link>
              <Link
                onClick={showDropdown}
                to="about"
                className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid cursor-pointer"
              >
                About
              </Link>
              <Link
                onClick={showDropdown}
                to="tour-packages"
                className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid cursor-pointer"
              >
                Tour Packages
              </Link>
              <Link
                onClick={showDropdown}
                to="valued-clients"
                className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid cursor-pointer"
              >
                Valued Clients
              </Link>
              <Link
                onClick={showDropdown}
                to="testimonials"
                className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid cursor-pointer"
              >
                Testimonials
              </Link>
              <Link
                onClick={showDropdown}
                to="contact-us"
                className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid cursor-pointer"
              >
                Contact Us
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
