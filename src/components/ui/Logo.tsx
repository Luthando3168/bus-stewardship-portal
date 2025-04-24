
import React from 'react';

const Logo = ({ className = '', size = 'normal', variant = 'default' }: { 
  className?: string, 
  size?: 'small' | 'normal', 
  variant?: 'default' | 'footer' 
}) => {
  const nameStyles = {
    default: {
      first: 'text-gold border-b-2 border-gold pb-0.5',
      last: 'text-navyblue ml-1'
    },
    footer: {
      first: 'text-white border-b-2 border-gold pb-0.5',
      last: 'text-gold ml-1'
    }
  };

  const styles = variant === 'footer' ? nameStyles.footer : nameStyles.default;

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-baseline gap-2">
        <span className={`font-montserrat font-bold ${size === 'small' ? 'text-lg' : 'text-xl md:text-2xl'} tracking-tight`}>
          <span className={styles.first}>Luthando</span>
          <span className={styles.last}>Maduna</span>
        </span>
      </div>
      <span className={`font-montserrat ${size === 'small' ? 'text-[10px]' : 'text-xs'} ${variant === 'footer' ? 'text-white/80' : 'text-navyblue'} tracking-wider mt-1`}>
        CHARTERED ACCOUNTANTS
      </span>
    </div>
  );
};

export default Logo;
