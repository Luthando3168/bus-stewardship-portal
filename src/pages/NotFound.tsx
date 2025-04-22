import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-montserrat font-bold text-navyblue mb-6">404</h1>
          <p className="text-2xl font-montserrat text-charcoal mb-8">Oops! Page not found</p>
          <Link to="/" className="inline-block font-montserrat px-6 py-3 bg-gold text-navyblue rounded font-medium hover:bg-lightgold transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
