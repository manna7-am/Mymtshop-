
import React from 'react';

interface CategorySidebarProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <aside className="w-64 flex-shrink-0 hidden md:block">
      <div className="bg-white p-6 rounded-lg shadow-md sticky top-40">
        <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3">Categories</h3>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => onSelectCategory(category)}
                className={`w-full text-left px-4 py-2 text-md rounded-md transition-all duration-200 ease-in-out focus:outline-none ${
                  selectedCategory === category
                    ? 'bg-accent text-primary font-semibold shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default CategorySidebar;
