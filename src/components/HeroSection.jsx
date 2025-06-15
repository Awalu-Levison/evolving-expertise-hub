
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/30 animate-fade-in">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          <span className="block animate-fade-in" style={{ animationDelay: '0.2s' }}>Hi, I'm Awalu Levison</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-fade-in" style={{ animationDelay: '0.4s' }}>Software Engineer</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Passionate about crafting beautiful and functional web experiences. Specializing in Frontend Development, UI/UX, and more.
        </p>
        <div className="space-x-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="#projects">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll to about section">
            <ArrowDown className="text-primary h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
