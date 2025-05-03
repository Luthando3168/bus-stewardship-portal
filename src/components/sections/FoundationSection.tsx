
import React from "react";
import SectionTitle from "../ui/SectionTitle";
import { Link } from "react-router-dom";
import { Heart, Users, GraduationCap, Building, ArrowRight, Globe, HandHeart } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const FoundationSection = () => {
  return <section className="py-20 bg-gradient-to-br from-navyblue to-navyblue/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Helping Our Communities Together" subtitle="Part of the money your businesses make goes to helping children and families in need" centered light />
        
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg shadow-xl p-8 mb-10 border border-white/20">
          <div className="mb-8">
            <p className="text-lg text-white/90 mb-6">When your businesses make money, a small part helps those who need it most. Through the L Foundation, we support school children who don't have parents, feed hungry families, and teach young people skills to find work.</p>
            
            <div className="bg-white/10 p-6 rounded-lg italic text-center mb-6 border border-gold/30">
              <p className="text-gold text-xl mb-2 font-semibold">
                "Blessed is he who is kind to the needy"
              </p>
              <p className="text-white/60">- Proverbs 14:21</p>
            </div>
            
            <p className="text-lg text-white/90">
              By owning businesses with us, you're not just building wealth for yourself -
              you're also helping make our communities better, one family at a time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="font-semibold text-xl text-gold mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5" />
                How We Help:
              </h3>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                  Support children without parents
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                  Feed hungry families
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                  Train youth for jobs
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                  Help elderly people
                </li>
              </ul>
            </div>

            <div className="bg-gold/10 rounded-lg p-6 border border-gold/20">
              <h3 className="font-semibold text-xl text-gold mb-4 flex items-center gap-2">
                <Building className="w-5 h-5" />
                Your Impact:
              </h3>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                  Create jobs in communities
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                  Help local families
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                  Support children's education
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                  Leave a lasting good legacy
                </li>
              </ul>
            </div>
          </div>
          
          {/* Flagship Projects Preview */}
          <div className="mb-8">
            <h3 className="font-semibold text-xl text-white mb-4 text-center">Our Flagship Projects</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-lg overflow-hidden border border-white/10">
                <AspectRatio ratio={16/9}>
                  <img 
                    src="/lovable-uploads/4288eeba-c60b-42f1-a156-13a7ef6df992.png" 
                    alt="#ChangeAlexNow Project" 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <div className="p-4">
                  <h4 className="font-semibold text-gold flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    #ChangeAlexNow
                  </h4>
                  <p className="text-sm text-white/80">Transforming Alexandra township into a model of inclusive urban development</p>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-lg overflow-hidden border border-white/10">
                <AspectRatio ratio={16/9}>
                  <img 
                    src="/lovable-uploads/b37923d0-335b-46bc-9852-7d271458f2a9.png" 
                    alt="100 Inclusive Cities" 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <div className="p-4">
                  <h4 className="font-semibold text-gold flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    100 Inclusive Cities
                  </h4>
                  <p className="text-sm text-white/80">Building inclusive cities where everyone shares in the wealth</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/foundation" className="inline-flex items-center px-6 py-3 bg-gold text-navyblue rounded-lg font-semibold hover:bg-white transition-all duration-300 group">
              Learn More About Our Work
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>;
};
export default FoundationSection;
