import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Brain } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Brain className="h-8 w-8 text-[#daa75c]" />
              <span className="ml-2 text-xl font-bold text-gray-800">HealthyBrains</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#daa75c] px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/visitor-info" className="text-gray-700 hover:text-[#daa75c] px-3 py-2 rounded-md text-sm font-medium">
              Assessment
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-[#daa75c] px-3 py-2 rounded-md text-sm font-medium">
              Blog
            </Link>
            <Link to="/counsellor" className="bg-[#daa75c] text-white hover:bg-[#76582be8] px-3 py-2 rounded-md text-sm font-medium">
              Professional Help
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#daa75c] hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-inner">
            <Link
              to="/"
              className="text-gray-700 hover:text-[#daa75c] block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/visitor-info"
              className="text-gray-700 hover:text-[#daa75c] block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Assessment
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-[#daa75c] px-3 py-2 rounded-md text-sm font-medium">
              Blog
            </Link>
            <Link to="/counsellor" className="bg-[#daa75c] text-white hover:bg-[#76582be8] px-3 py-2 rounded-md text-sm font-medium">
            Professional Help
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
