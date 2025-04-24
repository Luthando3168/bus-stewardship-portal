
import { Helmet } from 'react-helmet';
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import BusSection from "@/components/sections/BusSection";
import ImpactFundsSection from "@/components/sections/ImpactFundsSection";
import Layout from "@/components/layout/Layout";
import IndexRequest from "@/components/seo/IndexRequest";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>LMCA | Professional Chartered Accountants & Business Management</title>
        <meta name="description" content="Expert chartered accountants providing comprehensive business management, investment strategies, and professional accounting services through our innovative Business Under Stewardship program." />
        <meta name="keywords" content="chartered accountants, business management, investment services, South Africa, BUS program, financial advisory, tax services, corporate finance, wealth management" />
        <link rel="canonical" href="https://www.madunacas.com/" />
      </Helmet>
      
      <div className="w-full">
        <Hero />
        <ServicesSection />
        <BusSection />
        <ImpactFundsSection />
        <div className="bg-white py-16">
          {/* Admin-only tool for requesting reindexing */}
          {localStorage.getItem("userRole") === "admin" && (
            <div className="container mx-auto px-4">
              <h3 className="text-lg font-semibold mb-2">Admin SEO Tools</h3>
              <IndexRequest />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
