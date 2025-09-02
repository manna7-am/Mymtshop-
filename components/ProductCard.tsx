
import React from 'react';
import type { Product } from '../types';
import StarIcon from './icons/StarIcon';
import ShoppingCartIcon from './icons/ShoppingCartIcon';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <StarIcon key={index} filled={index < product.rating} />
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            - {product.originalPrice && Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
        </div>
      </div>
      <div className="p-4 flex flex-col h-full">
        <p className="text-sm text-gray-500 mb-1">{product.category}</p>
        <h3 className="text-lg font-semibold text-gray-800 truncate mb-2">{product.name}</h3>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">{renderStars()}</div>
          <span className="text-gray-500 text-sm ml-2">({product.reviewCount})</span>
        </div>

        <div className="mt-auto">
            <div className="flex items-baseline mb-4">
                <p className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
                {product.originalPrice && (
                <p className="text-md text-gray-500 line-through ml-2">${product.originalPrice.toFixed(2)}</p>
                )}
            </div>

            <button
            onClick={() => onAddToCart(product)}
            className="w-full flex items-center justify-center bg-secondary text-white rounded-lg py-2.5 px-4 font-semibold transition-all duration-300 ease-in-out hover:bg-accent hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
            >
            <ShoppingCartIcon className="w-5 h-5 mr-2" />
            Add to Cart
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
