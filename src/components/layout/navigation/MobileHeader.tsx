
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';
import ContactInfo from './ContactInfo';
import AuthButtons from './AuthButtons';
import McaDirectButton from './McaDirectButton';

const MobileHeader: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
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
                <NavLinks onClick={() => setMenuOpen(false)} variant="mobile" />

                <div className="mt-6">
                  <AuthButtons 
                    onClick={() => setMenuOpen(false)} 
                    variant="mobile" 
                  />
                  <div className="mt-3">
                    <McaDirectButton 
                      onClick={() => setMenuOpen(false)} 
                      variant="mobile" 
                    />
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-gray-100">
                  <ContactInfo />
                </div>

                <div className="mt-3 pt-3 border-t border-gray-100">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileHeader;
