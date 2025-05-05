
import { ReactNode } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle = ({ title, subtitle, children, centered = false, light = false }: SectionTitleProps) => {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-10`}>
      <h2 className={`font-montserrat font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 ${light ? 'text-white' : 'text-navyblue'}`}>
        {title}
      </h2>
      {subtitle && (
        <h3 className={`font-lato text-sm sm:text-base md:text-lg ${light ? 'text-gray-300' : 'text-charcoal'} max-w-3xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </h3>
      )}
      {children}
      <div className={`h-1 w-20 bg-gold mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;
