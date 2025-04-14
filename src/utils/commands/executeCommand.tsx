
import React from 'react';
import { aboutCommand } from './commandsInfo';
import { projectsCommand } from './commandsProjects';
import { skillsCommand } from './commandsSkills';
import { contactCommand } from './commandsContact';
import { helpCommand } from './commandsHelp';
import { 
  clearCommand, 
  manCommand, 
  echoCommand, 
  lsCommand, 
  sudoCommand, 
  exitCommand 
} from './commandsUtility';
import { 
  resumeCommand, 
  githubCommand, 
  linkedinCommand, 
  emailCommand 
} from './commandsLinks';
import { weatherCommand } from './commandsWeather';
import { themeCommand } from './commandsTheme';
import { gameCommand } from './commandsGames';

export type TerminalHistory = {
  input?: string;
  output: React.ReactNode;
};

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
    case 'weather':
      return weatherCommand(args[1]);
    case 'theme':
      return themeCommand(args[1]);
    case 'game':
      return gameCommand();
    default:
      return (
        <span className="text-terminal-red">
          Command not found: {command}. Type <span className="text-terminal-cyan">help</span> for a list of available commands.
        </span>
      );
  }
};
