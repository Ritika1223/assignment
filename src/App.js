import React, { useState } from "react";
import Footer from "./components/footer";
import EnquiryForm from "./components/EnquiryForm";
import BusAnimation from "./components/bus/BusAnimation";

export default function App() {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-between relative overflow-hidden bg-white">
      
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

      <div className="block sm:hidden absolute inset-0 bg-white"></div>

      {/* Header */}
      <header className="flex items-center justify-between w-full p-4 sm:p-6 absolute top-0 left-0 z-20">
        <img
          src="assets/logo2.png"
          alt="ANT Logo"
          className="h-12 sm:h-20 select-none"
          draggable="false"
        />
        <button
          onClick={() => setShowEnquiry(true)}
          className="ml-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-lg py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow"
        >
          Send Enquiry
        </button>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-28 sm:pt-40 relative z-10">

        {/* Mobile Group Image */}
        <div className="block sm:hidden w-full mb-6">
          <img
            src="assets/background.png"
            alt="ANT Bus Team"
            className="w-full rounded-md shadow-lg"
            draggable="false"
          />
        </div>

        {/* Coming Soon */}
        <div className="bg-orange-500 text-white font-semibold text-base sm:text-lg px-5 py-2 rounded-full mb-4">
          Coming Soon!
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-5xl font-extrabold text-black mb-4">
          Our new website is on its way.
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-black/90 text-sm sm:text-lg mb-8 font-medium">
          India's Most Trusted Bus Rental Platform for Businesses. Hassle-Free, Long-Term Staff Transport Contracts, Outstation, Events, and More!
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
      <Footer />

      {/* Enquiry Modal */}
      {showEnquiry && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-start justify-center z-50">
          <div className="relative mt-20 w-[90vw] max-w-2xl">
            <button
              onClick={() => setShowEnquiry(false)}
              className="absolute top-3 right-4 text-3xl text-gray-400 hover:text-orange-500"
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
