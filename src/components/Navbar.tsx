import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-teal-900/90 backdrop-blur-md py-2 shadow-md' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <Heart className={`w-6 h-6 ${isScrolled ? 'text-cyan-400' : 'text-white'}`} />
            <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-white' : 'text-white'}`}>Our Story</span>
          </a>
          
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <a href="#" className={`${isScrolled ? 'text-white' : 'text-white'} hover:text-cyan-300 transition-colors`}>Home</a>
            </li>
            <li>
              <a href="#gallery" className={`${isScrolled ? 'text-white' : 'text-white'} hover:text-cyan-300 transition-colors`}>Gallery</a>
            </li>
            <li>
              <a href="#wishes" className={`${isScrolled ? 'text-white' : 'text-white'} hover:text-cyan-300 transition-colors`}>Wishes</a>
            </li>
            <li>
              <a href="#timeline" className={`${isScrolled ? 'text-white' : 'text-white'} hover:text-cyan-300 transition-colors`}>Timeline</a>
            </li>
          </ul>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round\" strokeLinejoin="round\" strokeWidth="2\" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </nav>
        
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/10">
            <ul className="space-y-4">
              <li>
                <a href="#" 
                   className="block text-white hover:text-cyan-300 transition-colors"
                   onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#gallery" 
                   className="block text-white hover:text-cyan-300 transition-colors"
                   onClick={() => setIsMobileMenuOpen(false)}>
                  Gallery
                </a>
              </li>
              <li>
                <a href="#wishes" 
                   className="block text-white hover:text-cyan-300 transition-colors"
                   onClick={() => setIsMobileMenuOpen(false)}>
                  Wishes
                </a>
              </li>
              <li>
                <a href="#timeline" 
                   className="block text-white hover:text-cyan-300 transition-colors"
                   onClick={() => setIsMobileMenuOpen(false)}>
                  Timeline
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;