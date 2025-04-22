import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Bell, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notifications] = useState([
    {
      id: 1,
      title: "New Feature Available",
      message: "Check out our latest updates",
      time: "2 mins ago"
    },
    {
      id: 2,
      title: "Welcome",
      message: "Thanks for joining us",
      time: "1 hour ago"
    }
  ]);

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "Youtube" }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="font-montserrat font-bold text-lg md:text-2xl text-navyblue">
                <span className="text-gold">LM</span> Chartered Accountants
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
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
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {notifications.length > 0 && (
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
                )}
              </Button>
              <Link
                to="/contact"
                className="font-montserrat text-sm font-medium px-4 py-2 rounded bg-navyblue text-white hover:bg-deepblue transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              {notifications.length > 0 && (
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
              )}
            </Button>
            <button
              type="button"
              className="text-charcoal hover:text-gold focus:outline-none"
              onClick={toggleMenu}
            >
              <Menu className="h-6 w-6" />
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
                to="/login"
                className="font-montserrat text-base font-medium px-4 py-2 rounded bg-navyblue text-white hover:bg-deepblue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="font-montserrat text-base font-medium px-4 py-2 rounded bg-navyblue text-white hover:bg-deepblue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
              <Link
                to="/contact"
                className="font-montserrat text-base font-medium text-charcoal hover:text-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              
              <div className="flex items-center space-x-4 py-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal hover:text-gold transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
