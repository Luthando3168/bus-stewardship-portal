
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "@/components/ui/Logo";
import NavLinks from './NavLinks';
import AuthButtons from './AuthButtons';
import McaDirectButton from './McaDirectButton';

const DesktopHeader: React.FC = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between px-4">
      <Link to="/" className="flex items-center">
        <Logo size="small" />
      </Link>

      <div className="flex items-center gap-6">
        <NavLinks />
        <div className="flex items-center gap-3">
          <AuthButtons />
          <McaDirectButton />
        </div>
      </div>
    </nav>
  );
};

export default DesktopHeader;
