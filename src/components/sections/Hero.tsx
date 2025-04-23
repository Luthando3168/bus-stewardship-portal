
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center bg-navyblue px-4 py-12 md:px-6 relative overflow-hidden">
    <div className="absolute inset-0 bg-navyblue"></div>
    
    <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
      {/* Text Content */}
      <div className="w-full md:w-1/2 flex flex-col items-start text-left mb-8 md:mb-0">
        <h1 className="font-montserrat font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-2 leading-tight">
          Managing Your<br />Business
        </h1>
        <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gold mb-4 md:mb-6 tracking-tight leading-tight">
          Growing Your<br />Wealth
        </h2>
        <p className="font-lato text-white/95 text-base sm:text-lg max-w-xl mb-6">
          Professional chartered accountants providing comprehensive accounting, business management, and investment services through our Business Under Stewardship program.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-6 py-3 font-montserrat font-semibold text-base rounded bg-gold text-navyblue shadow hover:bg-lightgold transition-colors hover-scale text-center"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Image section - Ensuring proper display on all screen sizes */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[450px]">
          {/* Decorative frames - kept but adjusted for mobile */}
          <div className="absolute inset-0 border-2 border-gold/50 rounded-2xl transform rotate-3 scale-105"></div>
          <div className="absolute inset-0 border-2 border-gold/40 rounded-2xl transform -rotate-2"></div>
          
          {/* Main image - ensuring visibility on all devices */}
          <img
            src="/lovable-uploads/cefab7d3-58a2-43a5-a136-7cac22b5c286.png"
            alt="Joyful person with natural hair surrounded by yellow flowers"
            className="w-full h-auto object-cover rounded-2xl animate-fade-in-slow brightness-110 contrast-105 saturate-105"
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
