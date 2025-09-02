
import React from 'react';
import SearchIcon from './icons/SearchIcon';
import ShoppingCartIcon from './icons/ShoppingCartIcon';
import HeartIcon from './icons/HeartIcon';
import UserIcon from './icons/UserIcon';

interface HeaderProps {
  cartItemCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount }) => {
  return (
    <header className="bg-primary shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-white text-3xl font-bold tracking-wider">
              Mymtshop
            </a>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 justify-center px-8 lg:px-16">
            <div className="relative w-full max-w-lg">
              <input
                type="search"
                placeholder="Search for products, brands and more"
                className="w-full bg-secondary text-gray-300 placeholder-gray-500 rounded-full py-2.5 pl-4 pr-12 border-transparent focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                <SearchIcon className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Icons and Actions */}
          <div className="flex items-center space-x-5">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
              <UserIcon className="w-7 h-7" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
              <HeartIcon className="w-7 h-7" />
            </a>
            <a href="#" className="relative text-gray-300 hover:text-white transition-colors duration-200">
              <ShoppingCartIcon className="w-7 h-7" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2.5 bg-accent text-primary text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </a>
          </div>
        </div>
        
        {/* Secondary Navigation */}
        <nav className="hidden md:flex items-center justify-center space-x-10 h-12 border-t border-secondary">
            <a href="#" className="text-gray-300 hover:text-accent font-medium tracking-wide transition-colors duration-200">Home</a>
            <a href="#" className="text-gray-300 hover:text-accent font-medium tracking-wide transition-colors duration-200">Categories</a>
            <a href="#" className="text-gray-300 hover:text-accent font-medium tracking-wide transition-colors duration-200">Today's Deals</a>
            <a href="#" className="text-gray-300 hover:text-accent font-medium tracking-wide transition-colors duration-200">New Arrivals</a>
            <a href="#" className="text-gray-300 hover:text-accent font-medium tracking-wide transition-colors duration-200">Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
