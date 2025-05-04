
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

interface ProductGridProps {
  products: Product[];
  searchQuery: string;
  categoryName: string;
  onAddToCart: (product: Product) => void;
  onWishlist: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  searchQuery, 
  categoryName, 
  onAddToCart, 
  onWishlist 
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">
          {categoryName}
          {searchQuery && ` - Search results for "${searchQuery}"`}
        </h2>
        <span className="text-sm text-gray-500">
          {products.length} {products.length === 1 ? 'product' : 'products'}
        </span>
      </div>
      
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <ProductCard 
              key={idx} 
              product={product} 
              onAddToCart={onAddToCart} 
              onWishlist={onWishlist}
            />
          ))}
        </div>
      ) : (
        <div className="p-8 text-center bg-gray-50 rounded-lg">
          <p className="text-gray-500">No products found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
