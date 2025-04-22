
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import BusSection from "@/components/sections/BusSection";
import ImpactFundsSection from "@/components/sections/ImpactFundsSection";
import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServicesSection />
      {/* <FeaturedInvestmentsSection /> -- No longer needed, content merged with ImpactFundsSection */}
      <BusSection />
      <ImpactFundsSection />
    </Layout>
  );
};

export default Index;
