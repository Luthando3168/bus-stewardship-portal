import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import Logo from "@/components/ui/Logo";

const Header = () => {
  const location = useLocation();
  const isMobile = useIsMobile();

  // Determine if the current path is active for styling
  const isActive = (path: string) => location.pathname === path;

  // State to open/close mobile menu
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Simplified navigation links to match image
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/bus", label: "BUS" },
  ];

  // Mobile header
  if (isMobile) {
    return (
      <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-30">
        <div className="container mx-auto flex items-center justify-between py-2 px-4">
          {/* Logo */}
          <Link to="/" className="block">
            <Logo />
          </Link>

          {/* Mobile menu button */}
          <button
            className="p-2 rounded focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile navigation menu overlay */}
          {menuOpen && (
            <>
              <div 
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={() => setMenuOpen(false)}
              />
              <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-4 transform transition-transform duration-300 ease-in-out">
                <div className="flex justify-end mb-6">
                  <button onClick={() => setMenuOpen(false)} className="p-2">
                    <X size={24} />
                  </button>
                </div>

                <div className="flex flex-col space-y-4">
                  {navLinks.map(link => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`text-lg font-semibold ${isActive(link.to) ? 'text-gold' : 'text-navyblue'}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    to="/contact"
                    className="bg-gold text-white px-4 py-2 rounded font-semibold text-center mt-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <div className="flex flex-col gap-2 mt-2">
                    <Link
                      to="/login"
                      className="bg-blue-600 text-white px-4 py-2 rounded font-semibold text-center"
                      onClick={() => setMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="bg-blue-600 text-white px-4 py-2 rounded font-semibold text-center"
                      onClick={() => setMenuOpen(false)}
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </header>
    );
  }

  // Desktop header
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-30">
      <nav className="container mx-auto flex items-center justify-between py-2 md:py-3 px-4 md:px-6 relative">
        {/* Logo (left side) */}
        <Link to="/" className="flex items-start group cursor-pointer">
          <div className="flex flex-col">
            <span className="font-montserrat font-bold text-xl md:text-2xl tracking-tight">
              <span className="text-gold border-b-2 border-gold pb-0.5">Luthando</span>
              <span className="text-navyblue ml-1"> Maduna</span>
            </span>
            <span className="font-montserrat text-xs text-navyblue tracking-wider mt-1">
              CHARTERED ACCOUNTANTS
            </span>
          </div>
        </Link>

        {/* Desktop menu/navigation */}
        <div className="flex items-center space-x-6">
          <div className="flex space-x-4">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-gray-700 hover:text-navyblue font-semibold ${
                  isActive(link.to) ? 'underline' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gold text-white px-3 py-1 rounded hover:bg-lightgold font-semibold"
            >
              Contact Us
            </Link>
          </div>
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
        </div>
      </nav>
      {/* Spacer to prevent content from being hidden under header */}
      <div className="h-5 md:h-6"></div>
    </header>
  );
};

export default Header;
