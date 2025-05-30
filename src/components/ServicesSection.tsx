
import React from 'react';
import { Code, Rocket, Zap } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Full-Stack Development',
      description: 'End-to-end web and mobile application development with modern frameworks and technologies.',
      icon: <Code size={24} className="text-orange" />,
      skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'GraphQL', 'AWS']
    },
    {
      title: 'AI & Pattern Recognition',
      description: 'Advanced machine learning solutions and pattern recognition systems built with cutting-edge algorithms.',
      icon: <Rocket size={24} className="text-orange" />,
      skills: ['Machine Learning', 'Computer Vision', 'Neural Networks', 'TensorFlow', 'PyTorch', 'NLP']
    },
    {
      title: 'IT Support & Consultancy',
      description: 'Professional IT support and strategic technology consultancy to optimize your business operations.',
      icon: <Zap size={24} className="text-orange" />,
      skills: ['System Administration', 'Network Security', 'Cloud Migration', 'IT Strategy', 'Technical Support']
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container max-w-6xl px-4 md:px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            My <span className="text-orange">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Leveraging my expertise in full-stack development, AI, and IT support to build intelligent and robust solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="ai-card p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:translate-y-[-5px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 bg-secondary rounded-full w-12 h-12 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="text-xs bg-orange/10 text-orange px-2 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
