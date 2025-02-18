export default function FooterSection() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-6" style={{ borderTopColor: '#6DA27D' }}>
      {/* Desktop View */}
      <div className="hidden md:flex justify-between items-center px-6 lg:px-12">
        {/* Left Section: Logos */}
        <div className="flex items-center space-x-6">
          <img
            src="images/konnexion_logo.svg"
            alt="Konnexions Logo"
            className="max-h-12"
          />
          <img
            src="images/campus_feed_logo.svg"
            alt="Campus Feed Logo"
            className="max-h-5"
          />
        </div>


        <div className="flex space-x-12">
          <ul className="flex space-x-6 text-gray-700">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>

          <div className="flex space-x-4 text-gray-700">
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-pink-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-800">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col items-center text-center space-y-4 px-6">
        <img src="images/campus_feed_logo.svg" alt="Campus Feed Logo" className="h-10" />

        <ul className="flex space-x-6 text-gray-700">
          <li>
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Features
            </a>
          </li>
        </ul>

        <div className="flex space-x-4 text-gray-700">
          <a href="#" className="hover:text-blue-500">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-blue-500">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-pink-500">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-gray-800">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="my-4 mx-10" style={{ borderColor: '#6DA27D' }} />

      {/* Copyright Text */}
      <p className="text-center text-sm text-gray-600">
        © Copyright 2025, All Rights Reserved
      </p>
    </footer>
  );
}
