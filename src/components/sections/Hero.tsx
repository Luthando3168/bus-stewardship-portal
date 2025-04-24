
import { Link } from "react-router-dom";
import { Phone, Mail, MessageCircle, Calendar } from "lucide-react";

const Hero = () => (
  <section className="w-full min-h-[80vh] flex items-center justify-center bg-navyblue px-4 py-12 md:py-16 relative overflow-hidden">
    <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12 relative z-10">
      {/* Text Content */}
      <div className="w-full md:w-1/2 text-left">
        <h1 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight text-white mb-4 leading-tight">
          Register Now.<br />
          Start from R500.<br />
          Own Real Businesses.
        </h1>
        <p className="font-lato text-white/95 text-lg md:text-xl max-w-xl mb-6">
          Registration is easy! Create your account, verify your details, and get access to our business ownership platform. Your R500 stays in your account until you approve a deal.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            to="/register"
            className="w-full sm:w-auto px-8 py-3.5 font-montserrat font-semibold text-base rounded-lg bg-gold text-navyblue shadow hover:bg-lightgold transition-colors hover:scale-105 text-center"
          >
            Register Now - It's Free
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-3.5 font-montserrat font-semibold text-base rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors text-center flex items-center justify-center gap-2"
          >
            <Calendar size={18} />
            Book Free Consultation
          </Link>
        </div>
        <div className="mt-8 space-y-3">
          <div className="flex items-center gap-2 text-white/90">
            <MessageCircle size={20} />
            <span>WhatsApp us: 062 019 3208</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <Phone size={20} />
            <span>Call us: 087 624 3204</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <Mail size={20} />
            <span>Email: info@madunacas.com</span>
          </div>
        </div>
      </div>

      {/* Image section */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]">
          <div className="absolute inset-0 border-2 border-gold/50 rounded-2xl transform rotate-3 scale-105"></div>
          <div className="absolute inset-0 border-2 border-gold/40 rounded-2xl transform -rotate-2"></div>
          <img
            src="/lovable-uploads/cefab7d3-58a2-43a5-a136-7cac22b5c286.png"
            alt="Successful business owner smiling"
            className="w-full h-auto object-cover rounded-2xl animate-fade-in-slow brightness-110 contrast-105 saturate-105"
            style={{ filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.2))' }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
