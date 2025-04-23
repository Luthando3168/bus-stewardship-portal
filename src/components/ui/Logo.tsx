
import React from 'react';

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="text-gold font-montserrat font-bold text-xl md:text-2xl">
        Luthando
      </div>
      <div className="text-navyblue font-montserrat font-bold text-xl md:text-2xl -mt-1">
        Maduna
      </div>
      <div className="text-navyblue font-montserrat text-xs tracking-wider uppercase mt-1">
        CHARTERED ACCOUNTANTS
      </div>
    </div>
  );
};

export default Logo;
