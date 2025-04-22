
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-navyblue text-white py-20 md:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(#c5aa6a_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Managing Your Business <br />
            <span className="text-gold">Growing Your Wealth</span>
          </h1>
          <p className="font-lato text-lg md:text-xl mb-8 text-gray-300 max-w-2xl">
            Luthando Maduna Chartered Accountants assists clients to own multiple businesses through our impact funds, 
            which we then professionally manage to grow your wealth through our Business Under Stewardship program.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/register" 
              className="font-montserrat inline-block px-8 py-4 bg-gold text-navyblue rounded font-medium hover:bg-lightgold transition-colors"
            >
              Join MCA Direct
            </Link>
            <Link 
              to="/bus" 
              className="font-montserrat inline-block px-8 py-4 border border-white text-white rounded font-medium hover:bg-white/10 transition-colors"
            >
              Explore BUS Program
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
