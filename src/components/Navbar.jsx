

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import TopInfoBar from "./TopInfoBar";
import logo from "../assets/blazebe.png";
import { FaFolder } from "react-icons/fa";
import logo2 from "../assets/TSM-logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenAvtar, setIsDropdownOpenAvtar] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (state) => {
    setIsDropdownOpenAvtar(state);
  };
  const teamMemberName = "John Doe";
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b-2 border-warning-dark font-sans">
      <TopInfoBar />
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex items-center justify-between h-14 ">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-xl font-bold text-gray-800">
              <img src={logo} alt="logo" className="h-[35px] object-contain" />
            </Link>
            {/* Bookings with Dropdown */}
            <div
              className="relative text-gray-600 px-3 flex flex-col items-center hover:bg-warning-light hover:text-white duration-500"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <FaFolder size={25} />
              <span>Bookings</span>
              {isDropdownOpen && (
                <div className="absolute top-full left-0  w-48 bg-white shadow-lg rounded-md border border-gray-200">
                  <Link
                    to="/blaze/booking/createbooking"
                    className="block px-4 py-1 text-gray-700 hover:bg-primary-light hover:text-white duration-300"
                  >
                    Start Blank Booking
                  </Link>
                  <Link
                    to="/booking-option-2"
                    className="block px-4 py-1 text-gray-700 hover:bg-primary-light hover:text-white duration-300"
                  >
                    Existing Booking
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <div
                className="relative text-gray-600 flex items-center gap-4 "
                onMouseEnter={() => setIsDropdownOpenAvtar(true)}
                onMouseLeave={() => setIsDropdownOpenAvtar(false)}
              >
                <div className="relative text-gray-600 flex items-center cursor-pointer">
                  {/* Avatar with Initial */}
                  <div className="flex items-center justify-center w-8 h-8 bg-warning-dark text-white font-semibold rounded-full">
                    {teamMemberName.charAt(0).toUpperCase()}
                  </div>
                  <span className="ml-2 text-gray-700 font-medium">
                    {teamMemberName}
                  </span>

                  {/* Dropdown Menu */}
                  {isDropdownOpenAvtar && (
                    <div className="absolute top-full right-0  w-48 bg-white shadow-lg rounded-md border border-gray-200 py-1">
                      <Link
                        to="/manage-profile"
                        className="block px-4 py-1 text-gray-700 hover:border-l-2 hover:border-warning-dark hover:bg-gray-100 duration-300"
                      >
                        Manage Profile
                      </Link>
                      <Link
                        to="/change-password"
                        className="block px-4 py-1 text-gray-700 hover:border-l-2 hover:border-warning-dark hover:bg-gray-100 duration-300 "
                      >
                        Change Password
                      </Link>
                      <button
                        className="block px-4 py-1 text-gray-700 hover:border-l-2 hover:border-warning-dark hover:bg-gray-100 duration-300 w-full text-start"
                        onClick={() => {
                          console.log("Logout logic here");
                        }}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-gray-800">
              <img src={logo2} alt="logo" className="h-[35px] object-contain" />
            </Link></div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
