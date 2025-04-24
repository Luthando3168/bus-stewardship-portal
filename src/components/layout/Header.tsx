import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Home, Info, HelpCircle, Briefcase, Bus, Building, DollarSign, PhoneCall, Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";
import { useAuthState } from "@/hooks/useAuthState";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { user } = useAuthState();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { to: "/", label: "Home", icon: Home },
    { to: "/about", label: "About", icon: Info },
    { to: "/how-we-work", label: "How We Work", icon: HelpCircle },
    { to: "/services", label: "Services", icon: Briefcase },
    { to: "/bus", label: "BUS", icon: Bus },
    { to: "/foundation", label: "Foundation", icon: Building },
    { to: "/impact-funds", label: "Impact Funds", icon: DollarSign },
    { to: "/contact", label: "Contact", icon: PhoneCall },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/madunacas", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/madunacas", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/madunacas", label: "LinkedIn" },
  ];

  const handleMcaDirectClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/user/dashboard');
  };

  if (isMobile) {
    return (
      <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-30">
        <div className="container mx-auto flex items-center justify-between py-2 px-4">
          <Link to="/" className="block">
            <Logo size="small" />
          </Link>

          <div className="flex items-center gap-3">
            <button
              className="p-2 rounded focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {menuOpen && (
            <>
              <div 
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={() => setMenuOpen(false)}
              />
              <div className="fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 overflow-hidden">
                <div className="flex flex-col h-full">
                  <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                    <button onClick={() => setMenuOpen(false)} className="p-1">
                      <X size={20} />
                    </button>
                    <Logo size="small" className="scale-75" />
                  </div>

                  <div className="p-4 overflow-y-auto flex-1">
                    <nav className="flex flex-col space-y-2.5">
                      {navLinks.map(link => (
                        <Link
                          key={link.to}
                          to={link.to}
                          className={`flex items-center space-x-2 text-[0.95rem] font-semibold ${
                            isActive(link.to) ? 'text-gold' : 'text-navyblue'
                          }`}
                          onClick={() => setMenuOpen(false)}
                        >
                          <link.icon size={15} />
                          <span>{link.label}</span>
                        </Link>
                      ))}
                    </nav>

                    <div className="mt-6 flex flex-col space-y-3">
                      <Link
                        to="/login"
                        className="bg-blue-600 text-white px-4 py-2 rounded text-lg font-semibold text-center"
                        onClick={() => setMenuOpen(false)}
                      >
                        Sign-in or Register
                      </Link>
                      <a
                        href="#"
                        onClick={(e) => {
                          handleMcaDirectClick(e);
                          setMenuOpen(false);
                        }}
                        className="bg-gold text-navyblue px-4 py-2.5 rounded text-xl font-bold text-center"
                      >
                        MCA Direct<sup className="text-xs ml-0.5">™</sup>
                      </a>
                    </div>

                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <div className="flex flex-col space-y-2">
                        <a href="tel:0620193208" className="flex items-center space-x-2 text-[0.95rem] text-gray-600">
                          <Phone size={15} />
                          <span>062 019 3208</span>
                        </a>
                        <a href="mailto:info@madunacas.com" className="flex items-center space-x-2 text-[0.95rem] text-gray-600">
                          <Mail size={15} />
                          <span>info@madunacas.com</span>
                        </a>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <div className="flex justify-center space-x-6">
                        {socialLinks.map(social => (
                          <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gold transition-colors"
                          >
                            <social.icon size={18} />
                            <span className="sr-only">{social.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </header>
    );
  }

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-30 py-3">
      <nav className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center">
          <Logo size="small" />
        </Link>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm text-gray-700 hover:text-navyblue font-medium transition-colors group relative ${
                  isActive(link.to) ? 'text-navyblue font-semibold' : ''
                }`}
              >
                {link.label}
                <span className={`absolute bottom-[-4px] left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full ${
                  isActive(link.to) ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors font-medium"
            >
              Sign-in or Register
            </Link>
            <a
              href="#"
              onClick={handleMcaDirectClick}
              className="bg-gold text-navyblue px-4 py-2 rounded-md hover:bg-gold/90 font-bold text-sm transition-colors"
            >
              MCA Direct<sup className="text-xs ml-0.5">™</sup>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
