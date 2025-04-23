
import React from 'react';

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <span className="font-montserrat font-bold text-xl md:text-2xl tracking-tight">
        <span className="text-gold border-b-2 border-gold pb-0.5">Luthando</span>
        <span className="text-navyblue ml-1">Maduna</span>
      </span>
      <span className="font-montserrat text-xs text-navyblue tracking-wider mt-1">
        CHARTERED ACCOUNTANTS
      </span>
    </div>
  );
};

export default Logo;
