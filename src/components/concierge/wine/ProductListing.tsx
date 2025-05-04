
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, ChevronLeft } from 'lucide-react';
import { useWineService } from '@/hooks/concierge/useWineService';

interface ProductListingProps {
  category: string;
  onBackClick: () => void;
}

const ProductListing: React.FC<ProductListingProps> = ({ category, onBackClick }) => {
  const { getProductsForCategory, handleOrderClick } = useWineService();
  const products = getProductsForCategory(category);

  return (
    <div>
      <div className="mb-4">
        <Button 
          variant="ghost" 
          onClick={onBackClick} 
          className="flex items-center mb-2"
        >
          <ChevronLeft className="mr-1" /> Back to Categories
        </Button>
        <h2 className="text-xl font-semibold">{category} Products</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, idx) => (
          <Card key={idx} className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-44 bg-gray-100 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="h-full w-full object-cover"
              />
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium">{product.name}</h3>
                  <Badge className="mt-1">{product.type}</Badge>
                </div>
                <span className="font-bold text-lg text-red-500">{product.price}</span>
              </div>
              <Button 
                onClick={() => handleOrderClick()}
                className="bg-red-500 hover:bg-red-600 mt-3 w-full"
              >
                <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
