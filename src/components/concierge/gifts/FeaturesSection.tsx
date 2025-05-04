
import React from 'react';
import { Gift, Flower, Star } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 bg-purple-50 p-8 rounded-lg">
      <div className="text-center">
        <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
          <Gift className="h-7 w-7 text-purple-600" />
        </div>
        <h3 className="font-semibold text-lg text-purple-800 mb-1">Same Day Delivery</h3>
        <p className="text-gray-600">Order by 12pm for same-day delivery in major cities</p>
      </div>
      <div className="text-center">
        <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
          <Flower className="h-7 w-7 text-purple-600" />
        </div>
        <h3 className="font-semibold text-lg text-purple-800 mb-1">Fresh Guarantee</h3>
        <p className="text-gray-600">All our flowers are guaranteed to stay fresh for 7 days</p>
      </div>
      <div className="text-center">
        <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
          <Star className="h-7 w-7 text-purple-600" />
        </div>
        <h3 className="font-semibold text-lg text-purple-800 mb-1">Quality Promise</h3>
        <p className="text-gray-600">Not satisfied? We'll refund or replace your order</p>
      </div>
    </div>
  );
};

export default FeaturesSection;
