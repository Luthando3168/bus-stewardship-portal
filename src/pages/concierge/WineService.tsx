
import React from 'react';
import { Button } from '@/components/ui/button';
import { Wine, ShoppingCart } from 'lucide-react';
import ServicePageTemplate from '@/components/concierge/ServicePageTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { useWineService } from '@/hooks/concierge/useWineService';
import CategoryCards from '@/components/concierge/wine/CategoryCards';
import ProductListing from '@/components/concierge/wine/ProductListing';

const WineService = () => {
  const { 
    selectedCategory, 
    handleCategoryClick,
    handleOrderClick,
    categories,
    goBackToCategories,
    isViewingCategory
  } = useWineService();
  
  return (
    <ServicePageTemplate 
      title="Food Corner Bev. Co."
      description="Premium beverages delivered directly to your door. We offer a comprehensive selection of alcoholic and non-alcoholic options."
      icon={Wine}
      color="text-red-500"
    >
      <div className="space-y-8">
        {/* Hero Banner */}
        <div className="relative rounded-xl overflow-hidden h-64 bg-gradient-to-r from-red-700 to-red-900">
          <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
            <h1 className="text-3xl font-bold mb-2">Premium Beverages</h1>
            <p className="text-lg mb-4 max-w-md">Delivered to your door, anywhere in South Africa.</p>
          </div>
        </div>

        {/* Display either categories or products based on selection */}
        {!isViewingCategory ? (
          <CategoryCards 
            categories={categories} 
            onCategoryClick={handleCategoryClick}
          />
        ) : (
          <ProductListing 
            category={selectedCategory!} 
            onBackClick={goBackToCategories}
          />
        )}

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            onClick={handleOrderClick}
            className="bg-red-500 hover:bg-red-600 py-6 px-8 text-lg"
          >
            <ShoppingCart className="h-5 w-5 mr-2" /> Place Your Order Now
          </Button>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default WineService;
