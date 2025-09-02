
import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
    { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
    { name: 'Instagram', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01' },
    { name: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' },
  ];
  
  return (
    <footer className="bg-primary text-gray-300 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h2 className="text-white text-2xl font-bold mb-4">Mymtshop</h2>
            <p className="text-gray-400">Your destination for quality products and amazing deals.</p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold tracking-wider uppercase mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Deals</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Categories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold tracking-wider uppercase mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Returns</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Press</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
             <h3 className="text-white font-semibold tracking-wider uppercase mb-4">Connect</h3>
              <div className="flex space-x-4">
                {socialLinks.map(link => (
                    <a href="#" key={link.name} className="text-gray-400 hover:text-accent transition-colors">
                        <span className="sr-only">{link.name}</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            {link.name === 'Instagram' ? (
                                <>
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.625c-3.153 0-3.51.01-4.745.068-2.69.122-3.633 1.144-3.755 3.755-.058 1.235-.068 1.59-.068 4.745s.01 3.51.068 4.745c.122 2.61 1.065 3.633 3.755 3.755 1.235.058 1.59.068 4.745.068s3.51-.01 4.745-.068c2.69-.122 3.633-1.144 3.755-3.755.058-1.235.068-1.59.068-4.745s-.01-3.51-.068-4.745c-.122-2.61-1.065-3.633-3.755-3.755C15.51 3.798 15.153 3.788 12 3.788z" />
                                <path d={link.icon}></path>
                                </>
                            ) : (
                                <path d={link.icon}></path>
                            )}
                        </svg>
                    </a>
                ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mymtshop, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
