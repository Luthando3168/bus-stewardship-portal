
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import BusSection from "@/components/sections/BusSection";
import ImpactFundsSection from "@/components/sections/ImpactFundsSection";
import FeaturedInvestmentsSection from "@/components/sections/FeaturedInvestmentsSection";
import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServicesSection />
      <FeaturedInvestmentsSection />
      <BusSection />
      <ImpactFundsSection />
    </Layout>
  );
};

export default Index;
