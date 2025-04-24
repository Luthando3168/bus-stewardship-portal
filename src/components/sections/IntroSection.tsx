import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/card';
import { Store, Home, ShoppingBag, ArrowRight, Scale, Briefcase } from 'lucide-react';

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
                We help you invest in professionally managed businesses with just R500 monthly.
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
            <h2 className="text-2xl font-bold text-navyblue text-center mb-4">Featured Impact Funds</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
              Through our Impact Funds, you can participate in professionally managed businesses that create positive change in communities. 
              Each fund offers unique opportunities to grow your wealth while building stronger neighborhoods.
            </p>
            
            <div className="grid gap-4 md:gap-6 md:grid-cols-3 mb-8">
              <Card className="p-6 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-amber-50 to-amber-100">
                <Store className="w-8 h-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold text-navyblue mb-3">MyFoodRetail</h3>
                <p className="text-gray-600 mb-4">
                  Own mini shopping complexes and food outlets in your community. Start with a once-off R5,000 investment.
                </p>
              </Card>

              <Card className="p-6 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
                <Home className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-navyblue mb-3">MyProperty</h3>
                <p className="text-gray-600 mb-4">
                  Own property that makes money through rent every month. Start with a once-off R2,000 investment.
                </p>
              </Card>

              <Card className="p-6 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-red-50 to-red-100">
                <ShoppingBag className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-navyblue mb-3">MyFranchise</h3>
                <p className="text-gray-600 mb-4">
                  Own parts of famous brand stores like Steers or Debonairs. Start with a once-off R1,500 investment.
                </p>
              </Card>
            </div>

            <div className="grid gap-8 md:grid-cols-2 mt-12">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-lg border-l-4 border-gold">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-navyblue/5 rounded-lg">
                    <Scale className="w-8 h-8 text-navyblue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navyblue mb-3">We Keep Things Legal</h3>
                    <p className="text-charcoal/80 mb-4">
                      We handle all the paperwork and make sure the business follows all government rules. You don't have to worry about anything.
                    </p>
                    <Link 
                      to="/how-we-work" 
                      className="inline-flex items-center text-gold hover:text-navyblue transition-colors font-semibold"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-lg border-l-4 border-gold">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-navyblue/5 rounded-lg">
                    <Briefcase className="w-8 h-8 text-navyblue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navyblue mb-3">We Give Expert Advice</h3>
                    <p className="text-charcoal/80 mb-4">
                      When the business faces challenges, we use our experience to solve problems and find new opportunities for growth.
                    </p>
                    <Link 
                      to="/services" 
                      className="inline-flex items-center text-gold hover:text-navyblue transition-colors font-semibold"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link 
                to="/how-we-work" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-navyblue text-white rounded-lg hover:bg-blue-800 transition-colors"
              >
                Learn How To Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
