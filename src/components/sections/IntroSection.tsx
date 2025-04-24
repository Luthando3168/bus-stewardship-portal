
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
            <h2 className="text-2xl font-bold text-navyblue text-center mb-4">Featured Business Types</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
              As a registered client on MCA Direct, you can participate in any of these professionally managed 
              businesses. Each business type offers unique opportunities to grow your wealth while contributing 
              to community development.
            </p>
            
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

            <div className="text-center space-y-4">
              <div className="bg-gray-50 rounded-lg p-6 max-w-3xl mx-auto">
                <h3 className="text-lg font-semibold text-navyblue mb-3">How You Can Participate:</h3>
                <p className="text-gray-700 mb-4">
                  Our platform allows you to become a co-owner of these diverse businesses across multiple sectors. 
                  Simply register, choose your preferred business type, and start with as little as R500 monthly savings. 
                  Our professional team handles all the management while you build your business portfolio.
                </p>
                <p className="text-gray-700">
                  View more investment categories and find the perfect business type that aligns with your financial goals and interests.
                </p>
              </div>
              <Link 
                to="/impact-funds" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-navyblue text-white rounded-lg hover:bg-blue-800 transition-colors"
              >
                See All Business Types <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gold/10 to-amber-50 rounded-xl p-6 md:p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-navyblue mb-4">Meet Thembi: From Call Centre Agent to Business Owner</h3>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                Thembi works as a call centre agent in Johannesburg, earning R8,000 monthly. Like many South Africans, 
                she dreamed of owning businesses but thought it was out of reach. That's until she discovered MCA Direct.
              </p>
              
              <div className="bg-white rounded-lg p-6 my-6">
                <h4 className="text-xl font-semibold text-navyblue mb-3">Here's How We Helped Thembi:</h4>
                <ol className="list-decimal pl-4 space-y-3">
                  <li>
                    <strong>Smart Planning:</strong> We created a 6-month investment plan where Thembi saves just R500 monthly 
                    in her bank account.
                  </li>
                  <li>
                    <strong>Bank Partnership:</strong> We worked with her bank to set up a dedicated savings pocket, making 
                    it easy to track her progress towards business ownership.
                  </li>
                  <li>
                    <strong>Portfolio Building:</strong> After 6 months, Thembi had R3,000 saved. We helped her invest in:
                    <ul className="list-disc pl-6 mt-2">
                      <li>A mini food outlet in her community (MyFoodRetail)</li>
                      <li>A small share in a property trust (MyProperty)</li>
                    </ul>
                  </li>
                </ol>
              </div>

              <p className="text-lg font-medium text-navyblue">
                Today, Thembi still works her regular job while earning extra income from her business investments - 
                all managed professionally by our team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
