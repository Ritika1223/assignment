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
        <img
          src="assets/background.png"
          alt="Background Bus Team"
          className="w-full h-full object-cover"
          draggable="false"
        />
        <div className="absolute inset-0 bg-white bg-opacity-80"></div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 sm:py-4 w-full z-10">
        <img
          src="assets/logo2.png"
          alt="ANT Logo"
          className="h-12 sm:h-16 select-none"
          draggable="false"
        />
        <button
          onClick={() => setShowEnquiry(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1.5 px-4 rounded-full text-sm sm:text-base shadow ml-auto"
        >
          Send Enquiry
        </button>
      </div>

      {/* Main Section */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-4 z-10">

        <div className="w-full max-w-md flex flex-col items-center">

          {/* Bus Image (Mobile) */}
          <img
            src="assets/background.png"
            alt="Team Bus"
            className="block sm:hidden w-full rounded-lg mb-3 shadow"
            draggable="false"
          />

          {/* Coming Soon */}
          <div className="bg-orange-500 text-white font-bold text-lg sm:text-2xl px-6 py-1.5 rounded mb-2">
            Coming Soon!
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl font-extrabold text-black mb-2 leading-tight">
            Our new website is on its way.
          </h1>

          {/* Sub Text */}
          <p className="text-sm sm:text-lg text-black/70 max-w-sm">
            We are thrilled to announce that something exciting is coming your way! Our brand-new website is under development and will soon be ready to deliver a fresh, seamless, and user-friendly experience.
          </p>
        </div>
      </main>

      {/* Bus Animation Bottom */}
      <div className="relative z-10">
        <BusAnimation />
      </div>

      {/* Footer */}
      <footer className="text-center py-1 text-xs sm:text-sm text-black bg-white z-10">
        All Rights Reserved. Designed by A N T Soft Solution.
      </footer>

      {/* Enquiry Form Modal */}
      {showEnquiry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg relative w-11/12 max-w-lg">
            <button
              onClick={() => setShowEnquiry(false)}
              className="absolute top-3 right-4 text-gray-500 text-2xl hover:text-orange-500"
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
