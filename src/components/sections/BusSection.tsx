import { Link } from "react-router-dom";
import SectionTitle from "../ui/SectionTitle";
import { Card } from "../ui/card";
const BusSection = () => {
  const steps = [{
    title: "1. Pick Your Business Type",
    description: "Choose from food shops, properties, franchises, or other businesses you'd like to own. No business experience needed."
  }, {
    title: "2. Join with R500/month",
    description: "Your money goes into a secure business account at a big bank. No loans needed, start small and grow with us."
  }, {
    title: "3. We Run Everything For You",
    description: "Our team of professionals manages the day-to-day work. You get regular updates on your phone or computer."
  }, {
    title: "4. Build Your Legacy",
    description: "These businesses can be passed down to your children. Start building generational wealth today."
  }];
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle title="How It Works (Easy as 1-2-3)" subtitle="Our BUS Program helps you own multiple businesses without the headache of running them" />

            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-6 mb-8 border-l-4 border-gold">
              <p className="text-lg text-navyblue text-center italic mb-2">"I'm a taxi owner and now I am part of owners for a franchise, a shop and a farm. LMCA handles everything and reports to me while I focus on my taxi business!"</p>
              <p className="text-sm text-center text-gray-600 font-semibold">
                - Bra Joe, Taxi Owner from Soweto
              </p>
            </Card>

            <div className="space-y-6">
              {steps.map((step, index) => <div key={index} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-gold hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-8 w-8 bg-gold rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-xl text-navyblue mb-2">
                        {step.title}
                      </h3>
                      <p className="font-lato text-charcoal/80 text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>)}
            </div>

            <div className="text-center mt-10">
              <Link to="/register" className="inline-flex items-center px-8 py-4 bg-gold text-white rounded-lg font-semibold hover:bg-lightgold transition-colors">
                Start Your Business Journey Today
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="aspect-w-4 aspect-h-3 relative z-10">
              <div className="w-full h-full bg-gradient-to-br from-navyblue to-deepblue rounded-lg overflow-hidden shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black tracking-wider text-transparent bg-clip-text 
                    bg-gradient-to-r from-gold via-lightgold to-gold 
                    transform hover:scale-105 transition-transform duration-300">
                    BUS
                  </div>
                  <p className="text-white text-xl md:text-2xl mt-4">Business Under Stewardship</p>
                  <p className="text-gold text-lg mt-2">You own. We manage.</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-gold rounded-lg z-0"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default BusSection;
