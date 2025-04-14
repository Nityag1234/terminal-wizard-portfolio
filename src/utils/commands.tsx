import React from 'react';

type TerminalHistory = {
  input?: string;
  output: React.ReactNode;
};

// Available commands
export const COMMANDS = [
  'about',
  'projects',
  'skills',
  'contact',
  'help',
  'clear',
  'man',
  'echo',
  'ls',
  'sudo',
  'exit',
  'resume',
  'github',
  'linkedin',
  'email'
];

// Execute commands and return output
export const executeCommand = (commandLine: string, history: TerminalHistory[]): React.ReactNode => {
  const args = commandLine.trim().split(' ');
  const command = args[0].toLowerCase();
  
  switch (command) {
    case 'about':
      return aboutCommand();
    case 'projects':
      return projectsCommand();
    case 'skills':
      return skillsCommand();
    case 'contact':
      return contactCommand();
    case 'help':
      return helpCommand();
    case 'clear':
      return clearCommand();
    case 'man':
      return manCommand(args[1]);
    case 'echo':
      return echoCommand(args.slice(1).join(' '));
    case 'ls':
      return lsCommand();
    case 'sudo':
      return sudoCommand(args.slice(1).join(' '));
    case 'exit':
      return exitCommand();
    case 'resume':
      return resumeCommand();
    case 'github':
      return githubCommand();
    case 'linkedin':
      return linkedinCommand();
    case 'email':
      return emailCommand();
    default:
      return (
        <span className="text-terminal-red">
          Command not found: {command}. Type <span className="text-terminal-cyan">help</span> for a list of available commands.
        </span>
      );
  }
};

// Command implementations
const aboutCommand = (): React.ReactNode => {
  return (
    <div className="space-y-2">
      <h2 className="text-xl text-terminal-green">About Me</h2>
      <p>
        Hello! I'm a passionate developer with expertise in web development and a
        love for creating intuitive, efficient applications. My background includes
        experience with modern JavaScript frameworks, responsive design, and server-side
        development.
      </p>
      <p>
        When I'm not coding, you can find me exploring new technologies, contributing
        to open-source projects, or enjoying outdoor activities.
      </p>
      <div className="mt-4 text-terminal-comment">
        Type <span className="text-terminal-cyan">contact</span> to find out how to reach me.
      </div>
    </div>
  );
};

const projectsCommand = (): React.ReactNode => {
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

const skillsCommand = (): React.ReactNode => {
  const skills = {
    'Frontend': ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux'],
    'Backend': ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'RESTful APIs', 'GraphQL'],
    'DevOps': ['Git', 'Docker', 'CI/CD', 'AWS', 'Vercel', 'Netlify'],
    'Tools': ['VS Code', 'Webpack', 'Figma', 'Postman', 'Jest', 'npm/yarn']
  };

  return (
    <div className="space-y-2">
      <h2 className="text-xl text-terminal-green">Skills</h2>
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="mb-3">
          <h3 className="text-terminal-yellow">$ {category}/</h3>
          <div className="flex flex-wrap">
            {skillList.map((skill, idx) => (
              <span 
                key={idx} 
                className="mr-2 mb-2 px-2 py-1 bg-terminal-background border border-terminal-cyan rounded text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const contactCommand = (): React.ReactNode => {
  return (
    <div className="space-y-3">
      <h2 className="text-xl text-terminal-green">Contact Information</h2>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center">
          <span className="text-terminal-yellow w-24">Email:</span>
          <a 
            href="mailto:hello@example.com" 
            className="text-terminal-cyan underline hover:text-opacity-80"
          >
            hello@example.com
          </a>
        </div>
        <div className="flex items-center">
          <span className="text-terminal-yellow w-24">GitHub:</span>
          <a 
            href="https://github.com/username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-terminal-cyan underline hover:text-opacity-80"
          >
            github.com/username
          </a>
        </div>
        <div className="flex items-center">
          <span className="text-terminal-yellow w-24">LinkedIn:</span>
          <a 
            href="https://linkedin.com/in/username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-terminal-cyan underline hover:text-opacity-80"
          >
            linkedin.com/in/username
          </a>
        </div>
        <div className="flex items-center">
          <span className="text-terminal-yellow w-24">Twitter:</span>
          <a 
            href="https://twitter.com/username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-terminal-cyan underline hover:text-opacity-80"
          >
            @username
          </a>
        </div>
      </div>
      <div className="mt-4 text-terminal-comment">
        Feel free to reach out through any of these channels!
      </div>
    </div>
  );
};

const helpCommand = (): React.ReactNode => {
  const commandList = [
    { name: 'about', description: 'Learn about me and my background' },
    { name: 'projects', description: 'View my portfolio projects' },
    { name: 'skills', description: 'See my technical skills' },
    { name: 'contact', description: 'Get my contact information' },
    { name: 'resume', description: 'View or download my resume' },
    { name: 'github', description: 'Open my GitHub profile' },
    { name: 'linkedin', description: 'Open my LinkedIn profile' },
    { name: 'email', description: 'Send me an email' },
    { name: 'help', description: 'Show this help message' },
    { name: 'clear', description: 'Clear the terminal' },
    { name: 'man [command]', description: 'Display manual for a command' },
    { name: 'ls', description: 'List available sections' },
    { name: 'echo [text]', description: 'Print text to the terminal' }
  ];

  return (
    <div className="space-y-2">
      <h2 className="text-xl text-terminal-green">Available Commands</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {commandList.map((cmd, index) => (
          <div key={index} className="flex">
            <span className="text-terminal-cyan w-28">{cmd.name}</span>
            <span>{cmd.description}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-terminal-comment">
        Tip: Press <span className="text-terminal-yellow">Tab</span> to autocomplete commands and
        use <span className="text-terminal-yellow">↑</span> and <span className="text-terminal-yellow">↓</span> to navigate command history.
      </p>
    </div>
  );
};

const clearCommand = (): React.ReactNode => {
  // This will be handled in the Terminal component
  return null;
};

const manCommand = (command?: string): React.ReactNode => {
  if (!command) {
    return (
      <span className="text-terminal-yellow">
        Usage: man [command] - Displays the manual for a command
      </span>
    );
  }

  const manuals: Record<string, React.ReactNode> = {
    about: (
      <div className="space-y-2">
        <div className="text-terminal-green">NAME</div>
        <p>about - display information about the developer</p>
        <div className="text-terminal-green">SYNOPSIS</div>
        <p>about</p>
        <div className="text-terminal-green">DESCRIPTION</div>
        <p>The about command displays a brief biography and background information.</p>
      </div>
    ),
    projects: (
      <div className="space-y-2">
        <div className="text-terminal-green">NAME</div>
        <p>projects - list portfolio projects</p>
        <div className="text-terminal-green">SYNOPSIS</div>
        <p>projects</p>
        <div className="text-terminal-green">DESCRIPTION</div>
        <p>This command displays a list of projects with descriptions and links.</p>
      </div>
    ),
    skills: (
      <div className="space-y-2">
        <div className="text-terminal-green">NAME</div>
        <p>skills - display technical skills</p>
        <div className="text-terminal-green">SYNOPSIS</div>
        <p>skills</p>
        <div className="text-terminal-green">DESCRIPTION</div>
        <p>Shows a categorized list of technical skills and technologies.</p>
      </div>
    ),
    help: (
      <div className="space-y-2">
        <div className="text-terminal-green">NAME</div>
        <p>help - display help information</p>
        <div className="text-terminal-green">SYNOPSIS</div>
        <p>help</p>
        <div className="text-terminal-green">DESCRIPTION</div>
        <p>Shows a list of available commands with brief descriptions.</p>
      </div>
    )
  };

  return manuals[command] || (
    <span className="text-terminal-red">
      No manual entry for {command}
    </span>
  );
};

const echoCommand = (text: string): React.ReactNode => {
  return <span>{text || ''}</span>;
};

const lsCommand = (): React.ReactNode => {
  const sections = [
    { name: 'about/', color: 'text-terminal-cyan' },
    { name: 'projects/', color: 'text-terminal-green' },
    { name: 'skills/', color: 'text-terminal-purple' },
    { name: 'contact/', color: 'text-terminal-yellow' },
    { name: 'resume.pdf', color: 'text-terminal-white' }
  ];

  return (
    <div>
      <div className="text-terminal-yellow mb-2">Listing contents of ~/portfolio:</div>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {sections.map((section, index) => (
          <div key={index} className={`${section.color}`}>
            {section.name}
          </div>
        ))}
      </div>
    </div>
  );
};

const sudoCommand = (args: string): React.ReactNode => {
  return (
    <span className="text-terminal-red">
      Permission denied: Unable to run with root privileges
    </span>
  );
};

const exitCommand = (): React.ReactNode => {
  return (
    <div className="text-terminal-yellow animate-fade-in">
      <p>Thanks for visiting my portfolio! The terminal will remain open.</p>
      <p className="text-terminal-comment">
        (This is just a portfolio website, not an actual terminal session)
      </p>
    </div>
  );
};

const resumeCommand = (): React.ReactNode => {
  return (
    <div className="space-y-3">
      <h2 className="text-xl text-terminal-green">Resume</h2>
      <p>
        You can view or download my resume below:
      </p>
      <div>
        <a 
          href="/resume.pdf" 
          target="_blank"
          className="px-3 py-2 bg-terminal-cyan/20 text-terminal-cyan border border-terminal-cyan rounded hover:bg-terminal-cyan/30 inline-block mt-2"
        >
          Download Resume (PDF)
        </a>
      </div>
      <div className="mt-4 text-terminal-comment">
        Note: This is a demo link. Create and upload your actual resume for a real portfolio.
      </div>
    </div>
  );
};

const githubCommand = (): React.ReactNode => {
  window.open('https://github.com/username', '_blank');
  return (
    <span className="text-terminal-green">
      Opening GitHub profile in a new tab...
    </span>
  );
};

const linkedinCommand = (): React.ReactNode => {
  window.open('https://linkedin.com/in/username', '_blank');
  return (
    <span className="text-terminal-green">
      Opening LinkedIn profile in a new tab...
    </span>
  );
};

const emailCommand = (): React.ReactNode => {
  window.open('mailto:hello@example.com');
  return (
    <span className="text-terminal-green">
      Opening email client...
    </span>
  );
};

export default {
  executeCommand,
  COMMANDS
};
