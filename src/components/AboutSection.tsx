
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        <div className="max-w-3xl mx-auto text-center lg:text-left">
          <div className="lg:flex lg:items-center lg:space-x-12">
            <div className="mb-8 lg:mb-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {/* You can add an image here if you like! e.g., <img src="/placeholder.svg" alt="Your Name" className="rounded-full w-48 h-48 mx-auto lg:mx-0 shadow-lg" /> */}
               <div className="w-48 h-48 bg-gradient-to-br from-primary to-accent rounded-full mx-auto lg:mx-0 shadow-lg flex items-center justify-center">
                 <span className="text-5xl text-primary-foreground">🧑‍💻</span>
               </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <p className="text-lg text-muted-foreground mb-4">
                Hello! I'm a passionate Software Engineering student with a strong interest in creating intuitive and engaging digital experiences. My journey into tech started with a fascination for how software can solve real-world problems and connect people.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                I thrive on learning new technologies and continuously honing my skills in areas like frontend development, UI/UX principles, graphic design, and robust programming languages such as C and Python.
              </p>
              <p className="text-lg text-muted-foreground">
                When I'm not coding, I enjoy [Your Hobby 1], [Your Hobby 2], and exploring the latest trends in technology and design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
