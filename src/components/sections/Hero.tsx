
import { Link } from "react-router-dom";

// Professional, clean hero for LMCA
const Hero = () => (
  <section className="w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center bg-navyblue px-2">
    <div className="w-full flex flex-col items-center justify-center py-14 md:py-24 max-w-2xl mx-auto text-center animate-fade-in">
      <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white drop-shadow mb-1">
        Managing Your Business
      </h1>
      <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl md:text-5xl text-gold mb-6 md:mb-7 tracking-tight">
        Growing Your Wealth
      </h2>
      <p className="font-lato text-white/95 text-base sm:text-lg md:text-xl mb-8">
        LMCA helps individuals earn passive income by owning multiple businesses through MCA Direct.
      </p>
      <div className="flex flex-col sm:flex-row w-full justify-center gap-4">
        <Link
          to="/register"
          className="w-full sm:w-auto px-8 py-4 font-montserrat font-semibold text-lg rounded-xl bg-gold text-navyblue shadow hover:bg-lightgold transition-colors"
        >
          Join MCA Direct
        </Link>
        <Link
          to="/bus"
          className="w-full sm:w-auto px-8 py-4 font-montserrat font-semibold text-lg rounded-xl border-2 border-white text-white hover:bg-white/5 transition-colors"
        >
          Explore BUS Program
        </Link>
      </div>
    </div>
  </section>
);

export default Hero;

