import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const location = useLocation();
  const isMobile = useIsMobile();

  // Determine if the current path is active for styling
  const isActive = (path: string) => location.pathname === path;

  // State to open/close mobile menu
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Close menu on route change (for better UX)
  React.useEffect(() => {
    setMenuOpen(false);
    // eslint-disable-next-line
  }, [location.pathname]);

  // Navigation links config
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/bus", label: "BUS" },
    { to: "/impact-funds", label: "Impact Funds" },
    { to: "/foundation", label: "Foundation" },
  ];

  // Logo (small size/spacing for mobile)
  const logo = (
    <Link to="/" className="flex flex-col items-start group cursor-pointer">
      <span className={`font-montserrat font-bold ${isMobile ? "text-lg" : "text-xl md:text-2xl"} tracking-tight group-hover:text-gold transition-colors`}>
        <span className="text-gold">Luthando</span>
        <span className="text-navyblue border-b-2 border-gold pb-0.5 ml-1"> Maduna</span>
      </span>
      <span className={`font-montserrat text-xs text-navyblue tracking-wider group-hover:text-gold transition-colors ${isMobile ? "text-[0.6rem]" : ""}`}>
        CHARTERED ACCOUNTANTS
      </span>
    </Link>
  );

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-30">
      <nav className="container mx-auto flex items-center justify-between py-0 px-4 md:px-6 relative">
        {/* Logo (left side) */}
        {logo}

        {/* Mobile hamburger menu (right) */}
        {isMobile ? (
          <>
            {/* Hamburger icon button */}
            <button
              className="inline-flex items-center justify-center p-2 rounded hover:bg-lightgray focus:outline-none focus:bg-lightgray"
              aria-label="Open menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu size={28} className="text-navyblue" />
            </button>

            {/* Backdrop overlay when menu is open */}
            {menuOpen && (
              <div
                className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu overlay"
              />
            )}

            {/* Slide-in mobile menu - Modified for better visibility and UX */}
            <div
              className={`fixed top-0 right-0 h-full w-64 max-w-[80vw] bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out
                  ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
              <div className="flex items-center justify-between px-5 py-2 border-b border-lightgray">
                {/* Logo inside menu (smaller) */}
                <span className="scale-90 origin-left">{logo}</span>
                <button
                  className="ml-2 p-2 rounded hover:bg-lightgray"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                >
                  <X size={26} className="text-navyblue" />
                </button>
              </div>

              <div className="flex flex-col gap-1 px-5 py-3">
                {navLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={`text-gray-700 font-semibold py-2 px-2 rounded hover:bg-lightgray transition-colors ${isActive(link.to) ? "bg-lightgray" : ""}`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="bg-gold text-white px-3 py-2 rounded font-semibold text-center mt-2 hover:bg-lightgold"
                >
                  Contact Us
                </Link>
                <div className="flex gap-2 mt-2">
                  <Link
                    to="/login"
                    className="bg-blue-600 text-white w-1/2 px-0 py-2 rounded font-semibold text-center hover:bg-blue-700"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="bg-blue-600 text-white w-1/2 px-0 py-2 rounded font-semibold text-center hover:bg-blue-700"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Desktop menu/navigation */
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
        )}
      </nav>
      {/* Spacer to prevent content from being hidden under header */}
      <div className="h-5 md:h-6"></div>
    </header>
  );
};

export default Header;
