
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySidebar from './components/CategorySidebar';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import type { Product } from './types';

// Dummy data for products
const DUMMY_PRODUCTS: Product[] = [
  { id: 1, name: 'Wireless Noise-Cancelling Headphones', category: 'Electronics', price: 249.99, originalPrice: 349.99, rating: 5, reviewCount: 188, imageUrl: 'https://picsum.photos/400/300?random=10' },
  { id: 2, name: 'Smart Fitness Tracker Watch', category: 'Electronics', price: 129.50, originalPrice: 199.00, rating: 4, reviewCount: 204, imageUrl: 'https://picsum.photos/400/300?random=11' },
  { id: 3, name: 'Organic Cotton Crewneck T-Shirt', category: 'Apparel', price: 24.99, originalPrice: 40.00, rating: 5, reviewCount: 312, imageUrl: 'https://picsum.photos/400/300?random=12' },
  { id: 4, name: 'Classic Leather Backpack', category: 'Accessories', price: 89.99, originalPrice: 120.00, rating: 4, reviewCount: 98, imageUrl: 'https://picsum.photos/400/300?random=13' },
  { id: 5, name: 'Gourmet Coffee Bean Sampler', category: 'Home & Kitchen', price: 39.95, originalPrice: 55.00, rating: 5, reviewCount: 450, imageUrl: 'https://picsum.photos/400/300?random=14' },
  { id: 6, name: 'Stainless Steel Water Bottle', category: 'Home & Kitchen', price: 19.99, originalPrice: 29.99, rating: 4, reviewCount: 765, imageUrl: 'https://picsum.photos/400/300?random=15' },
  { id: 7, name: 'Yoga & Pilates Mat', category: 'Sports & Outdoors', price: 34.50, originalPrice: 50.00, rating: 5, reviewCount: 210, imageUrl: 'https://picsum.photos/400/300?random=16' },
  { id: 8, name: 'Hardcover Fiction Bestseller', category: 'Books', price: 18.00, originalPrice: 28.00, rating: 4, reviewCount: 150, imageUrl: 'https://picsum.photos/400/300?random=17' },
];

const CATEGORIES = [
    'All',
    'Electronics',
    'Apparel',
    'Accessories',
    'Home & Kitchen',
    'Sports & Outdoors',
    'Books'
];

const App: React.FC = () => {
  const [cartItemCount, setCartItemCount] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const handleAddToCart = (product: Product) => {
    console.log('Added to cart:', product.name);
    setCartItemCount(prevCount => prevCount + 1);
  };
  
  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    // In a real app, you would filter products here
  };

  const filteredProducts = selectedCategory === 'All' 
    ? DUMMY_PRODUCTS 
    : DUMMY_PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Header cartItemCount={cartItemCount} />
      <main>
        <Hero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row gap-8">
            <CategorySidebar 
                categories={CATEGORIES}
                selectedCategory={selectedCategory}
                onSelectCategory={handleSelectCategory}
            />
            <ProductGrid products={filteredProducts} onAddToCart={handleAddToCart} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
