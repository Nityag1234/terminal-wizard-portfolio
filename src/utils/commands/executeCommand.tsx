
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
  console.log('Command received:', commandLine); // Debug log
  const args = commandLine.trim().split(' ');
  const command = args[0].toLowerCase();
  
  console.log('Processing command:', command, 'with args:', args.slice(1)); // Debug log
  
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
      console.log('Weather command called with arg:', args[1]); // Debug log
      return weatherCommand(args[1]);
    case 'theme':
      console.log('Theme command called with arg:', args[1]); // Debug log
      return themeCommand(args[1]);
    case 'game':
      console.log('Game command called'); // Debug log
      return gameCommand();
    default:
      return (
        <span className="text-terminal-red">
          Command not found: {command}. Type <span className="text-terminal-cyan">help</span> for a list of available commands.
        </span>
      );
  }
};
