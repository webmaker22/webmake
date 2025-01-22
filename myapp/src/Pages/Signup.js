import React from "react";

const SignupPage = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md md:max-w-lg lg:max-w-3xl">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
        <form>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              id="address"
              placeholder="1234 Main St"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Contact Number */}
          <div className="mb-4">
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input
              type="tel"
              id="contact"
              placeholder="Enter your contact number"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* City */}
          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              id="city"
              placeholder="Enter your city"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* State and Zip */}
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
              <select
                id="state"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="w-1/2">
              <label htmlFor="zip" className="block text-sm font-medium text-gray-700">Zip Code</label>
              <input
                type="text"
                id="zip"
                placeholder="Enter your zip"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            <a href="/Pages/login" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Sign Up</a>
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/Pages/login" className="text-blue-500 hover:underline">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
