
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container max-w-6xl px-4 md:px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Get In <span className="text-orange">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to discuss potential collaborations? I'm just an email or call away.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 animate-slide-up">
            <h3 className="text-2xl font-bold mb-8 text-white text-center">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-orange/20 p-3 rounded-full">
                  <Mail className="text-orange" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:azizesouna270@gmail.com" className="text-white hover:text-orange transition-colors">
                    azizesouna270@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-orange/20 p-3 rounded-full">
                  <Phone className="text-orange" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+213561042735" className="text-white hover:text-orange transition-colors">
                    +213 561 042 735
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-white text-lg font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {/* Social media icons would go here - using placeholders */}
             <a
                  href="https://github.com/abdelazizesouna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-orange/20 p-3 rounded-full transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" fill="currentColor"/>
                  </svg>
                </a>
                <a
                  href="www.linkedin.com/in/abdelazize-souna-baa571245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-orange/20 p-3 rounded-full transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              
                  <a 
                     href="https://wa.me/213553641676"
                    target="_blank"
                     rel="noopener noreferrer"
                     className="bg-white/10 hover:bg-orange/20 p-3 rounded-full transition-colors"
                     aria-label="WhatsApp"
                  >
                    <svg className="w-5 h-5 text-white" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.08 2.34 7.09L4 29l7.18-2.31A12.93 12.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.5c-2.13 0-4.13-.62-5.82-1.7l-.41-.25-4.13 1.33 1.36-4.02-.27-.42A9.47 9.47 0 0 1 6.5 15c0-5.24 4.26-9.5 9.5-9.5s9.5 4.26 9.5 9.5-4.26 9.5-9.5 9.5zm5.13-7.07c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.3 0 1.35.99 2.66 1.13 2.85.14.18 1.95 2.98 4.74 4.06.66.23 1.18.36 1.58.46.66.17 1.26.15 1.74.09.53-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" fill="currentColor"/>
                    </svg>
                      </a>

              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-8 text-white text-center">Send Me a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-orange/50"
                  placeholder="Write your name here"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-orange/50"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-orange/50"
                  placeholder="Hello, I'd like to discuss a project..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full ai-button"
                onClick={(e) => {
                  e.preventDefault();
                  // In a real app, this would send the message
               // Example: send form data to an API endpoint
                  const form = e.currentTarget.form as HTMLFormElement | null;
                  const name = (form?.elements.namedItem('name') as HTMLInputElement | null)?.value;
                  const email = (form?.elements.namedItem('email') as HTMLInputElement | null)?.value;
                  const message = (form?.elements.namedItem('message') as HTMLTextAreaElement | null)?.value;

                  // Replace with your API endpoint
                  fetch('http://localhost:8081/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, message }),
                  })
                    .then((res) => {
                      if (res.ok) {
                        alert('Message sent successfully!');
                        form?.reset();
                      } else {
                        alert('Failed to send message.');
                      }
                    })
                    .catch(() => alert('Failed to send message.'));
               
                }}
                
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
