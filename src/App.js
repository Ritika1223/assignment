import React, { useState } from "react";
import Footer from "./components/footer";
import EnquiryForm from "./components/EnquiryForm";
import BusAnimation from "./components/bus/BusAnimation";

export default function App() {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <div className="h-screen flex flex-col justify-between items-center overflow-hidden relative bg-white">
      
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

      {/* Background White for Mobile */}
      <div className="block sm:hidden absolute inset-0 bg-white"></div>

      {/* Header */}
      <header className="flex items-center justify-between w-full px-4 py-2 absolute top-0 left-0 z-20">
        <img
          src="assets/logo2.png"
          alt="ANT Logo"
          className="h-10 sm:h-20 select-none"
          draggable="false"
        />
        <button
          onClick={() => setShowEnquiry(true)}
          className="ml-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-lg py-1.5 px-4 rounded-full shadow"
        >
          Send Enquiry
        </button>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col justify-center items-center text-center relative z-10 px-4 pt-20 sm:pt-40">

        {/* Mobile Group Image */}
        <div className="block sm:hidden w-11/12 mb-2">
          <img
            src="assets/background.png"
            alt="ANT Bus Team"
            className="w-full rounded-md shadow"
            draggable="false"
          />
        </div>

        {/* Coming Soon */}
        <div className="bg-orange-500 text-white font-semibold text-sm px-4 py-1 rounded-full mb-2 sm:text-lg">
          Coming Soon!
        </div>

        {/* Title */}
        <h1 className="text-xl sm:text-5xl font-extrabold text-black mb-2">
          Our new website is on its way.
        </h1>

        {/* Description */}
        <p className="max-w-md text-black/90 text-xs sm:text-lg font-medium">
          India's Most Trusted Bus Rental Platform.
          <br />
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
      <footer className="text-center py-1 text-xs text-black bg-white font-medium relative z-10">
        All Rights Reserved. Designed by A N T Soft Solution.
      </footer>

      {/* Enquiry Modal */}
      {showEnquiry && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-start justify-center z-50">
          <div className="relative mt-16 w-[90vw] max-w-2xl">
            <button
              onClick={() => setShowEnquiry(false)}
              className="absolute top-4 right-4 text-3xl text-gray-400 hover:text-orange-500"
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
