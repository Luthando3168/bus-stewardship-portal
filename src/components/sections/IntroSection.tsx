
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '@/components/ui/SectionTitle';

const IntroSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-[1400px] mx-auto px-4">
        <SectionTitle
          title="Welcome to MCA Direct"
          subtitle="Your Gateway to Multiple Business Ownership"
          centered
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-navyblue to-blue-900 text-white rounded-xl p-8 shadow-xl">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl leading-relaxed mb-6">
                MCA Direct revolutionizes business ownership by making it accessible to everyone. 
                With just R500 monthly, you can build a portfolio of real, profitable businesses 
                across different sectors - from retail stores to farms, properties to franchises.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gold">Build Your Empire</h3>
                  <p className="text-white/90">
                    Don't limit yourself to one business. Own parts of multiple successful 
                    ventures while we handle the day-to-day operations.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gold">Professional Management</h3>
                  <p className="text-white/90">
                    Focus on your regular job while our team of experts manages your 
                    business portfolio for maximum returns.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link 
                  to="/register"
                  className="inline-block px-8 py-4 bg-gold text-navyblue font-semibold rounded-lg hover:bg-lightgold transition-colors text-lg shadow-md"
                >
                  Start Your Business Journey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
