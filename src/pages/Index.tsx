
import { Helmet } from 'react-helmet';
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import BusSection from "@/components/sections/BusSection";
import ImpactFundsSection from "@/components/sections/ImpactFundsSection";
import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>LMCA | Professional Chartered Accountants in South Africa</title>
        <meta name="description" content="Luthando Maduna Chartered Accountants provides professional accounting, business management, and investment services through our innovative Business Under Stewardship programme." />
        <meta name="keywords" content="chartered accountants, accounting services, business management, investments, South Africa, BUS program" />
        <link rel="canonical" href="https://www.madunacas.com/" />
      </Helmet>
      
      <div className="w-full">
        <Hero />
        <ServicesSection />
        <BusSection />
        <ImpactFundsSection />
        <div className="bg-white py-16"></div> {/* Added white spacer */}
      </div>
    </Layout>
  );
};

export default Index;
