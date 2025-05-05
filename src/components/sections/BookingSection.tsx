
import React from 'react';
import { Calendar, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const BookingSection = () => {
  return <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-navyblue rounded-xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                Not Sure? Let's Chat!
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-white/80 mb-4 sm:mb-6">Whether you're a call centre agent, taxi driver, teacher or a professional - we'll explain everything in simple terms</p>
              
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <a href="https://wa.me/27620193208" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 text-white hover:text-gold transition-colors">
                  <div className="bg-gold rounded-full p-1.5 sm:p-2">
                    <MessageCircle size={14} className="sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-xs sm:text-sm">WhatsApp us: 062 019 3208</span>
                </a>
              </div>
              
              <Link to="/contact">
                <Button className="bg-gold hover:bg-lightgold text-navyblue font-bold px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base w-full md:w-auto flex items-center justify-center gap-2" size="lg">
                  <Calendar size={16} className="sm:w-4 sm:h-4" />
                  Book a Free Chat
                </Button>
              </Link>
            </div>
            
            <div className="hidden md:block relative">
              <img src="/lovable-uploads/98d6869e-a552-4731-9f0c-6dce07a2db48.png" alt="Our friendly team ready to help you" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-navyblue/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default BookingSection;
