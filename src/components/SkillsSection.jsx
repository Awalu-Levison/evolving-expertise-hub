
import React from 'react';
// Using Bot as a placeholder for Python, and LayoutDashboard for C
import { Code, Palette, PenTool, Bot, LayoutDashboard } from 'lucide-react';

const skillsData = [
  { name: 'Frontend Development', icon: <Code size={48} className="text-primary mb-4" />, description: "Building responsive and interactive user interfaces with modern frameworks." },
  { name: 'UI/UX Design', icon: <Palette size={48} className="text-primary mb-4" />, description: "Designing user-centered interfaces that are intuitive and visually appealing." },
  { name: 'Graphic Design', icon: <PenTool size={48} className="text-primary mb-4" />, description: "Creating compelling visual assets and brand identities." },
  { name: 'C Programming', icon: <LayoutDashboard size={48} className="text-primary mb-4" />, description: "Developing efficient and low-level applications with C." },
  { name: 'Python', icon: <Bot size={48} className="text-primary mb-4" />, description: "Utilizing Python for web development, data analysis, and scripting." },
  // Add more skills as needed
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div key={skill.name} className="skill-card" style={{ animationDelay: `${index * 0.1 + 0.1}s` }}>
              {skill.icon}
              <h3 className="text-xl font-semibold mb-2 text-foreground">{skill.name}</h3>
              <p className="text-muted-foreground text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
