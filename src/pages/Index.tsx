
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import BusSection from "@/components/sections/BusSection";
import ImpactFundsSection from "@/components/sections/ImpactFundsSection";
import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="bg-white py-16"></div> {/* Blank spacer */}
      <ServicesSection />
      <BusSection />
      <ImpactFundsSection />
      <div className="bg-white py-16"></div> {/* Added white spacer */}
    </Layout>
  );
};

export default Index;
