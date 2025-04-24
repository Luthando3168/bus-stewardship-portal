
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/card';
import { Store, Home, ShoppingBag, ArrowRight } from 'lucide-react';

const IntroSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-[1400px] mx-auto px-4">
        <SectionTitle
          title="Welcome to MCA Direct"
          subtitle="Created by Luthando Maduna Chartered Accountants (LMCA)"
          centered
        />
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-gradient-to-br from-navyblue to-blue-900 text-white rounded-xl p-6 md:p-8 shadow-xl">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl leading-relaxed mb-6">
                MCA Direct is a special platform created by LMCA to help everyday South Africans own real businesses. 
                Whether you're a taxi driver, teacher, or small business owner - we help you own parts of 
                professionally managed businesses with just R500 monthly.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gold">We Handle Everything</h3>
                  <p className="text-white/90">
                    Our professional team manages all the daily work while you focus on your regular job or business.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gold">Your Money Stays Safe</h3>
                  <p className="text-white/90">
                    Your money stays in your bank account until you choose which business to own - no chancers allowed!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-navyblue text-center mb-8">Featured Business Types</h2>
            
            <div className="grid gap-4 md:gap-6 md:grid-cols-3 mb-8">
              <Card className="p-6 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-amber-50 to-amber-100">
                <Store className="w-8 h-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold text-navyblue mb-3">MyFoodRetail</h3>
                <p className="text-gray-600 mb-4">
                  Own mini shopping complexes and food outlets in your community. Start with just R5,000.
                </p>
              </Card>

              <Card className="p-6 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
                <Home className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-navyblue mb-3">MyProperty</h3>
                <p className="text-gray-600 mb-4">
                  Own property that makes money through rent every month. Start with R2,000.
                </p>
              </Card>

              <Card className="p-6 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-red-50 to-red-100">
                <ShoppingBag className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-navyblue mb-3">MyFranchise</h3>
                <p className="text-gray-600 mb-4">
                  Own parts of famous brand stores like Steers or Debonairs. Start with R5,000.
                </p>
              </Card>
            </div>

            <div className="text-center">
              <Link 
                to="/impact-funds" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-navyblue text-white rounded-lg hover:bg-blue-800 transition-colors"
              >
                See All Business Types <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
