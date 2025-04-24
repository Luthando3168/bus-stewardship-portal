
import { Helmet } from 'react-helmet';
import Hero from "@/components/sections/Hero";
import ImpactFundsShowcase from "@/components/sections/ImpactFundsShowcase";
import IntroSection from "@/components/sections/IntroSection";
import BusSection from "@/components/sections/BusSection";
import BookingSection from "@/components/sections/BookingSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FoundationSection from "@/components/sections/FoundationSection";
import Layout from "@/components/layout/Layout";
import IndexRequest from "@/components/seo/IndexRequest";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>LMCA | Start from R500. Co-Own a Business. We Manage It For You.</title>
        <meta name="description" content="Whether you're a taxi driver, teacher or gogo - join us! Co-own real businesses like food shops, farms, or clinics without needing big money. We handle everything." />
        <meta name="keywords" content="business ownership, R500 investment, affordable business opportunities, passive income, professional business management, South Africa, BUS program, financial inclusion" />
        <link rel="canonical" href="https://www.madunacas.com/" />
      </Helmet>
      
      <div className="w-full">
        <Hero />
        <IntroSection />
        <ImpactFundsShowcase />
        <BookingSection />
        <BusSection />
        <ServicesSection />
        <FoundationSection />
        {localStorage.getItem("userRole") === "admin" && (
          <div className="container mx-auto px-4">
            <h3 className="text-lg font-semibold mb-2">Admin SEO Tools</h3>
            <IndexRequest />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Index;
