
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Flower, Package, Gift, Heart, Tag } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  count: number;
  image: string;
}

interface CategoryGridProps {
  categories: Category[];
  selectedCategory: string | null;
  onCategoryClick: (categoryId: string) => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ 
  categories, 
  selectedCategory, 
  onCategoryClick 
}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Browse Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Card 
            key={category.id}
            className={`cursor-pointer transition-all hover:shadow-md ${
              selectedCategory === category.id 
                ? 'ring-2 ring-purple-500 shadow-md' 
                : ''
            }`}
            onClick={() => onCategoryClick(category.id)}
          >
            <div className="h-36 bg-gray-100 overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardContent className="p-4 text-center">
              <h3 className="font-medium">{category.name}</h3>
              <p className="text-xs text-gray-500 mt-1">
                {category.count} items
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
