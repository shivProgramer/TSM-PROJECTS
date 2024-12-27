import React, { useEffect, useRef, useState } from "react";
import { FaList } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { IoIosCopy } from "react-icons/io";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { MdHotel } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { IoMdCamera } from "react-icons/io";
import { FaCarAlt } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { FaShip } from "react-icons/fa";

import { FaCalendarCheck } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaStickyNote } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import {
  FaSuitcase,
  FaUsers,
  FaDollarSign,
  FaCreditCard,
  FaFileAlt,
  FaHistory,
} from "react-icons/fa";
import SlidingDrawer from "../components/SlidingDrawer";
const Bookingdetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Itinerary");
  const tabs = [
    { name: "Itinerary", icon: <FaSuitcase /> },
    { name: "Passengers", icon: <FaUsers /> },
    { name: "Costing", icon: <FaDollarSign /> },
    { name: "Payment", icon: <FaCreditCard /> },
    { name: "Documents", icon: <FaFileAlt /> },
    { name: "Notes", icon: <FaStickyNote /> },
    { name: "History", icon: <FaHistory /> },
    { name: "Message", icon: <FaEnvelope /> },
  ];

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const tableData = [
    { name: "Flight", type: "Transport", status: "Available" },
    { name: "Hotel", type: "Accommodation", status: "Fully Booked" },
    { name: "Car", type: "Transport", status: "Available" },
  ];

  const buttons = [
    {
      name: "Set Follow up",
      icon: <FaCalendarCheck />,
      bgColor: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
    {
      name: "Add Pax",
      icon: <FaUserPlus />,
      bgColor: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      name: "Documents on Mail",
      icon: <FaEnvelope />,
      bgColor: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
    },
    {
      name: "Add Notes",
      icon: <FaStickyNote />,
      bgColor: "bg-yellow-500",
      hoverColor: "hover:bg-yellow-600",
    },
    {
      name: "Add Client Approval",
      icon: <FaCheckCircle />,
      bgColor: "bg-teal-500",
      hoverColor: "hover:bg-teal-600",
    },
    {
      name: "Close Booking",
      icon: <FaLock />,
      bgColor: "bg-red-500",
      hoverColor: "hover:bg-red-600",
    },
  ];

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 p-4 shadow-lg">
      <div className="col-span-12 ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            {" "}
            <FaFolderOpen size={20} /> TSM0001276{" "}
          </div>
          <div className="flex justify-around items-center gap-1  bg-gray-100 rounded-lg shadow-lg">
            {/* Dollar Button */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex items-center p-1 px-2 bg-[#F44336] text-white rounded-full shadow hover:bg-[#f33528]"
              >
                <div className="flex mr-2 items-center justify-center w-6 h-6 bg-[#8f352e] rounded-full">
                  <LiaMoneyCheckAltSolid />
                </div>
                <svg
                  className="ml-2 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {isOpen && (
                <ul className="absolute mt-2 w-20 bg-gray-100 text-gray-700  border rounded-lg shadow-lg">
                  <li
                    className="px-4 py-1 text-sm font-semibold hover:bg-[#F44336] hover:text-white cursor-pointer rounded-lg text-center"
                    onClick={() => alert("Option clicked")}
                  >
                    USD
                  </li>
                </ul>
              )}
            </div>

            {/* Provisional Button */}
            <button className="flex  items-center p-1 px-2 bg-[#2196F3] text-white rounded-full shadow hover:bg-[#1783db] focus:outline-none">
              <div className="flex mr-2 justify-center items-center w-6 h-6 bg-[#1676c5] rounded-full ">
                <FaList className="p-1" size={20} />
              </div>
              <span className="text-sm mr-2">Provisional</span>
            </button>

            {/* Auth Button */}
            <button className="flex  items-center p-1 px-2 bg-[#FF9800] text-white rounded-full shadow hover:bg-[#eba031] focus:outline-none">
              <div className="flex justify-center items-center w-6 h-6 bg-[#cf8a23] rounded-full mr-2">
                <FaUserAlt className="p-1" size={20} />
              </div>
              <span className="text-sm mr-2">Auth</span>
            </button>

            {/* UserName Button */}
            <button className="flex  items-center p-1 px-2 bg-[#9C27B0] text-white rounded-full shadow hover:bg-[#9C27B0] focus:outline-none">
              <div className="mr-2 flex justify-center items-center w-6 h-6 bg-[#5c3e61] rounded-full ">
                <FaLock className="p-1" size={20} />
              </div>
              <span className="text-sm mr-2"> Vineet </span>
            </button>
          </div>
        </div>

        <hr className="my-2" />
      </div>

      {/* First Column */}
      <div className="col-span-12 md:col-span-4 border-t-2 border-[#418CF1] rounded-md shadow-xl">
        <div className="flex justify-between items-center px-4  bg-white">
          <p className="flex items-center text-sm">
            {" "}
            <FaRegUser size={13} className="mr-1" /> :{" "}
            <span className="pl-2 text-gray-900">Mr shiv singh</span>{" "}
          </p>
          <div
            className="bg-[#ED9C28] text-white mt-1"
            title="Edit Client Details"
          >
            <SlidingDrawer />
          </div>
        </div>
        <div className="flex justify-between items-center px-4 bg-white">
          <p className="flex items-center text-sm">
            <CiMail size={13} className="mr-1" /> :{" "}
            <span className="pl-2 text-gray-900">shivapal@gmail.com</span>{" "}
          </p>
          <span> </span>
        </div>
        <div className="flex justify-between items-center px-4 bg-white">
          <p className="flex items-center text-sm">
            <MdAddIcCall size={13} className="mr-1" /> :{" "}
            <span className="pl-2 text-gray-900">
              + 91 1234567890 / 1234567890
            </span>
          </p>
          <span> </span>
        </div>
        <div className="flex justify-between items-center px-4 bg-white">
          <p className="flex items-center text-sm">
            <FaMapMarkerAlt size={13} className="mr-1" /> :
            <span className="pl-2 text-gray-900">data, 123456,</span>
          </p>
          <div>
            {" "}
            <button className="bg-[#ED9C28] text-white px-1.5  ">
              {" "}
              <IoIosCopy />{" "}
            </button>{" "}
          </div>
        </div>
      </div>
      {/* second */}
      <div className="col-span-12 md:col-span-4 border-t-2 border-[#ED9C28] rounded-md shadow-xl">
        <div className="flex justify-between items-center px-4  bg-white ">
          <div className=" flex items-center text-sm text-gray-600">
            {" "}
            <p className=" w-24"> Created by </p>{" "}
            <span className="text-gray-900 pl-2"> : Shiva </span>{" "}
          </div>
        </div>
        <div className="flex justify-between items-center px-4 bg-white ">
          <div className=" flex items-center text-sm text-gray-600">
            {" "}
            <p className="w-24"> Source </p>{" "}
            <span className="text-gray-900 pl-2">: 101_B70sec </span>{" "}
          </div>
        </div>
        <div className="flex justify-between items-center px-4 bg-white ">
          <div className=" flex items-center text-sm text-gray-600">
            {" "}
            <span className=" w-24"> Created on </span>{" "}
            <span className="text-gray-900 pl-2"> : 27 Dec 2024 06:57 </span>{" "}
          </div>
        </div>
        <div className="flex justify-between items-center px-4 bg-white ">
          <div className="flex items-center text-sm text-gray-600">
            {" "}
            <p className=" w-24"> Payment due </p>{" "}
            <span className="text-gray-900 pl-2">: 27 Dec 2024 06:57 </span>{" "}
          </div>
          <div>
            {" "}
            <button className="bg-[#ED9C28] text-white px-1.5  ">
              {" "}
              <IoIosCopy />{" "}
            </button>{" "}
          </div>
        </div>
      </div>
      {/* third */}
      <div className="col-span-12 md:col-span-4 border-t-2 border-[#418CF1] rounded-md shadow-xl">
        <div className="flex justify-between items-center px-4  bg-white ">
          <span className="flex items-center text-sm text-gray-800">Gross</span>
          <p className="text-xs">455.33 USD</p>
        </div>
        <div className="flex justify-between items-center px-4  bg-white ">
          <span className="flex items-center text-sm text-gray-800">Nett</span>
          <p className="text-xs">455.33 USD</p>
        </div>
        <div className="flex justify-between items-center px-4  bg-white ">
          <span className="flex items-center text-sm text-gray-800">
            Profit
          </span>
          <p className="text-xs">455.33 USD</p>
        </div>
        <div className="flex justify-between items-center px-4  bg-white ">
          <span className="flex items-center text-sm text-gray-800">Paid</span>
          <p className="text-xs">455.33 USD</p>
        </div>
      </div>

      {/* start ----------------info ------------------------------------------------- */}
      <div className="col-span-12 mt-5">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2">
            <div className="flex flex-col gap-1 w-full max-w-xs mx-auto mt-12 border border-gray-300 py-3 px-2">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className={`flex items-center gap-2 px-2 py-2 rounded-md hover:bg-gray-900 hover:text-white text-gray-700 text-sm font-medium shadow-md`}
                >
                  {/* Icon */}
                  <div className={`text-xl   ${button.hoverColor}`}>
                    {button.icon}
                  </div>
                  {/* Button Name */}
                  <span>{button.name}</span>
                </button>
              ))}
            </div>
          </div>
          {/* all details ----------------------------------- start */}
          <div className="col-span-12 md:col-span-10">
            {/* icon detils ----------- */}
            <div className="flex items-center">
              {" "}
              <h2 className="text-gray-600 font-medium"> Add Offline: </h2>
              <div className="ml-4 flex items-center gap-2">
                <div className="relative group">
                  {/* Button */}
                  <button className="p-0.5 border hover:bg-[#DAE6FF] hover:border-blue-400 border-gray-300 bg-gray-100 text-[#2196F3] text-3xl font-bold rounded-sm">
                    <MdOutlineFlightTakeoff />
                  </button>

                  {/* Popup */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 hidden group-hover:block bg-white border border-gray-400 shadow-lg rounded-md px-6 py-2 text-center">
                    <p className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                      Add flight details manually
                    </p>
                    {/* Large Triangle Arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-400"></div>
                  </div>
                </div>
                <div className="relative group">
                  {/* Second Button */}
                  <button className="p-0.5 border hover:bg-[#FAE5D3] hover:border-[#FF9800] border-gray-300 bg-gray-100 text-[#FF9800] text-3xl font-bold rounded-sm">
                    <MdHotel />
                  </button>

                  {/* Popup */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 hidden group-hover:block bg-white border border-gray-400 shadow-lg rounded-md px-6 py-2 text-center">
                    <p className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                      Add hotel details manually
                    </p>
                    {/* Large Triangle Arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-400"></div>
                  </div>
                </div>
                <div className="relative group">
                  {/* Third Button */}
                  <button className="p-0.5 border hover:bg-[#E8DAEF] hover:border-[#9C27B0] border-gray-300 bg-gray-100 text-[#9C27B0] text-3xl font-bold rounded-sm">
                    <FaCar />
                  </button>

                  {/* Popup */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 hidden group-hover:block bg-white border border-gray-400 shadow-lg rounded-md px-6 py-2 text-center">
                    <p className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                      Add transfer details manually
                    </p>
                    {/* Large Triangle Arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-400"></div>
                  </div>
                </div>
                <div className="relative group">
                  {/* Third Button */}
                  <button className="p-0.5 border hover:bg-[#F8D7D0] hover:border-[#F44336] border-gray-300 bg-gray-100 text-[#F44336] text-3xl font-bold rounded-sm">
                    <IoMdCamera />
                  </button>

                  {/* Popup */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 hidden group-hover:block bg-white border border-gray-400 shadow-lg rounded-md px-6 py-2 text-center">
                    <p className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                      Add slight seeing details manually
                    </p>
                    {/* Large Triangle Arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-400"></div>
                  </div>
                </div>
                <div className="relative group">
                  {/* Third Button */}
                  <button className="p-0.5 border hover:bg-[#D4EDDA] hover:border-[#4CAF50] border-gray-300 bg-gray-100 text-[#4CAF50] text-3xl font-bold rounded-sm">
                    <FaCarAlt />
                  </button>

                  {/* Popup */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 hidden group-hover:block bg-white border border-gray-400 shadow-lg rounded-md px-6 py-2 text-center">
                    <p className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                      Add car details manually
                    </p>
                    {/* Large Triangle Arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-400"></div>
                  </div>
                </div>
                <div className="relative group">
                  {/* Third Button */}
                  <button className="p-0.5 border hover:bg-[#F1CCCD] hover:border-[#B90005] border-gray-300 bg-gray-100 text-[#B90005] text-3xl font-bold rounded-sm">
                    <FaBoxOpen />
                  </button>

                  {/* Popup */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 hidden group-hover:block bg-white border border-gray-400 shadow-lg rounded-md px-6 py-2 text-center">
                    <p className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                      Add other product manually
                    </p>
                    {/* Large Triangle Arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-400"></div>
                  </div>
                </div>
                <div className="relative group">
                  {/* Third Button */}
                  <button className="p-0.5 border hover:bg-[#D2EEEF] hover:border-[#00BCD4] border-gray-300 bg-gray-100 text-[#00BCD4] text-3xl font-bold rounded-sm">
                    <FaShip />
                  </button>

                  {/* Popup */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 hidden group-hover:block bg-white border border-gray-400 shadow-lg rounded-md px-6 py-2 text-center">
                    <p className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                      Add car cruise manually
                    </p>
                    {/* Large Triangle Arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-400"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* showing detsils in cards  */}
            <div className=" bg-white  rounded-md shadow-md mt-2 border-l-4 border-l-black">
              {/* Tab Headers */}
              <div className="flex bg-gray-100 border-b border-gray-900">
                {tabs.map((tab) => (
                  <div
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`flex-1 text-sm text-center py-2 cursor-pointer font-medium mr-1 rounded-t-sm flex items-center justify-center gap-2 ${
                      activeTab === tab.name
                        ? "bg-black text-white"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                  >
                    {/* Icon */}
                    <span className="text-lg">{tab.icon}</span>
                    {/* Tab Name (hidden on small devices) */}
                    <span className="hidden md:inline">{tab.name}</span>
                  </div>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6 border-2 border-gray-900">
                <h2 className="text-xl font-semibold mb-4">
                  {activeTab} Content
                </h2>

                <div className=" bg-white border border-gray-300 rounded-md shadow-md p-6">
                  {/* Card Title */}
                  <h2 className="text-xl font-bold text-gray-800 mb-4">
                    Details Overview
                  </h2>
                  {/* Table */}
                  <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left text-gray-800">
                            Name
                          </th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-gray-800">
                            Type
                          </th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-gray-800">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.map((item, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 text-gray-700">
                              {item.name}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-gray-700">
                              {item.type}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-gray-700">
                              {item.status}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-2" />
      </div>
    </div>
  );
};

export default Bookingdetails;
