
import React from "react";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen max-w-screen-xl mx-auto px-6 py-12">
      <header className="mb-16">
        <nav className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-light tracking-wider">
            NICOLE KANSA
          </Link>
          <div className="flex space-x-10">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-black' : 'text-gray-400'} hover:text-black transition-colors`}
            >
              Portfolio
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about') ? 'text-black' : 'text-gray-400'} hover:text-black transition-colors`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`${isActive('/contact') ? 'text-black' : 'text-gray-400'} hover:text-black transition-colors`}
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>
      
      <main>
        {children}
      </main>
      
      <footer className="mt-24 py-6 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Nicole Kansa. All rights reserved.
          </p>
          <div className="text-sm text-gray-500">
            <p>Portfolio designed by Lovable</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
