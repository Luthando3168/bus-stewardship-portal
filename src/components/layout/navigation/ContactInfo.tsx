
import React from 'react';
import { Phone, Mail } from "lucide-react";

const ContactInfo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <a href="tel:0620193208" className="flex items-center space-x-2 text-[0.95rem] text-gray-600">
        <Phone size={15} />
        <span>062 019 3208</span>
      </a>
      <a href="mailto:info@madunacas.com" className="flex items-center space-x-2 text-[0.95rem] text-gray-600">
        <Mail size={15} />
        <span>info@madunacas.com</span>
      </a>
    </div>
  );
};

export default ContactInfo;
