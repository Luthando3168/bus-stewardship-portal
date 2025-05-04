
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Product {
  name: string;
  price: string;
  image: string;
  type?: string; 
  rating: number;
  reviews: number;
  isBestseller?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onWishlist: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onWishlist }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all group">
      <div className="h-52 bg-gray-100 relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        {product.isBestseller && (
          <Badge className="absolute top-3 left-3 bg-amber-500">
            Bestseller
          </Badge>
        )}
        <div className="absolute top-3 right-3 flex gap-2">
          <Button 
            variant="secondary" 
            size="icon" 
            className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
            onClick={() => onWishlist(product)}
          >
            <Heart className="h-4 w-4 text-pink-600" />
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-medium">{product.name}</h3>
          <span className="font-bold text-purple-700">{product.price}</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          {product.type && <span className="text-sm text-gray-600">{product.type}</span>}
          <div className="flex items-center text-sm">
            <Star className="h-3.5 w-3.5 text-amber-400 mr-1 fill-amber-400" />
            <span>{product.rating}</span>
            <span className="text-gray-400 ml-1">({product.reviews})</span>
          </div>
        </div>
        <Button 
          className="w-full bg-purple-600 hover:bg-purple-700 group-hover:bg-purple-700"
          onClick={() => onAddToCart(product)}
        >
          <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
