
import React from 'react';
import { Calendar, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const BookingSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-navyblue rounded-xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Need Help? Book a Free Session
              </h2>
              <p className="text-white/80 mb-6">
                Whether you're a gogo, taxi driver or teacher - we'll explain everything in simple terms
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-gold rounded-full p-2 text-white">
                    <Phone size={18} />
                  </div>
                  <span className="text-white">Call us: 087 624 3204</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-gold rounded-full p-2 text-white">
                    <MessageCircle size={18} />
                  </div>
                  <span className="text-white">WhatsApp: 062 019 3208</span>
                </div>
              </div>
              
              <Link to="/contact">
                <Button 
                  className="bg-gold hover:bg-lightgold text-navyblue font-bold px-8 py-6 text-lg w-full md:w-auto flex items-center justify-center gap-2" 
                  size="lg"
                >
                  <Calendar size={20} />
                  Book Your Free Call
                </Button>
              </Link>
            </div>
            
            <div className="hidden md:block relative">
              <img 
                src="/lovable-uploads/98d6869e-a552-4731-9f0c-6dce07a2db48.png" 
                alt="Customer service team ready to help" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navyblue/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
