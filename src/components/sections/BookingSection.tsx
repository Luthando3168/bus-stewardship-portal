import React from 'react';
import { Calendar, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const BookingSection = () => {
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-navyblue rounded-xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Not Sure? Let's Chat!
              </h2>
              <p className="text-white/80 mb-6">Whether you're a call centre agent, taxi driver, teacher  or a professional - we'll explain everything in simple terms</p>
              
              <div className="space-y-4 mb-8">
                <a href="https://wa.me/27620193208" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-gold transition-colors">
                  <div className="bg-gold rounded-full p-2">
                    <MessageCircle size={18} />
                  </div>
                  <span>WhatsApp us: 062 019 3208</span>
                </a>
              </div>
              
              <Link to="/contact">
                <Button className="bg-gold hover:bg-lightgold text-navyblue font-bold px-8 py-6 text-lg w-full md:w-auto flex items-center justify-center gap-2" size="lg">
                  <Calendar size={20} />
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