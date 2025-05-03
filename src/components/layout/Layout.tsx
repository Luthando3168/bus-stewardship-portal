
import { ReactNode, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import PreFooter from "./PreFooter";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  schema?: Record<string, any>;
}

const Layout = ({ 
  children, 
  title = "Luthando Maduna Chartered Accountants", 
  description = "Professional accounting, business management, and investment services by LMCA.",
  schema
}: LayoutProps) => {
  const isMobile = useIsMobile();
  const location = useLocation();

  // Effect to handle scroll to top when navigation occurs
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        <link rel="canonical" href={`https://www.madunacas.com${location.pathname}`} />
        {schema && (
          <script type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        )}
      </Helmet>
      
      <Header />
      <main className="flex-grow pt-16 md:pt-20">
        {children}
      </main>
      <PreFooter />
      <Footer />
    </div>
  );
};

export default Layout;
