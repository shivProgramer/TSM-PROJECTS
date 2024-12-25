import React from 'react';

const Createbooking = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Booking</h2>
      <form className="space-y-4">
        {/* Branch Select */}
        <div>
          <label htmlFor="branch" className="block text-sm font-medium text-gray-700">
            Branch
          </label>
          <select
            id="branch"
            name="branch"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">Select Branch</option>
            <option value="branch1">Branch 1</option>
            <option value="branch2">Branch 2</option>
          </select>
        </div>

        {/* Booking Source Select */}
        <div>
          <label htmlFor="bookingSource" className="block text-sm font-medium text-gray-700">
            Booking Source
          </label>
          <select
            id="bookingSource"
            name="bookingSource"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">Select Booking Source</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </div>

        {/* Booking Type Select */}
        <div>
          <label htmlFor="bookingType" className="block text-sm font-medium text-gray-700">
            Booking Type
          </label>
          <select
            id="bookingType"
            name="bookingType"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">Select Booking Type</option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
          </select>
        </div>

        {/* Reference No Input */}
        <div>
          <label htmlFor="referenceNo" className="block text-sm font-medium text-gray-700">
            Reference No
          </label>
          <input
            type="text"
            id="referenceNo"
            name="referenceNo"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter Reference No"
          />
        </div>

        {/* Remarks Textarea */}
        <div>
          <label htmlFor="remarks" className="block text-sm font-medium text-gray-700">
            Remarks
          </label>
          <textarea
            id="remarks"
            name="remarks"
            rows="4"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm resize-none"
            placeholder="Enter Remarks"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div> 
  );
};

export default Createbooking;
