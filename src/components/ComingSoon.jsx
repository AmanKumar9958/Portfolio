import React, { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import bgImage from "../../public/assets/bg-image.jpg"; // Add your own image in the assets folder

const ComingSoon = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-06-01T00:00:00");
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative flex items-center justify-center min-h-screen text-white text-center px-6"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Floating Elements */}
      <div className="absolute top-16 left-10 w-16 h-16 bg-purple-500 rounded-full opacity-40 animate-float"></div>
      <div className="absolute bottom-20 right-14 w-12 h-12 bg-blue-400 rounded-full opacity-50 animate-float"></div>
      <div className="absolute top-32 right-20 w-10 h-10 bg-pink-500 rounded-full opacity-60 animate-float"></div>

      {/* Main Content */}
      <div className="relative max-w-3xl">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-glow">
          Coming Soon
        </h1>
        <p className="text-lg md:text-xl mb-8">
          We're working on something exciting! Stay tuned.
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center space-x-6 text-2xl font-semibold">
          <div className="bg-white text-gray-800 px-6 py-3 rounded-lg shadow-lg backdrop-blur-md bg-opacity-30">
            {timeLeft.days || "00"} <span className="block text-sm">Days</span>
          </div>
          <div className="bg-white text-gray-800 px-6 py-3 rounded-lg shadow-lg backdrop-blur-md bg-opacity-30">
            {timeLeft.hours || "00"} <span className="block text-sm">Hours</span>
          </div>
          <div className="bg-white text-gray-800 px-6 py-3 rounded-lg shadow-lg backdrop-blur-md bg-opacity-30">
            {timeLeft.minutes || "00"} <span className="block text-sm">Minutes</span>
          </div>
          <div className="bg-white text-gray-800 px-6 py-3 rounded-lg shadow-lg backdrop-blur-md bg-opacity-30">
            {timeLeft.seconds || "00"} <span className="block text-sm">Seconds</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-10">
          <a href="#" className="text-white text-2xl hover:text-gray-300 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white text-2xl hover:text-gray-300 transition">
            <FaTwitter />
          </a>
          <a href="#" className="text-white text-2xl hover:text-gray-300 transition">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
