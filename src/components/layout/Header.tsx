import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  // Determine if the current path is active for styling
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Existing links - assume some basic links here */}
        <div className="flex space-x-4">
          <Link
            to="/"
            className={`text-gray-700 hover:text-navyblue font-semibold ${
              isActive('/') ? 'underline' : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-gray-700 hover:text-navyblue font-semibold ${
              isActive('/about') ? 'underline' : ''
            }`}
          >
            About
          </Link>
          <Link
            to="/services"
            className={`text-gray-700 hover:text-navyblue font-semibold ${
              isActive('/services') ? 'underline' : ''
            }`}
          >
            Services
          </Link>
          <Link
            to="/bus"
            className={`text-gray-700 hover:text-navyblue font-semibold ${
              isActive('/bus') ? 'underline' : ''
            }`}
          >
            BUS
          </Link>
          <Link
            to="/impact-funds"
            className={`text-gray-700 hover:text-navyblue font-semibold ${
              isActive('/impact-funds') ? 'underline' : ''
            }`}
          >
            Impact Funds
          </Link>
          <Link
            to="/foundation"
            className={`text-gray-700 hover:text-navyblue font-semibold ${
              isActive('/foundation') ? 'underline' : ''
            }`}
          >
            Foundation
          </Link>
          
          {/* Contact Us with gold background */}
          <Link
            to="/contact"
            className="bg-gold text-white px-3 py-1 rounded hover:bg-lightgold font-semibold"
          >
            Contact Us
          </Link>
        </div>

        {/* Right side buttons: Login and Register with blue highlight */}
        <div className="flex space-x-2">
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 font-semibold"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 font-semibold"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
