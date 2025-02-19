import {DM_Sans} from "next/font/google";

const dmSans = DM_Sans({
  style: "normal",
  subsets: ["latin"],
});

export default function FooterSection() {
  return (
    <footer className="w-full bg-white border-t-2 border-[#6DA27D]">
      {/* Desktop View */}
      <div className="hidden md:block max-w-7xl mx-auto px-8 py-12">
        <div className="flex justify-between items-start">
          {/* Left: Logo Section */}
          <div className="flex items-center space-x-6">
            <img
              src="/images/konnexion_logo.svg"
              alt="Konnexions Logo"
              className="max-h-16 object-contain"
            />
            <img
              src="/images/campus_feed_logo.svg"
              alt="Campus Feed Logo"
              className="max-h-7"
            />
          </div>

          {/* Right: Navigation and Social Links */}
          <div className="flex flex-col space-y-6">
            {/* Navigation Links */}
            <nav>
              <ul className="flex justify-end space-x-9">
                <li><a href="/" className={`nav-link ${dmSans.className}`}>Home</a></li>
                <li><a href="/about" className={`nav-link ${dmSans.className}`}>About Us</a></li>
                <li><a href="/events" className={`nav-link ${dmSans.className}`}>Events</a></li>
                <li><a href="/contact" className={`nav-link ${dmSans.className}`}>Contact Us</a></li>
              </ul>
            </nav>

            {/* Social Media Icons */}
            <div className="flex justify-end space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                <img
                  src="/images/facebook.svg"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                <img
                  src="/images/instagram.svg"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                <img
                  src="/images/github.svg"
                  alt="Github"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="border-t-2 border-[#6DA27D] my-8"/>

        {/* Copyright Section */}
        <div className="text-center">
          <p className={`text-gray-600 text-sm ${dmSans.className}`}>© Copyright 2025, All Rights Reserved</p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden px-6 py-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center space-y-6">
          <img
            src="/images/campus_feed_logo.svg"
            alt="Campus Feed Logo"
            className="max-h-8"
          />
        </div>

        {/* Navigation Links */}
        <nav className="mt-8">
          <ul className="flex flex-wrap justify-center gap-6">
            <li><a href="/" className={`text-gray-700 hover:text-gray-900 ${dmSans.className}`}>Home</a></li>
            <li><a href="/about" className={`text-gray-700 hover:text-gray-900 ${dmSans.className}`}>About Us</a></li>
            <li><a href="/events" className={`text-gray-700 hover:text-gray-900 ${dmSans.className}`}>Events</a></li>
            <li><a href="/contact" className={`text-gray-700 hover:text-gray-900 ${dmSans.className}`}>Contact Us</a>
            </li>
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8 mt-8">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <img
              src="/images/facebook.svg"
              alt="Facebook"
              className="w-6 h-6"
            />
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <img
              src="/images/instagram.svg"
              alt="Instagram"
              className="w-6 h-6"
            />
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <img
              src="/images/github.svg"
              alt="Github"
              className="w-6 h-6"
            />
          </a>
        </div>

        {/* Horizontal Line */}
        <div className="border-t-2 border-[#6DA27D] my-8"/>

        {/* Copyright Section */}
        <div className="text-center">
          <p className={`text-gray-600 text-sm ${dmSans.className}`}>© Copyright 2025, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}