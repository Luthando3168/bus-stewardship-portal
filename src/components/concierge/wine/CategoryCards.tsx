
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Wine } from 'lucide-react';

interface Category {
  name: string;
  count: number;
  image: string;
}

interface CategoryCardsProps {
  categories: Category[];
  onCategoryClick: (category: string) => void;
}

const CategoryCards: React.FC<CategoryCardsProps> = ({ categories, onCategoryClick }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Browse By Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((category) => (
          <Card 
            key={category.name}
            className="cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02]"
            onClick={() => onCategoryClick(category.name)}
          >
            <div className="h-40 bg-gray-100 overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Wine className="h-8 w-8 mb-3 text-red-500" />
              <h3 className="font-semibold">{category.name}</h3>
              <p className="text-xs text-gray-500 mt-1">
                {category.count} products
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
