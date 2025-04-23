
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="w-full min-h-[80vh] flex items-start justify-center bg-navyblue px-2 relative overflow-hidden">
    <div className="absolute inset-0 bg-navyblue"></div>
    
    <div className="w-full max-w-6xl mx-auto flex flex-col items-start justify-start py-8 md:py-12 relative z-10">
      {/* Text Content */}
      <div className="flex-1 flex flex-col items-start text-left px-4 md:px-0 mb-6 md:mb-8">
        <h1 className="font-montserrat font-extrabold text-3xl sm:text-4xl md:text-6xl tracking-tight text-white mb-2 leading-tight">
          Managing Your<br />Business
        </h1>
        <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl md:text-5xl text-gold mb-4 md:mb-7 tracking-tight leading-tight">
          Growing Your<br />Wealth
        </h2>
        <p className="font-lato text-white/95 text-base sm:text-lg md:text-xl max-w-xl mb-6 md:mb-10">
          Professional chartered accountants providing comprehensive accounting, business management, and investment services through our Business Under Stewardship program.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 font-montserrat font-semibold text-base md:text-lg rounded bg-gold text-navyblue shadow hover:bg-lightgold transition-colors hover-scale text-center"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Image section - hidden on mobile */}
      <div className="hidden md:block flex-1 relative px-4 md:px-0">
        <div className="relative max-w-[350px] md:max-w-none mx-auto">
          {/* Decorative frames */}
          <div className="absolute inset-0 border-2 border-gold/50 rounded-2xl transform rotate-3 scale-105"></div>
          <div className="absolute inset-0 border-2 border-gold/40 rounded-2xl transform -rotate-2"></div>
          
          {/* Main image */}
          <img
            src="/lovable-uploads/cefab7d3-58a2-43a5-a136-7cac22b5c286.png"
            alt="Joyful person with natural hair surrounded by yellow flowers"
            className="w-full md:w-[500px] h-auto md:h-[500px] object-cover rounded-2xl animate-fade-in-slow brightness-110 contrast-105 saturate-105"
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
