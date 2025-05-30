
import React from 'react';
import { Download } from 'lucide-react';

const ResumeSection = () => {
  // Placeholder resume data
  const education = [
    {
      degree: "Master's in Artificial Intelligence & Pattern Recognition",
      institution: "University HASSIBA BEN BOUALI OF CHLEF-ALGERIA", 
      year: "2022 - 2023"
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "University HASSIBA BEN BOUALI OF CHLEF-ALGERIA",
      year: "2019 - 2022"
    }
  ];

  const experience = [
    {
      position: "SOFTWARE ENGINEER",
      company: "NGNEX",
      period: "2025/01/03",
      description: "Leading development of AI-powered web applications with React and Node.js."
    },
    {
      position: "IT Support Specialist",
      company: "SARL ALGERIA SOMMET FORGEINE",
      period: "2025/03/01-Present",
      description: "Provided technical support and implemented IT solutions for enterprise clients."
    }
  ];

  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      <div className="ai-network animate-pulse-slow"></div>
      <div className="container max-w-6xl px-4 md:px-6 mx-auto z-10 relative">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="ai-text-gradient">Resume</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A snapshot of my educational background and professional experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="ai-card p-8 animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 text-secondary border-b border-orange/20 pb-2">Education</h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="border-l-2 border-orange pl-4 py-1">
                  <h4 className="text-lg font-semibold text-secondary">{item.degree}</h4>
                  <p className="text-muted-foreground">{item.institution}</p>
                  <p className="text-sm text-orange">{item.year}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="ai-card p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-6 text-secondary border-b border-orange/20 pb-2">Experience</h3>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <div key={index} className="border-l-2 border-orange pl-4 py-1">
                  <h4 className="text-lg font-semibold text-secondary">{item.position}</h4>
                  <p className="text-muted-foreground">{item.company}</p>
                  <p className="text-sm text-orange">{item.period}</p>
                  <p className="mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="ai-button inline-flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();

             // Replace the alert with actual download logic 
               
                const link = document.createElement('a');
                link.href = 'public/CV.pdf'; // Update this path to your actual CV file location in the public folder
                link.download = 'CV.pdf'; // The filename for the downloaded file
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);alert("Resume download would start here ");

            }}
          >
            <Download size={20} />
            <span>Download Full Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
