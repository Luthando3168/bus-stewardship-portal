
import React from 'react';

interface Occasion {
  name: string;
  image: string;
  color: string;
}

interface OccasionGridProps {
  occasions: Occasion[];
}

const OccasionGrid: React.FC<OccasionGridProps> = ({ occasions }) => {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold mb-4">Shop by Occasion</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {occasions.map((occasion) => (
          <div 
            key={occasion.name} 
            className={`bg-gradient-to-br ${occasion.color} rounded-lg overflow-hidden h-36 relative group cursor-pointer hover:shadow-md transition-all`}
          >
            <img 
              src={occasion.image}
              alt={occasion.name}
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
              <h3 className="font-medium text-lg">{occasion.name}</h3>
              <span className="text-sm text-white/80 mt-1">View Collection</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OccasionGrid;
