
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="font-montserrat font-bold text-2xl text-navyblue">
                <span className="text-gold">LM</span> Chartered Accountants
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="font-montserrat text-sm font-medium text-charcoal hover:text-gold transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="font-montserrat text-sm font-medium text-charcoal hover:text-gold transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="font-montserrat text-sm font-medium text-charcoal hover:text-gold transition-colors"
            >
              Services
            </Link>
            <Link
              to="/bus"
              className="font-montserrat text-sm font-medium text-charcoal hover:text-gold transition-colors"
            >
              BUS Program
            </Link>
            <Link
              to="/impact-funds"
              className="font-montserrat text-sm font-medium text-charcoal hover:text-gold transition-colors"
            >
              Impact Funds
            </Link>
            <Link
              to="/contact"
              className="font-montserrat font-medium px-4 py-2 rounded bg-navyblue text-white hover:bg-deepblue transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-charcoal hover:text-gold focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-3 pb-3">
              <Link
                to="/"
                className="font-montserrat text-base font-medium text-charcoal hover:text-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="font-montserrat text-base font-medium text-charcoal hover:text-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="font-montserrat text-base font-medium text-charcoal hover:text-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/bus"
                className="font-montserrat text-base font-medium text-charcoal hover:text-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                BUS Program
              </Link>
              <Link
                to="/impact-funds"
                className="font-montserrat text-base font-medium text-charcoal hover:text-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Impact Funds
              </Link>
              <Link
                to="/contact"
                className="font-montserrat font-medium px-4 py-2 rounded bg-navyblue text-white hover:bg-deepblue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
