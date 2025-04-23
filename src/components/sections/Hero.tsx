
import { Link } from "react-router-dom";
import corporateBackground from "/public/lovable-uploads/36f1e3ec-1682-4086-8e11-d7c4e572618b.png";

// Responsive Hero section with cleaner overlay and mobile fixes
const Hero = () => {
  return (
    <section
      className="relative flex items-center min-h-[60vh] md:min-h-[75vh] bg-navyblue overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10,20,40,0.82), rgba(10,20,40,0.7)), url(${corporateBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="container mx-auto px-4 flex flex-col justify-center items-center relative z-10">
        <div className="w-full max-w-2xl md:max-w-3xl text-center animate-fade-in">
          <h1 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 md:mb-6 text-white drop-shadow-xl">
            Managing Your Business
            <br />
            <span className="text-gold block mt-1">Growing Your Wealth</span>
          </h1>
          <p className="font-lato text-base sm:text-lg md:text-xl mb-8 text-gray-200">
            LMCA helps individuals earn passive income by owning multiple businesses through MCA Direct.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <Link
              to="/register"
              className="font-montserrat px-6 py-3 sm:px-8 sm:py-4 bg-gold text-navyblue rounded-lg font-semibold text-base shadow-md hover:bg-lightgold transition-colors"
            >
              Join MCA Direct
            </Link>
            <Link
              to="/bus"
              className="font-montserrat px-6 py-3 sm:px-8 sm:py-4 border-2 border-white text-white rounded-lg font-semibold text-base hover:bg-white/10 transition-colors"
            >
              Explore BUS Program
            </Link>
          </div>
        </div>
      </div>
      {/* Subtle dark overlay for text clarity */}
      <div className="absolute inset-0 bg-black opacity-60 pointer-events-none z-0" />
    </section>
  );
};

export default Hero;
