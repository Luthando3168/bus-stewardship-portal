
import { Helmet } from 'react-helmet';
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import BusSection from "@/components/sections/BusSection";
import ImpactFundsSection from "@/components/sections/ImpactFundsSection";
import FoundationSection from "@/components/sections/FoundationSection";
import Layout from "@/components/layout/Layout";
import IndexRequest from "@/components/seo/IndexRequest";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>LMCA | Own Real Businesses, We Run Them For You - Start with R500/month</title>
        <meta name="description" content="LMCA helps ordinary people own businesses with just R500/month. Professional chartered accountants manage everything for you - whether you're a taxi driver, teacher or football fan." />
        <meta name="keywords" content="business ownership, R500 investment, affordable business opportunities, passive income, professional business management, South Africa, BUS program, financial inclusion" />
        <link rel="canonical" href="https://www.madunacas.com/" />
      </Helmet>
      
      <div className="w-full">
        <Hero />
        <BusSection />
        <ImpactFundsSection />
        <ServicesSection />
        <FoundationSection />
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
