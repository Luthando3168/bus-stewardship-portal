
import { Shield, Award, Clock } from "lucide-react";

const WhyBookSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Secure Booking",
      description: "All transactions are protected with bank-grade security."
    },
    {
      icon: Award,
      title: "Best Price Guarantee",
      description: "Find a lower price and we'll match it, guaranteed."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our support team is available around the clock to help you."
    }
  ];

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-navyblue">Why Book With Us</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-navyblue/10 mb-4">
              <benefit.icon className="h-6 w-6 text-navyblue" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyBookSection;
