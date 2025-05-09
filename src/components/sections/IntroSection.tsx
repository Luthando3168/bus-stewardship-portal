
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/card';
import { Store, Home, ShoppingBag, ArrowRight, HandCoins, Users } from 'lucide-react';

const IntroSection = () => {
  return <section className="py-12 sm:py-16 bg-white">
      <div className="container max-w-[1400px] mx-auto px-4">
        <SectionTitle title="Own Real Businesses with Just R500" subtitle="No big money needed - we help regular South Africans become business owners" centered />
        
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <div className="bg-gradient-to-br from-navyblue to-blue-900 text-white rounded-xl p-5 md:p-8 shadow-xl">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">Whether you're a taxi driver, spaza owner, or gogo - this is for you! Start with just R500 monthly and own real businesses like food shops, farms, or franchises. </p>
              
              <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-gold">Easy as 1-2-3</h3>
                  <p className="text-xs sm:text-sm md:text-base text-white/90">Choose your business → Save R500 monthly → We run the business for you. Simple as that!</p>
                </div>
                
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-gold">Your Money Stays Safe</h3>
                  <p className="text-xs sm:text-sm md:text-base text-white/90">Your R500 stays in your dedicated bank account until you're ready. No rushing, no pressure.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-5 md:p-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navyblue text-center mb-3 sm:mb-4">Business Types You Can Own</h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 text-center max-w-3xl mx-auto mb-6 sm:mb-8">Pick multiple businesses you understand from our product categories. 
Whether it's a shop like your uncle's or a farm like your grandmother had - choose what you know and love. Choose from our product categories according to your budget.</p>
            
            <div className="grid gap-4 md:gap-6 md:grid-cols-3 mb-6 sm:mb-8">
              <Card className="p-4 sm:p-6 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-navyblue/5 to-navyblue/10 border-t-4 border-gold">
                <Store className="w-6 h-6 sm:w-7 sm:h-7 text-gold mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-navyblue mb-2">MyFoodRetail</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                  Baba, own shops in your area. Feed your community, build your legacy. Start with R5,000.
                </p>
              </Card>

              <Card className="p-4 sm:p-6 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-navyblue/5 to-navyblue/10 border-t-4 border-gold">
                <Home className="w-6 h-6 sm:w-7 sm:h-7 text-gold mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-navyblue mb-2">MyProperty</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                  Mama, own flats that bring you money every month. Just like collecting rent, but better. Start with R2,000.
                </p>
              </Card>

              <Card className="p-4 sm:p-6 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-navyblue/5 to-navyblue/10 border-t-4 border-gold">
                <ShoppingBag className="w-6 h-6 sm:w-7 sm:h-7 text-gold mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-navyblue mb-2">MyFranchise</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                  Own parts of big names like Steers or Debonairs. Yes, those ones you love! Start with R1,500.
                </p>
              </Card>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 mt-8 sm:mt-12">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 sm:p-8 shadow-lg border-l-4 border-gold">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-navyblue/5 rounded-lg">
                    <HandCoins className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-navyblue mb-2 sm:mb-3">No Stress About Money</h3>
                    <p className="text-xs sm:text-sm text-charcoal/80 mb-3 sm:mb-4">
                      Your R500 stays safe in your account. We help with all the money stuff - no headaches for you.
                    </p>
                    <Link to="/how-we-work" className="inline-flex items-center text-gold hover:text-navyblue transition-colors font-semibold text-xs sm:text-sm">
                      See How It Works <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 sm:p-8 shadow-lg border-l-4 border-gold">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-navyblue/5 rounded-lg">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-navyblue mb-2 sm:mb-3">We're Here to Help</h3>
                    <p className="text-xs sm:text-sm text-charcoal/80 mb-3 sm:mb-4">
                      Got questions? We explain everything in your language, simple and clear. No big words, just straight talk.
                    </p>
                    <Link to="/services" className="inline-flex items-center text-gold hover:text-navyblue transition-colors font-semibold text-xs sm:text-sm">
                      Talk to Us <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-6 sm:mt-8">
              <Link to="/how-we-work" className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-navyblue text-white rounded-lg hover:bg-blue-800 transition-colors text-xs sm:text-sm">
                Start Your Journey Today <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default IntroSection;
