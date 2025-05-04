
import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  name: string;
  price: string;
  image: string;
  type?: string; 
  rating: number;
  reviews: number;
  isBestseller?: boolean;
}

interface FeaturedProductsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onWishlist: (product: Product) => void;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products, onAddToCart, onWishlist }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Featured Arrangements</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, idx) => (
          <ProductCard 
            key={idx} 
            product={product} 
            onAddToCart={onAddToCart} 
            onWishlist={onWishlist} 
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
