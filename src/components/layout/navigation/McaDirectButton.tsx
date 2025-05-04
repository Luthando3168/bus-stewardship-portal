
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface McaDirectButtonProps {
  className?: string;
  onClick?: () => void;
  variant?: 'mobile' | 'desktop';
}

const McaDirectButton: React.FC<McaDirectButtonProps> = ({ 
  className = '', 
  onClick,
  variant = 'desktop'
}) => {
  const navigate = useNavigate();
  
  const handleMcaDirectClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Now always navigate to user dashboard, regardless of auth status
    navigate('/user/dashboard');
    if (onClick) onClick();
  };

  if (variant === 'mobile') {
    return (
      <a
        href="#"
        onClick={handleMcaDirectClick}
        className={`bg-gold text-navyblue px-4 py-2.5 rounded text-xl font-bold text-center ${className}`}
      >
        MCA Direct<sup className="text-xs ml-0.5">™</sup>
      </a>
    );
  }

  return (
    <a
      href="#"
      onClick={handleMcaDirectClick}
      className={`bg-gold text-navyblue px-4 py-2 rounded-md hover:bg-gold/90 font-bold text-sm transition-colors ${className}`}
    >
      MCA Direct<sup className="text-xs ml-0.5">™</sup>
    </a>
  );
};

export default McaDirectButton;
