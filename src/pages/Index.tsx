
import { Helmet } from 'react-helmet';
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import BusSection from "@/components/sections/BusSection";
import ImpactFundsSection from "@/components/sections/ImpactFundsSection";
import FoundationSection from "@/components/sections/FoundationSection";
import Layout from "@/components/layout/Layout";
import IndexRequest from "@/components/seo/IndexRequest";
import ImpactFundsShowcase from "@/components/sections/ImpactFundsShowcase";
import BookingSection from "@/components/sections/BookingSection";
import BankingSection from "@/components/sections/BankingSection";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>LMCA | Start from R500. Co-Own a Business. We Manage It For You.</title>
        <meta name="description" content="LMCA helps ordinary people co-own businesses with just R500/month. Professional chartered accountants manage everything for you - whether you're a taxi driver, teacher or football fan." />
        <meta name="keywords" content="business ownership, R500 investment, affordable business opportunities, passive income, professional business management, South Africa, BUS program, financial inclusion" />
        <link rel="canonical" href="https://www.madunacas.com/" />
      </Helmet>
      
      <div className="w-full">
        <Hero />
        <BankingSection />
        <BusSection />
        <ImpactFundsShowcase />
        <BookingSection />
        <ServicesSection />
        <ImpactFundsSection />
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
