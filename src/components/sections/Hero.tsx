
import { Link } from "react-router-dom";

// Hero section with improved layout, image, and design
const Hero = () => (
  <section className="w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center bg-navyblue px-2">
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 py-12 md:py-24 animate-fade-in">
      {/* LEFT: Text content */}
      <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
        <span className="mb-3 inline-block bg-gold/15 text-gold font-semibold rounded-full px-5 py-1 text-sm tracking-wider border border-gold/20">
          Trusted Advisors. Personal Service.
        </span>
        <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white drop-shadow mb-2 leading-tight">
          Managing Your Business,
        </h1>
        <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl md:text-5xl text-gold mb-5 md:mb-7 tracking-tight leading-tight">
          Growing Your Wealth
        </h2>
        <p className="font-lato text-white/95 text-lg sm:text-xl md:text-2xl max-w-xl mb-10">
          LMCA helps individuals earn passive income by owning multiple businesses through MCA Direct.<br />
          Take charge of your future—stress-free and supported.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
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
      {/* RIGHT: Image */}
      <div className="flex-1 flex justify-center md:justify-end w-full">
        <div className="relative w-[320px] md:w-[400px] rounded-2xl shadow-2xl overflow-hidden border-4 border-gold/30 bg-white/10">
          <img
            src="/lovable-uploads/photo-1721322800607-8c38375eef04"
            alt="Happy senior holding a smartphone at home"
            className="object-cover w-full h-[340px] md:h-[380px] scale-105"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute bottom-0 left-0 w-full bg-navyblue/80 text-gold py-2 px-4 text-center text-base font-lato italic font-medium rounded-b-2xl">
            Empowering you at every stage of life.
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
