import React from "react";
import { FaFolder } from "react-icons/fa";
import { FaList } from "react-icons/fa";
const Dashboard = () => {
  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 p-4">
      {/* First Column */}
      <div className="col-span-12 md:col-span-6 border-t-2 border-[#418CF1] rounded-md">
        <div className="px-4 py-1 shadow-2xl bg-white rounded-md">
          <h2 className="text-lg text-gray-700 pb-2">Enquiry / Bookings</h2>
          <hr className="py-1"/>
          <div className="my-2 pl-10 flex items-center gap-2">
          <p className="text-gray-600 ">Booking : </p>
          <button className="bg-gray-200 hover:bg-gray-300 py-2 px-2 rounded-sm "> <FaFolder className="text-[#7DAF42]" size={25}/> </button>
          <button className="bg-gray-200 hover:bg-gray-300 py-2 px-2 rounded-sm "> <FaList className="text-[#7DAF42]" size={25}/> </button>
          </div>
        </div>
      </div>

      {/* Second Column */}
      <div className="col-span-12 md:col-span-6 grid grid-cols-12 gap-4">
        {/* First Card in Second Column */}
        <div className="col-span-12 md:col-span-6 border-t-2 border-warning-light rounded-md">
        <div className="px-4 py-1 shadow-2xl bg-white rounded-md">
          <h2 className="text-lg text-gray-700 pb-2">Clients</h2>
          <hr className="py-1"/>
          <div className="p-2"></div>
        </div>
        </div>

       
      </div>
    </div>
  );
};

export default Dashboard;
