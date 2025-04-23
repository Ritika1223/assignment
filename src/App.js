import React, { useState } from "react";
import Footer from "./components/footer";
import EnquiryForm from "./components/EnquiryForm";
import BusAnimation from "./components/bus/BusAnimation";

export default function App() {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col relative">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="hidden sm:block">
          <img
            src="assets/background.png"
            alt="Background Bus Team"
            className="w-full h-full object-cover"
            draggable="false"
          />
          <div className="absolute inset-0 bg-white bg-opacity-70"></div>
        </div>
        <div className="block sm:hidden bg-white w-full h-full"></div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between w-full p-4 absolute top-0 left-0 z-20 max-w-7xl mx-auto">
        <img
          src="assets/logo2.png"
          alt="ANT Logo"
          className="h-14 sm:h-20 select-none"
          draggable="false"
        />
        <button
          onClick={() => setShowEnquiry(true)}
          className="ml-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-full text-sm sm:text-lg shadow"
        >
          Send Enquiry
        </button>
      </div>

      {/* Main Section */}
      <main className="flex flex-1 flex-col justify-center items-center text-center relative z-10 px-4 mt-20 sm:mt-32">

        {/* Mobile Image */}
        <div className="block sm:hidden w-full mb-2">
          <img
            src="assets/background.png"
            alt="Team Bus"
            className="w-full rounded-lg shadow"
            draggable="false"
          />
        </div>

        {/* Coming Soon Button */}
        <div className="bg-orange-500 text-white font-bold text-lg sm:text-2xl px-6 py-2 rounded mb-2">
          Coming Soon!
        </div>

        {/* Title */}
        <h1 className="text-xl sm:text-5xl font-extrabold text-black drop-shadow mb-2 leading-tight">
          Our new website is on its way.
        </h1>

        {/* Subtext */}
        <p className="max-w-md sm:max-w-2xl text-black/80 text-sm sm:text-lg font-medium">
          We are thrilled to announce that something exciting is coming your way! Our brand-new website is under development and will soon be ready to deliver a fresh, seamless, and user-friendly experience.
        </p>
      </main>

      {/* Bus Animation Bottom */}
      <div className="relative z-10">
        <BusAnimation />
      </div>

      {/* Footer */}
      <footer className="text-center py-1 text-xs sm:text-sm text-black font-medium bg-white relative z-10">
        All Rights Reserved. Designed by A N T Soft Solution.
      </footer>

      {/* Enquiry Form */}
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
