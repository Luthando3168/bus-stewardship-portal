
import { Building2, Lock, Fingerprint, PiggyBank } from "lucide-react";

const BankingSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-navyblue to-blue-900 rounded-xl p-8 text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Your Money Stays Safe in Your Bank Account
          </h2>
          
          <div className="bg-white/10 rounded-lg p-6 mb-8">
            <p className="text-lg leading-relaxed">
              Think of us like friendly bank agents. We've partnered with banks to make it super easy 
              for you to own businesses. Your R500 monthly payment stays in YOUR personal bank account 
              until YOU say "yes" to a business you want to own.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-gold p-3 rounded-lg">
                <Lock className="w-6 h-6 text-navyblue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Your Money, Your Control</h3>
                <p className="text-white/90">
                  We never touch your money without your permission. It stays in your account until you choose a business.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gold p-3 rounded-lg">
                <Building2 className="w-6 h-6 text-navyblue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Bank-Approved System</h3>
                <p className="text-white/90">
                  Banks trust our system. They can see all the money movements clearly, making it easier to invest with us.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gold p-3 rounded-lg">
                <Fingerprint className="w-6 h-6 text-navyblue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">You Must Approve</h3>
                <p className="text-white/90">
                  Nothing happens to your money until you personally say "YES" to a specific business opportunity.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gold p-3 rounded-lg">
                <PiggyBank className="w-6 h-6 text-navyblue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Save First, Choose Later</h3>
                <p className="text-white/90">
                  Start saving your R500/month now. Take your time to choose which business you want to own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankingSection;
