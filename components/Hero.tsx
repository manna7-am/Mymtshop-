
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-800">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://picsum.photos/1600/600?random=1"
          alt="Hero background"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 lg:py-48 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          <span className="block">Discover Your Next Favorite</span>
          <span className="block text-accent">Find it on Mymtshop</span>
        </h1>
        <p className="mt-6 max-w-lg mx-auto text-xl text-gray-300">
          Unbeatable prices, unlimited choices, and unparalleled service. Your one-stop shop for everything you need.
        </p>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
          <a
            href="#"
            className="w-full sm:w-auto bg-accent border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-primary hover:bg-accent-hover md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Shop Collection
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
