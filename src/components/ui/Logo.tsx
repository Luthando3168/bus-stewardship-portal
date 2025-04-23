
import React from 'react';

const Logo = ({ className = '', size = 'normal' }: { className?: string, size?: 'small' | 'normal' }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-baseline gap-2">
        <span className={`font-montserrat font-bold ${size === 'small' ? 'text-lg' : 'text-xl md:text-2xl'} tracking-tight`}>
          <span className="text-gold border-b-2 border-gold pb-0.5">Luthando</span>
          <span className="text-navyblue ml-1">Maduna</span>
        </span>
      </div>
      <span className={`font-montserrat ${size === 'small' ? 'text-[10px]' : 'text-xs'} text-navyblue tracking-wider mt-1`}>
        CHARTERED ACCOUNTANTS
      </span>
    </div>
  );
};

export default Logo;
