
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useIsMobile } from "@/hooks/use-mobile";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-grow ${isMobile ? 'mt-24' : 'mt-16 md:mt-20'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
