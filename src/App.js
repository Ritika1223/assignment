import React, { useState } from "react";
import Footer from "./components/footer";
import EnquiryForm from "./components/EnquiryForm";
import BusAnimation from "./components/bus/BusAnimation";

export default function App() {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-between relative overflow-hidden">
      
      {/* Background for Desktop */}
      <div className="hidden sm:block absolute inset-0">
        <img
          src="assets/background.png"
          alt="ANT Bus Team Background"
          className="w-full h-full object-cover"
          draggable="false"
        />
        <div className="absolute inset-0 bg-white bg-opacity-70"></div>
      </div>

      {/* White Background for Mobile */}
      <div className="block sm:hidden absolute inset-0 bg-white"></div>

      {/* Header */}
      <div className="flex items-center justify-between w-full p-4 absolute top-0 left-0 z-20 max-w-7xl mx-auto">
        <img
          src="assets/logo2.png"
          alt="ANT Logo"
          className="h-14 select-none sm:h-20"
          draggable="false"
        />
        <button
          onClick={() => setShowEnquiry(true)}
          className="ml-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-full shadow text-sm sm:text-lg"
        >
          Send Enquiry
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center relative z-10 w-full px-4 pt-32 sm:pt-48 text-center">
        
        {/* Mobile Group Image */}
        <div className="block sm:hidden w-full mb-4">
          <img
            src="assets/background.png"
            alt="ANT Bus Team"
            className="w-full rounded-lg shadow"
            draggable="false"
          />
        </div>

        {/* Coming Soon Tag */}
        <div className="bg-orange-500 text-white font-bold text-xl sm:text-2xl px-6 py-2 rounded mb-4">
          Coming Soon!
        </div>

        {/* Main Title */}
        <h1 className="text-2xl sm:text-5xl font-extrabold text-black drop-shadow mb-4 leading-tight">
          Our new website is on its way.
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-black/90 sm:text-lg font-medium mb-6 px-2">
          India's Most Trusted Bus Rental Platform for Businesses. Hassle-Free, Long-Term Staff Transport Contracts, Outstation, Events, and More!<br />
          <span className="text-orange-600 font-semibold">
            Corporate, Group, Pilgrimage, and Leisure Bus Services
          </span>
        </p>

      </main>

      {/* Bus Animation */}
      <div className="w-full relative z-10">
        <BusAnimation />
      </div>

      {/* Footer */}
      <footer className="text-center py-2 text-sm text-black font-medium bg-white relative z-10">
        All Rights Reserved. Designed by A N T Soft Solution.
      </footer>

      {/* Enquiry Form Modal */}
      {showEnquiry && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="relative w-[90vw] max-w-2xl bg-white rounded-lg p-6">
            <button
              onClick={() => setShowEnquiry(false)}
              className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-orange-500"
            >
              &times;
            </button>
            <EnquiryForm setShowEnquiry={setShowEnquiry} />
          </div>
        </div>
      )}
    </div>
  );
}
