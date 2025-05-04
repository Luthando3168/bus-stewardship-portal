
import React from 'react';
import { Facebook, Instagram, Linkedin } from "lucide-react";

export const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/madunacas", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/madunacas", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/madunacas", label: "LinkedIn" },
];

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className = '' }) => {
  return (
    <div className={`flex justify-center space-x-6 ${className}`}>
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
  );
};

export default SocialLinks;
