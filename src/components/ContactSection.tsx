
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
          </p>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground mb-6">
              <a href="mailto:your.email@example.com">
                <Mail className="mr-2 h-5 w-5" /> Send me an Email
              </a>
            </Button>
          </div>
          <div className="flex justify-center space-x-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={32} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={32} />
              <span className="sr-only">GitHub</span>
            </a>
            {/* Add other social links as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
