import React from "react";
import SectionTitle from "../ui/SectionTitle";
import { Link } from "react-router-dom";
import { Heart, Users, GraduationCap, Building, ArrowRight } from "lucide-react";
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