
import React from "react";
import SectionTitle from "../ui/SectionTitle";
import { Link } from "react-router-dom";

const FoundationSection = () => {
  return (
    <section className="py-20 bg-lightgray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Foundation: Giving Back Together" 
          subtitle="A portion of profits from your businesses helps children and communities in need"
          centered
        />
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-10">
          <div className="mb-6 text-center">
            <p className="text-lg text-charcoal mb-6">
              When your businesses make money, a small part goes to help those in need.
              Through the LMCA Foundation, we support education for orphans, food programs for the hungry,
              and skills training for unemployed youth in our communities.
            </p>
            
            <div className="bg-navyblue/5 p-4 rounded-lg italic text-center mb-6">
              <p className="text-navyblue text-lg mb-2">
                "Whoever is kind to the poor lends to the LORD, and he will reward them for what they have done."
              </p>
              <p className="text-sm text-gray-600">- Proverbs 19:17</p>
            </div>
            
            <p className="text-lg text-charcoal">
              By owning businesses with us, you're not just building wealth for yourself -
              you're also helping to create a better future for children and families who need it most.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-navyblue/10 p-4 rounded-lg">
              <h3 className="font-semibold text-lg text-navyblue mb-2">Our Programs:</h3>
              <ul className="list-disc list-inside space-y-1 text-charcoal">
                <li>Scholarships for orphaned children</li>
                <li>Community feeding initiatives</li>
                <li>Skills development for youth</li>
                <li>Support for elderly care</li>
              </ul>
            </div>
            <div className="bg-gold/10 p-4 rounded-lg">
              <h3 className="font-semibold text-lg text-navyblue mb-2">Your Impact:</h3>
              <ul className="list-disc list-inside space-y-1 text-charcoal">
                <li>Build businesses that create jobs</li>
                <li>Strengthen local communities</li>
                <li>Support vulnerable children</li>
                <li>Leave a lasting positive legacy</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              to="/foundation" 
              className="inline-block px-6 py-3 bg-gold text-white rounded-lg font-semibold hover:bg-lightgold transition-colors"
            >
              Learn More About Our Foundation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;
