
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from "@/hooks/useAuthState";

interface AuthButtonsProps {
  className?: string;
  onClick?: () => void;
  variant?: 'mobile' | 'desktop';
}

const AuthButtons: React.FC<AuthButtonsProps> = ({ 
  className = '', 
  onClick,
  variant = 'desktop'
}) => {
  const { user } = useAuthState();

  if (variant === 'mobile') {
    return (
      <div className={`flex flex-col space-y-3 ${className}`}>
        {user ? (
          <Link
            to="/user/dashboard"
            className="bg-blue-600 text-white px-4 py-2 rounded text-lg font-semibold text-center"
            onClick={onClick}
          >
            My Dashboard
          </Link>
        ) : (
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded text-lg font-semibold text-center"
            onClick={onClick}
          >
            Sign-in or Register
          </Link>
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {user ? (
        <Link
          to="/user/dashboard"
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors font-medium"
        >
          My Dashboard
        </Link>
      ) : (
        <Link
          to="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors font-medium"
        >
          Sign-in or Register
        </Link>
      )}
    </div>
  );
};

export default AuthButtons;
