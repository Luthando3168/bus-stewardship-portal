
import React from 'react';
import { Badge } from '@/components/ui/badge';

const HeroBanner: React.FC = () => {
  return (
    <div className="relative rounded-xl overflow-hidden h-72 bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Petal & Parcel</h1>
        <p className="text-lg mb-4 max-w-md">Beautiful gifts delivered with love across South Africa</p>
        <div className="flex flex-wrap gap-3">
          <Badge variant="secondary" className="bg-white text-purple-700 hover:bg-white/90 w-fit">
            Same Day Delivery Available
          </Badge>
          <Badge variant="secondary" className="bg-white text-purple-700 hover:bg-white/90 w-fit">
            Free Delivery on Orders Over R500
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
