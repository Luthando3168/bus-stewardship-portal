import React from 'react';
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "@/components/ui/Logo";

const Footer = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/Lifestylefarmsclub", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/LMCA_ZA", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/in/luthando-isaac-maduna-87267257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com/@LMCA_SA", label: "Youtube" }
  ];

  return (
    <footer className="bg-navyblue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Logo variant="footer" />
            <p className="font-lato text-sm mt-4 text-gray-300">
              We help everyday people own businesses and grow their money. 
              Our team manages everything, so you can sit back and watch your investment grow.
            </p>
            <p className="font-lato text-sm mt-4 text-gray-300 opacity-75">
              Professional Number: 20055210
            </p>
            <p className="font-lato text-sm text-gray-300 opacity-75">
              Business Reg: 2019/621826/07
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="font-montserrat font-semibold text-md mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services#accounting" className="font-lato text-sm text-gray-300 hover:text-gold transition-colors">
                  Accounting & Bookkeeping
                </Link>
              </li>
              <li>
                <Link to="/services#tax" className="font-lato text-sm text-gray-300 hover:text-gold transition-colors">
                  Tax Services
                </Link>
              </li>
              <li>
                <Link to="/services#company" className="font-lato text-sm text-gray-300 hover:text-gold transition-colors">
                  Company Registration
                </Link>
              </li>
              <li>
                <Link to="/services#finance" className="font-lato text-sm text-gray-300 hover:text-gold transition-colors">
                  Corporate Finance
                </Link>
              </li>
              <li>
                <Link to="/services#business" className="font-lato text-sm text-gray-300 hover:text-gold transition-colors">
                  Business Development
                </Link>
              </li>
              <li>
                <Link to="/services#consulting" className="font-lato text-sm text-gray-300 hover:text-gold transition-colors">
                  Consulting Services
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-montserrat font-semibold text-md mb-4">Impact Funds</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/impact-funds#myfarm" className="font-lato text-sm text-gray-300 hover:text-gold transition-colors">
                  MyFarm Impact Fund
                </Link>
              </li>
              <li>
                <Link to="/impact-funds#myproperty" className="font-lato text-sm text-gray-300 hover:text-gold transition-colors">
                  MyProperty Impact Fund
                </Link>
              </li>
              <li>
                <Link to="/impact-funds#myfranchise" className="font-lato text-sm text-gray-300 hover:text-gold transition-colors">
                  MyFranchise Impact Fund
                </Link>
              </li>
              <li>
                <Link to="/impact-funds" className="font-lato text-sm text-gold hover:underline transition-colors font-semibold">
                  View All Impact Funds
                </Link>
              </li>
              <li>
                <Link to="/foundation" className="font-lato text-sm text-gray-300 hover:text-gold transition-colors">
                  Luthando Maduna Foundation
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-montserrat font-semibold text-md mb-4">Connect With Us</h4>
            <div className="flex items-center space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-700">
              <h4 className="font-montserrat font-semibold text-md mb-4">Contact Us</h4>
              <address className="not-italic">
                <p className="font-lato text-sm text-gray-300 mb-2">
                  28 Beacon Avenue, Linbro Park AH
                </p>
                <p className="font-lato text-sm text-gray-300 mb-2">
                  Sandton, 2065
                </p>
                <p className="font-lato text-sm text-gray-300 mb-2">
                  <a href="tel:+27620193208" className="hover:text-gold transition-colors">
                    062 019 3208
                  </a>
                </p>
                <p className="font-lato text-sm text-gray-300 mb-2">
                  <a href="mailto:info@madunacas.com" className="hover:text-gold transition-colors">
                    info@madunacas.com
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-300">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h5 className="font-montserrat font-semibold mb-1 text-white text-sm">Client Verification</h5>
                <p className="font-lato text-xs">All clients undergo KYC verification, sign engagement letters, and complete risk assessments.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h5 className="font-montserrat font-semibold mb-1 text-white text-sm">Fund Management</h5>
                <p className="font-lato text-xs">Funds managed via Standard Bank Third Party Platform with secure administration and regular reporting.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="font-montserrat font-semibold mb-1 text-white text-sm">Investment Disclaimer</h5>
                <p className="font-lato text-xs">Past performance doesn't guarantee future results. Investments may be illiquid and carry risks. Read all documents carefully.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-lato text-sm text-gray-400">
              &copy; {currentYear} Luthando Maduna Chartered Accountants (Pty) Ltd. Reg: 2019/621826/07. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-6">
                <Link to="/privacy" className="font-lato text-sm text-gray-400 hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="font-lato text-sm text-gray-400 hover:text-gold transition-colors">
                  Terms of Service
                </Link>
              </div>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <img 
                  src="/lovable-uploads/98d6869e-a552-4731-9f0c-6dce07a2db48.png" 
                  alt="CAW Network Member" 
                  className="h-20 w-auto"
                />
                <img 
                  src="/lovable-uploads/9c21e28f-36c0-493e-af52-6ae0e38e3712.png" 
                  alt="SAICA Member" 
                  className="h-20 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
