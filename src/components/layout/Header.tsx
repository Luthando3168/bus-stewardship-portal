
import React from 'react';
import { useIsMobile } from "@/hooks/use-mobile";
import MobileHeader from './navigation/MobileHeader';
import DesktopHeader from './navigation/DesktopHeader';

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className={`bg-white shadow-${isMobile ? 'sm' : 'md'} fixed top-0 left-0 w-full z-30 ${isMobile ? 'py-2' : 'py-3'}`}>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
    </header>
  );
};

export default Header;
