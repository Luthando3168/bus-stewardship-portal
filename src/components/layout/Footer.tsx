
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navyblue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="font-montserrat font-bold text-xl mb-4">
              <span className="text-gold">LM</span> Chartered Accountants
            </h3>
            <p className="font-lato text-sm mt-4 text-gray-300">
              Professional chartered accountants providing accounting, business 
              management and investment services through the Business Under 
              Stewardship (BUS) program.
            </p>
            <p className="font-lato text-sm mt-4 text-gray-300">
              SAICA ID: 20055210
            </p>
            <p className="font-lato text-sm text-gray-300">
              Reg: 2019/621826/07
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
                <Link to="/impact-funds#agri" className="font-lato text-sm text-gray-300 hover:text-gold transition-colors">
                  Sankofa Agri Impact Fund
                </Link>
              </li>
              <li>
                <Link to="/impact-funds#property" className="font-lato text-sm text-gray-300 hover:text-gold transition-colors">
                  Sankofa Property Impact Fund
                </Link>
              </li>
              <li>
                <Link to="/impact-funds#energy" className="font-lato text-sm text-gray-300 hover:text-gold transition-colors">
                  Sankofa Energy Impact Fund
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
                <a href="mailto:info@luthandoms.co.za" className="hover:text-gold transition-colors">
                  info@luthandoms.co.za
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-lato text-sm text-gray-400">
              &copy; {currentYear} Luthando Maduna Chartered Accountants. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="font-lato text-sm text-gray-400 hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="font-lato text-sm text-gray-400 hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
