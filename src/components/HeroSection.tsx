
import React from 'react';
import { Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center py-20 overflow-hidden">
      <div className="ai-network animate-pulse-slow"></div>
      <div className="container max-w-6xl px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              <span className="ai-text-gradient">Abdelazize Souna</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-secondary">
              Full-Stack Developer & IT Specialist
            </h2>
            <p className="text-lg mb-8 text-muted-foreground max-w-xl">
              Building intelligent solutions with advanced AI integration and robust full-stack architecture. Master's in AI and Pattern Recognition with practical IT support expertise.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="ai-button flex items-center gap-2">
                <span>View My Services</span>
              </a>
              <a href="#resume" className="bg-secondary text-white py-3 px-6 rounded-lg shadow-md hover:shadow-lg flex items-center gap-2 hover:translate-y-[-2px] transition-all duration-300">
                <Download size={20} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        
<div className="w-full md:w-1/2 mb-10 md:mb-0 animate-fade-in">
  <img
    src="public/azize.jpg"

    className="w-85 h-85 rounded-full object-cover mb-9 shadow-lg mx-auto"
  />
 
  {/* ...rest of your code... */}
</div>

        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <a href="#services" className="text-foreground opacity-70 hover:opacity-100 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
