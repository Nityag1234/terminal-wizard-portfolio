
import { COMMANDS } from './commands';

// Get command suggestions for tab completion
export const getCommandSuggestions = (partialCommand: string): string => {
  const lowerPartialCommand = partialCommand.toLowerCase();
  
  // Find matching commands that start with the partial input
  const matchingCommands = COMMANDS.filter(cmd => 
    cmd.toLowerCase().startsWith(lowerPartialCommand)
  );
  
  // If we have exactly one match, return it
  if (matchingCommands.length === 1) {
    return matchingCommands[0];
  }
  
  // If we have multiple matches, find the longest common prefix
  if (matchingCommands.length > 1) {
    let i = lowerPartialCommand.length;
    let char = '';
    let allMatch = true;
    
    while (allMatch && i < matchingCommands[0].length) {
      char = matchingCommands[0][i].toLowerCase();
      
      for (let j = 1; j < matchingCommands.length; j++) {
        if (i >= matchingCommands[j].length || matchingCommands[j][i].toLowerCase() !== char) {
          allMatch = false;
          break;
        }
      }
      
      if (allMatch) {
        i++;
      }
    }
    
    return matchingCommands[0].substring(0, i);
  }
  
  // No matches found, return the original input
  return partialCommand;
};

// Typing animation effect (for future use)
export const typeText = async (
  element: HTMLElement,
  text: string,
  speed = 50
): Promise<void> => {
  for (let i = 0; i < text.length; i++) {
    await new Promise(resolve => setTimeout(resolve, speed));
    element.textContent += text.charAt(i);
  }
};

// Parse command line arguments (for future use)
export const parseArgs = (commandLine: string): { command: string; args: string[] } => {
  const parts = commandLine.trim().split(' ');
  const command = parts[0].toLowerCase();
  const args = parts.slice(1);
  
  return { command, args };
};
