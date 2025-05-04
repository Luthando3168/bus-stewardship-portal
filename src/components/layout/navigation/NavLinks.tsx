
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, HelpCircle, Briefcase, Bus, Building, DollarSign, PhoneCall } from "lucide-react";

interface NavLink {
  to: string;
  label: string;
  icon: React.ElementType;
}

export const navLinks: NavLink[] = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Info },
  { to: "/how-we-work", label: "How We Work", icon: HelpCircle },
  { to: "/services", label: "Services", icon: Briefcase },
  { to: "/bus", label: "BUS", icon: Bus },
  { to: "/foundation", label: "Foundation", icon: Building },
  { to: "/impact-funds", label: "Impact Funds", icon: DollarSign },
  { to: "/contact", label: "Contact", icon: PhoneCall },
];

interface NavLinksProps {
  className?: string;
  onClick?: () => void;
  variant?: 'mobile' | 'desktop';
}

const NavLinks: React.FC<NavLinksProps> = ({ className = '', onClick, variant = 'desktop' }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  if (variant === 'mobile') {
    return (
      <nav className={`flex flex-col space-y-2.5 ${className}`}>
        {navLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={`flex items-center space-x-2 text-[0.95rem] font-semibold ${
              isActive(link.to) ? 'text-gold' : 'text-navyblue'
            }`}
            onClick={onClick}
          >
            <link.icon size={15} />
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
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
  );
};

export default NavLinks;
