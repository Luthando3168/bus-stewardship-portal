
import { Link } from "react-router-dom";
import SectionTitle from "../ui/SectionTitle";

const BusSection = () => {
  const steps = [
    {
      title: "1. Choose Your Business Type",
      description: "Pick from our simple business choices - like food shops, farms, or housing."
    },
    {
      title: "2. Start with R500/month",
      description: "Join with a small monthly payment. Your money goes into a secure business account."
    },
    {
      title: "3. We Do All The Work",
      description: "Our professional team handles everything. You just check updates on your phone."
    },
    {
      title: "4. Watch Your Business Grow",
      description: "See your progress through our easy platform and receive your share of profits."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              title="How It Works (Simple as 1-2-3)"
              subtitle="Our BUS Program makes business ownership easy for everyone"
            />

            <div className="bg-lightgray rounded-lg p-6 mb-8">
              <p className="text-lg text-navyblue text-center italic">
                "I started with R500 per month, and now I'm part of three different businesses — all managed by professionals!"
              </p>
              <p className="text-sm text-center mt-2 text-gray-600">- Thuli, School Administrator</p>
            </div>

            <div className="space-y-8 mb-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 h-8 w-8 bg-gold rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-xl text-navyblue mb-1">{step.title}</h3>
                    <p className="font-lato text-charcoal text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/impact-funds"
                className="inline-block px-8 py-4 bg-gold text-white rounded-lg font-semibold hover:bg-lightgold transition-colors"
              >
                See Available Businesses
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 relative z-10">
              <div className="w-full h-full bg-gradient-to-br from-navyblue to-deepblue rounded-lg overflow-hidden shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div 
                    className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black tracking-wider text-transparent bg-clip-text 
                    bg-gradient-to-r from-gold via-lightgold to-gold 
                    transform hover:scale-105 transition-transform duration-300"
                  >
                    BUS
                  </div>
                  <p className="text-white text-xl md:text-2xl mt-4">Business Under Stewardship</p>
                  <p className="text-gold text-lg mt-2">We manage. You own.</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-gold rounded-lg z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusSection;
