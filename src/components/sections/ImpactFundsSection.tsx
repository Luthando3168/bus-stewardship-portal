
import SectionTitle from "../ui/SectionTitle";
import { Link } from "react-router-dom";
import { impactFunds } from "@/data/impact-funds";

const ImpactFundsSection = () => {
  return (
    <section className="py-16 bg-lightgray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Choose Your Business Type" 
          subtitle="Pick businesses that match your understanding and interests"
          centered
        />

        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-navyblue mb-4">How It Works (Simple!)</h3>
            <div className="space-y-4 text-lg">
              <p className="flex items-center gap-2">
                <span className="text-gold">1.</span> Save R500 monthly in your account
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gold">2.</span> Pick which business you like
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gold">3.</span> We run it, you earn from it
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link 
            to="/impact-funds" 
            className="inline-block px-8 py-4 bg-navyblue text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors text-lg"
          >
            See All Business Types You Can Own
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImpactFundsSection;
