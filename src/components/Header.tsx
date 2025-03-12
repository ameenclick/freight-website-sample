
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out px-4 md:px-8',
        scrolled ? 'py-2 bg-white shadow-md' : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#" className="text-logistics-navy font-bold text-2xl tracking-tight transition-all duration-300">
            <span className="text-logistics-orange">Logi</span>Sphere
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'About', 'Testimonials', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-logistics-navy font-medium link-underline transition-all duration-300"
              >
                {item}
              </a>
            ))}
            <button className="bg-logistics-orange text-white px-6 py-2 rounded-md font-medium hover:bg-opacity-90 transition-all duration-300 shadow-sm">
              Get Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-logistics-navy focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          'fixed inset-0 bg-white z-40 flex flex-col p-8 transition-transform duration-300 ease-in-out md:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex justify-end">
          <button 
            className="text-logistics-navy focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col space-y-6 mt-12 items-center">
          {['Home', 'Services', 'About', 'Testimonials', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-logistics-navy text-xl font-medium transition-all duration-300"
              onClick={toggleMobileMenu}
            >
              {item}
            </a>
          ))}
          <button className="bg-logistics-orange text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all duration-300 shadow-sm w-full mt-4">
            Get Quote
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
