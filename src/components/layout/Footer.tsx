import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "Youtube" }
  ];

  return (
    <footer className="bg-navyblue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex flex-col items-start">
              <span className="font-montserrat font-bold text-xl md:text-2xl tracking-tight">
                <span className="text-gold border-b-2 border-gold pb-0.5">Luthando</span>
                <span className="text-white"> Maduna</span>
              </span>
              <span className="font-montserrat text-xs text-white tracking-wider mt-1">
                CHARTERED ACCOUNTANTS
              </span>
            </div>
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
                <Link to="/impact-funds#enterprise" className="font-lato text-sm text-gray-300 hover:text-gold transition-colors">
                  Sankofa Enterprise Impact Fund
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
            <div className="flex items-center space-x-4 mb-4">
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

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-sm text-gray-300">
            <div>
              <h5 className="font-montserrat font-semibold mb-4 text-white">Client Verification</h5>
              <p className="font-lato mb-3">
                We exclusively work with thoroughly vetted and verified clients. All clients must complete:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Comprehensive KYC (Know Your Client) verification</li>
                <li>Client Engagement Letter signature</li>
                <li>Risk assessment and profiling</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-montserrat font-semibold mb-4 text-white">Fund Management</h5>
              <p className="font-lato mb-3">
                All client funds are managed through the Standard Bank Third Party Fund Administration Platform, ensuring:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Secure and transparent fund administration</li>
                <li>Regular reporting and monitoring</li>
                <li>Independent oversight and compliance</li>
              </ul>
            </div>

            <div>
              <h5 className="font-montserrat font-semibold mb-4 text-white">Investment Disclaimer</h5>
              <p className="font-lato">
                All investment opportunities undergo rigorous evaluation by our partner banks to mitigate risks. Past performance is not indicative of future results. Investments may be illiquid and carry significant risks. Please read all offering documents carefully.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-lato text-sm text-gray-400">
              &copy; {currentYear} Luthando Maduna Chartered Accountants. All rights reserved.
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
                  className="h-16 w-auto"
                />
                <img 
                  src="/lovable-uploads/9c21e28f-36c0-493e-af52-6ae0e38e3712.png" 
                  alt="SAICA Member" 
                  className="h-12 w-auto"
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
