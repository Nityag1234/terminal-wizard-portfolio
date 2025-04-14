
import React from 'react';
import { THEMES } from './commandsTheme';
import { COMMANDS } from './commandsList';

export const clearCommand = (): React.ReactNode => {
  // This will be handled in the Terminal component
  return null;
};

export const manCommand = (command?: string): React.ReactNode => {
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
    ),
    weather: (
      <div className="space-y-2">
        <div className="text-terminal-green">NAME</div>
        <p>weather - check weather information</p>
        <div className="text-terminal-green">SYNOPSIS</div>
        <p>weather [city]</p>
        <div className="text-terminal-green">DESCRIPTION</div>
        <p>Shows current weather conditions for a specified city. If no city is provided, defaults to London.</p>
      </div>
    ),
    theme: (
      <div className="space-y-2">
        <div className="text-terminal-green">NAME</div>
        <p>theme - change terminal appearance</p>
        <div className="text-terminal-green">SYNOPSIS</div>
        <p>theme [theme-name]</p>
        <div className="text-terminal-green">DESCRIPTION</div>
        <p>Changes the color scheme of the terminal. Available themes: {THEMES.join(', ')}</p>
      </div>
    ),
    game: (
      <div className="space-y-2">
        <div className="text-terminal-green">NAME</div>
        <p>game - play a text adventure</p>
        <div className="text-terminal-green">SYNOPSIS</div>
        <p>game</p>
        <div className="text-terminal-green">DESCRIPTION</div>
        <p>Launches a simple text-based adventure game in the terminal.</p>
      </div>
    )
  };

  return manuals[command] || (
    <span className="text-terminal-red">
      No manual entry for {command}
    </span>
  );
};

export const echoCommand = (text: string): React.ReactNode => {
  return <span>{text || ''}</span>;
};

export const lsCommand = (): React.ReactNode => {
  // Create a mapping of command categories
  const commandCategories = {
    "about/": ["about"],
    "projects/": ["projects"],
    "skills/": ["skills"],
    "contact/": ["contact"],
    "resume.pdf": ["resume"],
    "utility/": ["help", "clear", "man", "echo", "ls", "exit"],
    "links/": ["github", "linkedin", "email"],
    "fun/": ["weather", "theme", "game", "sudo"]
  };

  return (
    <div>
      <div className="text-terminal-yellow mb-2">Listing contents of ~/portfolio:</div>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {Object.entries(commandCategories).map(([category, _commands], index) => (
          <div key={index} className={category.includes("resume") ? "text-terminal-white" : "text-terminal-cyan"}>
            {category}
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-terminal-yellow">Available commands:</div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {COMMANDS.map((cmd, index) => (
          <div key={index} className="text-terminal-green">
            {cmd}
          </div>
        ))}
      </div>
    </div>
  );
};

export const sudoCommand = (args: string): React.ReactNode => {
  return (
    <span className="text-terminal-red">
      Permission denied: Unable to run with root privileges
    </span>
  );
};

export const exitCommand = (): React.ReactNode => {
  return (
    <div className="text-terminal-yellow animate-fade-in">
      <p>Thanks for visiting my portfolio! The terminal will remain open.</p>
      <p className="text-terminal-comment">
        (This is just a portfolio website, not an actual terminal session)
      </p>
    </div>
  );
};
