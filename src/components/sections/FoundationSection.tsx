
import React from "react";
import SectionTitle from "../ui/SectionTitle";
import { Link } from "react-router-dom";

const FoundationSection = () => {
  return (
    <section className="py-20 bg-lightgray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Helping Our Communities Together" 
          subtitle="Part of the money your businesses make goes to helping children and families in need"
          centered
        />
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-10">
          <div className="mb-6 text-center">
            <p className="text-lg text-charcoal mb-6">
              When your businesses make money, a small part helps those who need it most. 
              Through the LMCA Foundation, we support school children who don't have parents, 
              feed hungry families, and teach young people skills to find work.
            </p>
            
            <div className="bg-navyblue/5 p-4 rounded-lg italic text-center mb-6">
              <p className="text-navyblue text-lg mb-2">
                "Blessed is he who is kind to the needy"
              </p>
              <p className="text-sm text-gray-600">- Proverbs 14:21</p>
            </div>
            
            <p className="text-lg text-charcoal">
              By owning businesses with us, you're not just building wealth for yourself -
              you're also helping make our communities better, one family at a time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-navyblue/10 p-4 rounded-lg">
              <h3 className="font-semibold text-lg text-navyblue mb-2">How We Help:</h3>
              <ul className="list-disc list-inside space-y-1 text-charcoal">
                <li>Support children without parents</li>
                <li>Feed hungry families</li>
                <li>Train youth for jobs</li>
                <li>Help elderly people</li>
              </ul>
            </div>
            <div className="bg-gold/10 p-4 rounded-lg">
              <h3 className="font-semibold text-lg text-navyblue mb-2">Your Impact:</h3>
              <ul className="list-disc list-inside space-y-1 text-charcoal">
                <li>Create jobs in communities</li>
                <li>Help local families</li>
                <li>Support children's education</li>
                <li>Leave a lasting good legacy</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              to="/foundation" 
              className="inline-block px-6 py-3 bg-gold text-white rounded-lg font-semibold hover:bg-lightgold transition-colors"
            >
              Learn More About Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;
