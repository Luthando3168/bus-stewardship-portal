
import React from 'react';
import { Link } from "react-router-dom";
import SectionTitle from '../ui/SectionTitle';

const ImpactFundsShowcase = () => {
  return (
    <section className="py-16 bg-lightgray">
      <div className="container max-w-[1400px] mx-auto px-4">
        <SectionTitle
          title="Build Your Business Empire"
          subtitle="Browse our selection of professionally managed businesses and choose what interests you"
          centered
        />
        
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md text-center mb-12">
            <h3 className="text-2xl font-bold text-navyblue mb-6">How to Get Started</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <div className="text-gold text-xl font-bold">1.</div>
                <h4 className="font-semibold text-lg">Choose Businesses</h4>
                <p className="text-gray-600">Pick from our range of business types. You can own multiple!</p>
              </div>
              <div className="space-y-2">
                <div className="text-gold text-xl font-bold">2.</div>
                <h4 className="font-semibold text-lg">Quick Registration</h4>
                <p className="text-gray-600">Simple registration process with basic documents needed</p>
              </div>
              <div className="space-y-2">
                <div className="text-gold text-xl font-bold">3.</div>
                <h4 className="font-semibold text-lg">Start With R500</h4>
                <p className="text-gray-600">Begin your business ownership journey with just R500 monthly</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-navyblue text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
            <p className="mb-6">Register now and start building your business portfolio with just R500 monthly</p>
            <Link 
              to="/impact-funds" 
              className="inline-block px-8 py-4 bg-gold text-navyblue font-semibold rounded-lg hover:bg-lightgold transition-colors text-lg"
            >
              See All Business Types
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactFundsShowcase;

