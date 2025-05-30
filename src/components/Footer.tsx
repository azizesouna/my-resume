
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-background border-t border-orange/10">
      <div className="container max-w-6xl px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold ai-text-gradient">Abdelazize Souna</h3>
            <p className="text-muted-foreground text-sm">Full-Stack Developer & IT Specialist</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} All Rights Reserved
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Built with React, Tailwind CSS, and TypeScript
            </p>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a href="#" className="text-muted-foreground hover:text-orange text-sm transition-colors">Home</a>
            <a href="#services" className="text-muted-foreground hover:text-orange text-sm transition-colors">Services</a>
            <a href="#resume" className="text-muted-foreground hover:text-orange text-sm transition-colors">Resume</a>
            <a href="#contact" className="text-muted-foreground hover:text-orange text-sm transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
