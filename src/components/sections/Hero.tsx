
import { Link } from "react-router-dom";
import { Mail, MessageCircle } from "lucide-react";

const Hero = () => (
  <section className="w-full min-h-[85vh] flex items-center bg-navyblue px-4 py-12 md:py-16 relative overflow-hidden">
    <div className="container max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative z-10">
      {/* Text Content */}
      <div className="w-full md:w-1/2 text-left space-y-6 md:space-y-8">
        <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]">
          Register Now.<br />
          Start from R500.<br />
          Own Real Businesses.
        </h1>
        <p className="font-lato text-white/95 text-xl md:text-2xl max-w-2xl">
          Our platform empowers everyone to own multiple businesses - 
          including taxi drivers, teachers, call center agents, domestic workers, 
          farmers, small business owners, and those seeking additional income.
          Simple, secure, and professionally managed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/register"
            className="px-8 py-4 font-montserrat font-semibold text-lg rounded-lg bg-gold text-navyblue shadow-lg hover:bg-lightgold transition-all duration-300 hover:scale-105 text-center"
          >
            Register Now
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 font-montserrat font-semibold text-lg rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all duration-300 text-center"
          >
            Book Consultation
          </Link>
        </div>
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-3 text-white/90 text-lg">
            <MessageCircle size={24} />
            <span>WhatsApp us: 062 019 3208</span>
          </div>
          <div className="flex items-center gap-3 text-white/90 text-lg">
            <Mail size={24} />
            <span>Email: info@madunacas.com</span>
          </div>
        </div>
      </div>

      {/* Image section */}
      <div className="w-full md:w-1/2">
        <div className="relative w-full max-w-[500px] mx-auto">
          <div className="absolute inset-0 border-2 border-gold/50 rounded-2xl transform rotate-3 scale-105"></div>
          <div className="absolute inset-0 border-2 border-gold/40 rounded-2xl transform -rotate-2"></div>
          <img
            src="/lovable-uploads/cefab7d3-58a2-43a5-a136-7cac22b5c286.png"
            alt="Successful business owner smiling"
            className="w-full h-auto object-cover rounded-2xl shadow-xl animate-fade-in-slow brightness-110 contrast-105 saturate-105"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
