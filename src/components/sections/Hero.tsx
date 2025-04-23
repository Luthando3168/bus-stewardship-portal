
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="w-full min-h-[80vh] flex items-center justify-center bg-navyblue px-2 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#0A2463_0%,#0f3285_100%)] opacity-95"></div>
    
    <div className="w-full max-w-6xl mx-auto flex items-center justify-between py-12 md:py-24 relative z-10">
      {/* Text Content - Left Side */}
      <div className="flex-1 flex flex-col items-start text-left max-w-xl px-4 md:px-0">
        <span className="mb-3 inline-block bg-gold/15 text-gold font-semibold rounded-full px-5 py-1 text-sm tracking-wider border border-gold/20">
          Trusted Advisors. Personal Service.
        </span>
        <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white drop-shadow mb-2 leading-tight">
          Managing Your Business,
        </h1>
        <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl md:text-5xl text-gold mb-5 md:mb-7 tracking-tight leading-tight">
          Growing Your Wealth
        </h2>
        <p className="font-lato text-white/95 text-lg sm:text-xl max-w-xl mb-10">
          LMCA helps individuals earn passive income by owning multiple businesses through MCA Direct. Take charge of your future—stress-free and supported.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            to="/register"
            className="w-full sm:w-auto px-8 py-4 font-montserrat font-semibold text-lg rounded-xl bg-gold text-navyblue shadow hover:bg-lightgold transition-colors hover-scale"
          >
            Join MCA Direct
          </Link>
          <Link
            to="/bus"
            className="w-full sm:w-auto px-8 py-4 font-montserrat font-semibold text-lg rounded-xl border-2 border-white text-white hover:bg-white/5 transition-colors hover-scale"
          >
            Explore BUS Program
          </Link>
        </div>
      </div>

      {/* Image Section - Right Side */}
      <div className="hidden md:block flex-1 relative">
        <div className="relative">
          {/* Decorative frames */}
          <div className="absolute inset-0 border-2 border-gold/30 rounded-2xl transform rotate-3 scale-105"></div>
          <div className="absolute inset-0 border-2 border-gold/20 rounded-2xl transform -rotate-2"></div>
          
          {/* Main image */}
          <img
            src="/lovable-uploads/cefab7d3-58a2-43a5-a136-7cac22b5c286.png"
            alt="Joyful person with natural hair surrounded by yellow flowers"
            className="w-[500px] h-[500px] object-cover rounded-2xl animate-fade-in-slow"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.2))',
            }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
