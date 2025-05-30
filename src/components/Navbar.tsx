
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <div className="container max-w-6xl px-4 md:px-6 mx-auto">
        <div className="flex justify-between items-center h-16 md:h-20">
          <a href="#" className="flex items-center">
            <span className={`text-xl md:text-2xl font-bold ai-text-gradient`}>AS</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-orange transition-colors">Home</a>
            <a href="#services" className="text-foreground hover:text-orange transition-colors">Services</a>
            <a href="#resume" className="text-foreground hover:text-orange transition-colors">Resume</a>
            <a href="#contact" className="text-foreground hover:text-orange transition-colors">Contact</a>
          </nav>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-orange/10 animate-fade-in">
          <div className="container px-4 pt-2 pb-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#" 
                className="text-foreground hover:text-orange transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#services" 
                className="text-foreground hover:text-orange transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#resume" 
                className="text-foreground hover:text-orange transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resume
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-orange transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
