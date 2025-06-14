
import React, { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Assuming shadcn button is available

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-background/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-md animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center space-x-2 text-primary hover:text-accent transition-colors">
            <Terminal size={32} />
            <span className="font-bold text-2xl">MyPortfolio</span>
          </a>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Button key={item.label} variant="ghost" asChild>
                <a href={item.href} className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">
                  {item.label}
                </a>
              </Button>
            ))}
          </div>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background shadow-lg animate-accordion-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-secondary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
