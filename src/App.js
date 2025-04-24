import React, { useState } from "react";
import Footer from "./components/footer";
import EnquiryForm from "./components/EnquiryForm";
import BusAnimation from "./components/bus/BusAnimation";

export default function App() {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <div className="min-h-[100dvh] flex flex-col justify-between relative overflow-hidden">
      
      {/* Background Image for Desktop */}
      <div className="hidden sm:block absolute inset-0">
        <img
          src="assets/background.png"
          alt="ANT Bus Team Background"
          className="w-full object-cover"
          draggable="false"
        />
        <div className="absolute inset-0 bg-white bg-opacity-70" />
      </div>

      {/* Background Image for Mobile */}
      <div className="block sm:hidden absolute inset-0">
        <img
          src="assets/background.png"
          alt="Mobile Background"
          className="w-full h-full object-cover"
          draggable="false"
        />
        <div className="absolute inset-0 bg-white bg-opacity-70" />
      </div>

      {/* Header: Logo + Button */}
      <div className="w-full px-4 py-2 flex flex-wrap justify-between items-center absolute top-0 z-20">
        <img
          src="assets/logo2.png"
          alt="ANT Logo"
          className="h-12 sm:h-20 select-none"
          draggable="false"
        />
        <button
          onClick={() => setShowEnquiry(true)}
          className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-1 px-4 rounded-full shadow mt-2 sm:mt-0"
        >
          Send Enquiry
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10 h-[100dvh] pt-20 sm:pt-0">
        {/* Coming Soon Label */}
        <div className="bg-orange-600 text-white font-bold text-sm px-4 py-1 rounded mb-2 sm:text-xl sm:rounded-md sm:px-6 sm:py-2">
          Coming Soon!
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-5xl font-extrabold text-black drop-shadow mb-4">
          Our new website is on its way.
        </h1>

        {/* Description */}
        <div className="max-w-2xl text-center text-black/90 sm:text-lg font-medium px-4">
          India's Most Trusted Bus Rental Platform for Businesses. Hassle-Free, Long-Term Staff Transport Contracts, Outstation, Events, and More!
          <br />
          <span className="text-orange-600 font-semibold">
            Corporate, Group, Pilgrimage, and Leisure Bus Services
          </span>
        </div>
      </div>

      {/* Bus Animation */}
      <div className="w-full relative z-10">
        <BusAnimation />
      </div>

      {/* Footer */}
      <footer className="text-center py-2 text-xs sm:text-base text-black relative z-10 bg-white font-medium">
        All Rights Reserved. Designed by A N T Soft Solution.
      </footer>

      {/* Enquiry Modal */}
      {showEnquiry && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="relative w-[90vw] max-w-2xl">
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
