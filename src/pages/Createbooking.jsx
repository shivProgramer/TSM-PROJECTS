import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Createbooking = () => {
  const [formData, setFormData] = useState({
    branch: "",
    bookingSource: "",
    bookingType: "",
    referenceNo: "",
    remarks: "",
  });

  const nevigate =useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nevigate("/admin/bookingdetails")
    console.log("Form Data:", formData);
    // Add logic to save or send data
  };
  
  console.log("formData",formData)
  return (
    <div className="container mx-auto p-6 m-2 bg-white rounded-lg shadow-md">
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Branch Select */}
          <div>
            <label htmlFor="branch" className="block text-base font-semibold mb-1 text-gray-700">
              Branch
            </label>
            <select
              id="branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="border py-2 px-2 block w-full rounded-md border-gray-500 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">Select Branch</option>
              <option value="branch1">Branch 1</option>
              <option value="branch2">Branch 2</option>
            </select>
          </div>

          {/* Booking Source Select */}
          <div>
            <label htmlFor="bookingSource" className="block text-base font-semibold mb-1 text-gray-700">
              Booking Source
            </label>
            <select
              id="bookingSource"
              name="bookingSource"
              value={formData.bookingSource}
              onChange={handleChange}
              className="border py-2 px-2 block w-full rounded-md border-gray-500 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">Select Booking Source</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
          </div>

          {/* Booking Type Select */}
          <div>
            <label htmlFor="bookingType" className="block text-base font-semibold mb-1 text-gray-700">
              Booking Type
            </label>
            <select
              id="bookingType"
              name="bookingType"
              value={formData.bookingType}
              onChange={handleChange}
              className="border py-2 px-2 block w-full rounded-md border-gray-500 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">Select Booking Type</option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
            </select>
          </div>

          {/* Reference No Input */}
          <div>
            <label htmlFor="referenceNo" className="block text-base font-semibold mb-1 text-gray-700">
              Reference No
            </label>
            <input
              type="text"
              id="referenceNo"
              name="referenceNo"
              value={formData.referenceNo}
              onChange={handleChange}
              className="border py-2 px-2 block w-full rounded-md border-gray-500 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter Reference No"
            />
          </div>
        </div>

        {/* Remarks Textarea */}
        <div>
          <label htmlFor="remarks" className="block text-base font-semibold mb-1 text-gray-700">
            Remarks
          </label>
          <textarea
            id="remarks"
            name="remarks"
            rows="4"
            value={formData.remarks}
            onChange={handleChange}
            className="border py-2 px-2 block w-full rounded-md border-gray-500 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter Remarks"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Createbooking;
