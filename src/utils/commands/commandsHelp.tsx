
import React from 'react';

export const helpCommand = (): React.ReactNode => {
  const commandList = [
    { name: 'about', description: 'Learn about me and my background' },
    { name: 'projects', description: 'View my portfolio projects' },
    { name: 'skills', description: 'See my technical skills' },
    { name: 'contact', description: 'Get my contact information' },
    { name: 'resume', description: 'View or download my resume' },
    { name: 'github', description: 'Open my GitHub profile' },
    { name: 'linkedin', description: 'Open my LinkedIn profile' },
    { name: 'email', description: 'Send me an email' },
    { name: 'weather', description: 'Check weather for a city' },
    { name: 'theme', description: 'Change terminal theme (dark/light/matrix/retro)' },
    { name: 'game', description: 'Play a simple text adventure game' },
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
