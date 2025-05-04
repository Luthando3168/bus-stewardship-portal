
import React from 'react';
import ServicePageTemplate from '@/components/concierge/ServicePageTemplate';
import { Gift } from 'lucide-react';
import HeroBanner from '@/components/concierge/gifts/HeroBanner';
import SearchBar from '@/components/concierge/gifts/SearchBar';
import CategoryGrid from '@/components/concierge/gifts/CategoryGrid';
import FeaturedProducts from '@/components/concierge/gifts/FeaturedProducts';
import ProductGrid from '@/components/concierge/gifts/ProductGrid';
import OccasionGrid from '@/components/concierge/gifts/OccasionGrid';
import FeaturesSection from '@/components/concierge/gifts/FeaturesSection';
import { useGiftService } from '@/hooks/concierge/useGiftService';

const GiftService = () => {
  const {
    selectedCategory,
    searchQuery,
    categories,
    occasions,
    featuredProducts,
    filteredProducts,
    handleCategoryClick,
    handleSearch,
    handleAddToCart,
    handleWishlist,
    getDisplayedCategoryName
  } = useGiftService();

  return (
    <ServicePageTemplate 
      title="Petal & Parcel"
      description="South Africa's premium gift delivery service offering beautiful flowers, thoughtful gift baskets, delicious cakes, and more for every special occasion."
      icon={Gift}
      color="text-purple-600"
    >
      <div className="space-y-8">
        {/* Hero Banner */}
        <HeroBanner />

        {/* Search and Category Filter */}
        <div className="grid gap-6">
          <SearchBar searchQuery={searchQuery} onChange={handleSearch} />
          
          {/* Category Cards */}
          <CategoryGrid 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryClick={handleCategoryClick}
          />
        </div>

        {/* Featured Products */}
        {!selectedCategory && (
          <FeaturedProducts 
            products={featuredProducts}
            onAddToCart={handleAddToCart}
            onWishlist={handleWishlist}
          />
        )}

        {/* Product Display */}
        {selectedCategory && (
          <ProductGrid 
            products={filteredProducts}
            searchQuery={searchQuery}
            categoryName={getDisplayedCategoryName()}
            onAddToCart={handleAddToCart}
            onWishlist={handleWishlist}
          />
        )}
        
        {/* Shop by Occasion */}
        <OccasionGrid occasions={occasions} />

        {/* Features */}
        <FeaturesSection />
      </div>
    </ServicePageTemplate>
  );
};

export default GiftService;
