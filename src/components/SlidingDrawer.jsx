import React, { useState } from "react";
import { FaPlus, FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const SlidingDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen); // Toggle the drawer visibility
  };

  const handleBackClick = () => {
    setIsOpen(false); // Close the drawer when the back button is clicked
  };

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={toggleDrawer}
        className="bg-[#ED9C28] text-white p-0.5 px-1.5 py-0 rounded-md"
        title="Edit Client Details"
      >
        <FaPlus size={13} />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={toggleDrawer} // Close the drawer when clicking on the backdrop
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}

      {/* Sliding Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white shadow-lg border-l border-gray-300 transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "90%" }} // Drawer width is 80% of the screen width
      >
        {/* Header with Back Button */}
        <div className="flex justify-between items-center p-4 bg-gray-200 text-gray-900 px-20">
         
          <h2 className="text-lg font-semibold"> Select Client for Booking</h2>
          <button onClick={handleBackClick} className="text-gray-900 hover:text-black  ">
            <FaArrowRight  size={24}/>
          </button>
          
        </div>

        {/* Form */}
        <div className="p-4 overflow-y-auto">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Array.from({ length: 20 }).map((_, index) => (
              <div key={index}>
                <label
                  htmlFor={`input${index}`}
                  className="block text-sm font-medium text-gray-700"
                >
                  Field {index + 1}
                </label>
                <input
                  type="text"
                  id={`input${index}`}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-[#ED9C28] focus:border-[#ED9C28]"
                />
              </div>
            ))}
            <button
              type="submit"
              className="bg-[#ED9C28] text-white px-3 py-2 rounded-md col-span-2"
            >
              Save
            </button>
          </form>
        </div>
      </div>

      {/* Hide other content when the drawer is open */}
      {isOpen && (
        <div className="fixed inset-0 z-30 bg-white opacity-0 pointer-events-none"></div>
      )}
    </div>
  );
};

export default SlidingDrawer;
