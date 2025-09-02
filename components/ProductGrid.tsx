
import React from 'react';
import type { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart }) => {
  return (
    <div className="flex-1">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
        </div>
    </div>
  );
};

export default ProductGrid;
