import React, { useState } from "react";
import Footer from "./components/footer";
import EnquiryForm from "./components/EnquiryForm";
import BusAnimation from "./components/bus/BusAnimation";

export default function App() {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <div className="h-screen flex flex-col justify-between relative overflow-hidden">

    {/* Background */}
    <div className="hidden sm:block absolute inset-0">
      <img
        src="assets/background.png"
        alt="ANT Bus Team Background"
        className="w-full h-full object-cover"
        draggable="false"
      />
      <div className="absolute inset-0 bg-white bg-opacity-70"></div>
    </div>
  
    <div className="block sm:hidden absolute inset-0 bg-white bg-opacity-70"></div>
  
    {/* Header */}
    <div className="flex items-center justify-between w-full px-4 py-2 absolute top-0 left-0 z-20">
      <img
        src="assets/logo2.png"
        alt="ANT Logo"
        className="h-12 sm:h-20 select-none mx-auto sm:mx-0"
        draggable="false"
      />
      <button
        onClick={() => setShowEnquiry(true)}
        className="ml-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full shadow text-xs sm:text-lg sm:py-2 sm:px-6"
      >
        Send Enquiry
      </button>
    </div>
  
    {/* Main Content */}
    <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10 px-4">
  
      {/* Mobile Image */}
      <div className="block sm:hidden mb-2">
        <img
          src="assets/background.png"
          alt="ANT Bus Team"
          className="w-full rounded-md shadow-md"
          draggable="false"
        />
      </div>
  
      {/* Labels */}
      <div className="bg-orange-500 text-white font-bold text-sm sm:text-xl px-4 py-1.5 rounded mb-2 sm:mb-4">
        Coming Soon!
      </div>
  
      <h1 className="text-2xl sm:text-5xl font-extrabold text-black drop-shadow mb-2 sm:mb-4">
        Our new website is on its way.
      </h1>
  
      <div className="max-w-xl text-black/90 text-sm sm:text-lg font-medium mb-4 sm:mb-8">
        India's Most Trusted Bus Rental Platform for Businesses.<br />
        <span className="text-orange-600 font-semibold">
          Corporate, Group, Pilgrimage, and Leisure Bus Services
        </span>
      </div>
  
    </div>
  
    {/* Bus Animation */}
    <div className="w-full relative z-10 mb-2 sm:mb-0">
      <BusAnimation />
    </div>
  
    {/* Footer */}
    <footer className="text-center py-1 text-xs sm:text-base text-black bg-white relative z-10 font-medium">
      All Rights Reserved. Designed by A N T Soft Solution.
    </footer>
  
    {/* Enquiry Modal */}
    {showEnquiry && (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-start justify-center z-50">
        <div className="relative mt-12 w-[90vw] max-w-2xl">
          <span
            className="absolute top-2 right-2 cursor-pointer text-2xl text-gray-400 hover:text-orange-500 z-10"
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
