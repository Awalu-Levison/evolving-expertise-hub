
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, imageUrl, techStack, liveUrl, repoUrl, animationDelay }) => {
  return (
    <div className="project-card" style={{ animationDelay }}>
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-foreground">{title}</h3>
        <div className="mb-3">
          {techStack.map((tech) => (
            <span key={tech} className="inline-block bg-accent/20 text-accent text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <p className="text-muted-foreground mb-4 text-sm">{description}</p>
        <div className="flex space-x-3">
          {liveUrl && (
            <Button variant="outline" size="sm" asChild className="border-primary text-primary hover:bg-primary/10">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-2" /> Live Demo
              </a>
            </Button>
          )}
          {repoUrl && (
            <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-primary">
              <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-2" /> View Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
