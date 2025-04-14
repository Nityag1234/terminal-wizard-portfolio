
import React from 'react';

export const projectsCommand = (): React.ReactNode => {
  const projects = [
    {
      name: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
      link: 'https://github.com/username/ecommerce-platform'
    },
    {
      name: 'Weather Dashboard',
      description: 'Real-time weather application using OpenWeather API and React',
      link: 'https://github.com/username/weather-app'
    },
    {
      name: 'Task Management System',
      description: 'A Kanban-style task manager with drag-and-drop functionality',
      link: 'https://github.com/username/task-manager'
    },
    {
      name: 'Portfolio Website',
      description: 'This terminal-style portfolio built with React and Tailwind CSS',
      link: 'https://github.com/username/terminal-portfolio'
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl text-terminal-green">Projects</h2>
      <div className="space-y-3">
        {projects.map((project, index) => (
          <div key={index} className="border border-terminal-comment p-3 rounded">
            <h3 className="text-terminal-yellow font-bold">{project.name}</h3>
            <p className="text-sm">{project.description}</p>
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-cyan underline hover:text-opacity-80 text-sm"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
      <div className="text-terminal-comment mt-2">
        Type <span className="text-terminal-cyan">github</span> to visit my GitHub profile.
      </div>
    </div>
  );
};
