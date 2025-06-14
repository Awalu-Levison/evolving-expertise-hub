
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-background border-t border-border/50 py-8 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm text-muted-foreground animate-fade-in">
          &copy; {currentYear} [Your Name]. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/70 mt-1 animate-fade-in" style={{animationDelay: '0.2s'}}>
          Built with React, Tailwind CSS, and ❤️ by Lovable.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
