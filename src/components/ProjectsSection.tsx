
import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'E-commerce Platform UI',
    description: 'A sleek and modern UI for an online retail store, focusing on user experience and responsive design.',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80', // Placeholder
    techStack: ['React', 'Tailwind CSS', 'TypeScript', 'Figma'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets, built with performance and clarity in mind.',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', // Placeholder
    techStack: ['Python (Flask)', 'D3.js', 'PostgreSQL', 'Chart.js'],
    liveUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A simple yet powerful task management application to help users stay organized and productive.',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80', // Placeholder
    techStack: ['C# .NET', 'SQL Server', 'Blazor'],
    repoUrl: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} {...project} animationDelay={`${index * 0.1 + 0.1}s`} />
          ))}
        </div>
        <p className="text-center mt-12 text-muted-foreground animate-fade-in" style={{animationDelay: '0.5s'}}>
          More projects coming soon! Feel free to replace these with your actual work.
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;
