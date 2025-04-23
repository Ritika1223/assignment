import React, { useState } from "react";
import Footer from "./components/footer";
import EnquiryForm from "./components/EnquiryForm";
import BusAnimation from "./components/bus/BusAnimation";

export default function App() {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-between relative overflow-hidden">
      
      {/* Background Image for Desktop */}
      <div className="hidden sm:block absolute inset-0">
        <img
          src="assets/background.png" // Use your uploaded group+bus background here
          alt="ANT Bus Team Background"
          className="w-full h-full object-cover"
          draggable="false"
        />
        <div className="absolute inset-0 bg-white bg-opacity-70"></div>
      </div>

      {/* Background White for Mobile */}
      <div className="block sm:hidden absolute inset-0 bg-white bg-opacity-70"></div>

      {/* Header: Logo + Button */}
      <div className="flex items-center justify-between w-full p-4 absolute top-0 left-0 z-20">
        {/* Logo */}
        <img
          src="assets/logo2.png"
          alt="ANT Logo"
          className="h-16 select-none mx-auto sm:mx-0 sm:h-20"
          draggable="false"
        />
        {/* Enquiry Button */}
        <button
          onClick={() => setShowEnquiry(true)}
          className="ml-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-1.5 px-4 rounded-full shadow text-sm sm:bg-blue-600 sm:hover:bg-blue-700 sm:text-lg sm:py-2 sm:px-6"
        >
          Send Enquiry
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-between text-center relative z-10 px-4 sm:px-8 overflow-hidden sm:overflow-visible">
        
        {/* Mobile Group Image */}
        <div className="block sm:hidden mb-4">
          <img
            src="assets/background.png" // same image
            alt="ANT Bus Team"
            className="w-full rounded-lg shadow-lg"
            draggable="false"
          />
        </div>

        {/* "Coming Soon" Label */}
        <div className="bg-orange-500 text-white font-bold text-base px-4 py-1 rounded mb-2 sm:text-xl sm:px-6 sm:py-2 sm:mb-4">
          Coming Soon!
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-5xl font-extrabold text-black drop-shadow mb-2 sm:mb-4">
          Our new website is on its way.
        </h1>

        {/* Description Content */}
        <div className="max-w-md text-center text-black/90 text-sm sm:text-lg mb-4 sm:mb-8 font-medium">
          India's Most Trusted Bus Rental Platform for Businesses. Hassle-Free, Long-Term Staff Transport Contracts, Outstation, Events, and More!
          <br />
          <span className="text-orange-600 font-semibold">
            Corporate, Group, Pilgrimage, and Leisure Bus Services
          </span>
        </div>
        
      </div>

      {/* Bus Animation */}
      <div className="w-full h-32 sm:h-auto relative z-10">
        <BusAnimation />
      </div>

      {/* Footer */}
      <footer className="text-center py-2 text-sm text-black relative z-10 bg-white font-medium text-base mb-0">
        All Rights Reserved. Designed by A N T Soft Solution.
      </footer>

      {/* Enquiry Modal */}
      {showEnquiry && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-start justify-center z-50">
          <div className="relative mt-16 w-[90vw] max-w-2xl">
            <span
              className="absolute top-4 right-4 cursor-pointer text-2xl text-gray-400 hover:text-orange-500 z-10"
              onClick={() => setShowEnquiry(false)}
            >
              &times;
            </span>
            <EnquiryForm setShowEnquiry={setShowEnquiry} />
          </div>
        </div>
      )}
    </div>
  );
}
