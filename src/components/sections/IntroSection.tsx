
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/card';

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

          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 space-y-6 md:space-y-8">
            <h2 className="text-2xl font-bold text-navyblue text-center mb-6 md:mb-8">Business Types You Can Own</h2>
            
            <div className="grid gap-4 md:gap-6">
              <Card className="p-6 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-xl font-bold text-navyblue mb-3">MyFoodRetail: Own Mini Shopping Complexes</h3>
                <p className="text-gray-600 mb-4">
                  Start with just R5,000 and own parts of mini shopping complexes, food outlets, and grocery stores in your 
                  community. These shops work together with our MyFarm businesses to get good prices on food, 
                  which means more profit for you. We handle everything - from managing staff to keeping the 
                  shops clean and well-stocked.
                </p>
              </Card>

              <Card className="p-6 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-xl font-bold text-navyblue mb-3">MyFarm: Own Farming Businesses</h3>
                <p className="text-gray-600 mb-4">
                  With R1,000, you can own parts of farms that grow food for our communities. Your farms will 
                  supply food to our MyFoodRetail shops - it's all connected! Professional farmers handle everything, 
                  from planting to selling the produce.
                </p>
              </Card>

              <Card className="p-6 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-xl font-bold text-navyblue mb-3">MyProperty: Own Money-Making Properties</h3>
                <p className="text-gray-600 mb-4">
                  Start with R2,000 and own parts of properties that make money every month through rent. 
                  This includes houses, flats, and spaces for businesses. Our property managers handle 
                  everything - from finding good tenants to maintaining the buildings.
                </p>
              </Card>

              <Card className="p-6 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-xl font-bold text-navyblue mb-3">MyFranchise: Own Famous Brand Stores</h3>
                <p className="text-gray-600 mb-4">
                  With R5,000, own parts of well-known franchise stores like Steers or Debonairs. These are 
                  trusted brands that people love. We handle all the hard work - from training staff to making 
                  sure everything runs smoothly.
                </p>
              </Card>

              <Card className="p-6 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-xl font-bold text-navyblue mb-3">MySchool: Own Educational Centers</h3>
                <p className="text-gray-600 mb-4">
                  Start with R1,500 and own parts of schools and training centers. These help our communities 
                  while making money through school fees and training programs. Professional educators run 
                  everything, ensuring quality education.
                </p>
              </Card>

              <Card className="p-6 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-xl font-bold text-navyblue mb-3">MyEnergy: Own Power Solutions</h3>
                <p className="text-gray-600 mb-4">
                  With R3,000, own parts of solar and power businesses that help solve electricity problems. 
                  These make money by providing power to homes and businesses. Our engineers handle everything, 
                  from installation to maintenance.
                </p>
              </Card>

              <Card className="p-6 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-xl font-bold text-navyblue mb-3">MyTelco: Own Internet & Phone Services</h3>
                <p className="text-gray-600 mb-4">
                  Start with R2,500 and own parts of internet and phone businesses. These make money by 
                  providing connection services that people need every day. Technical experts handle everything, 
                  keeping the networks running smoothly.
                </p>
              </Card>

              <Card className="p-6 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-xl font-bold text-navyblue mb-3">MyHealth: Own Healthcare Services</h3>
                <p className="text-gray-600 mb-4">
                  With R2,500, own parts of clinics and healthcare businesses that help keep our communities 
                  healthy while making money. Professional healthcare workers handle everything, from patient 
                  care to managing medical supplies.
                </p>
              </Card>
            </div>

            <div className="text-center mt-8 md:mt-12">
              <Link 
                to="/register"
                className="inline-block px-6 md:px-8 py-3 md:py-4 bg-gold text-navyblue font-semibold rounded-lg hover:bg-lightgold transition-colors text-lg shadow-md"
              >
                Start Your Business Journey
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
