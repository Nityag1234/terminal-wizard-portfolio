
import React, { useState, useEffect, useRef } from 'react';
import CommandLine from './CommandLine';
import TerminalOutput from './TerminalOutput';
import BootSequence from './BootSequence';
import { executeCommand } from '../utils/commands';

type TerminalHistory = {
  input?: string;
  output: React.ReactNode;
};

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<TerminalHistory[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>(() => {
    // Load command history from localStorage if available
    const savedHistory = localStorage.getItem('terminalCommandHistory');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [bootComplete, setBootComplete] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when content changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Save command history to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('terminalCommandHistory', JSON.stringify(commandHistory.slice(0, 50))); // Limit to last 50 commands
  }, [commandHistory]);

  // Handle command execution
  const handleCommand = (command: string) => {
    if (command.trim()) {
      console.log('Executing command:', command); // Add log to debug
      
      // Special case for 'clear' command
      if (command.trim().toLowerCase() === 'clear') {
        setHistory([]);
        return;
      }

      // Add to command history (avoid duplicates at the top)
      if (commandHistory.length === 0 || commandHistory[0] !== command) {
        setCommandHistory(prev => [command, ...prev]);
      }
      setHistoryIndex(-1);

      // Execute command and get output
      const output = executeCommand(command, history);
      console.log('Command output:', output); // Add log to debug

      // Add command and output to terminal history
      setHistory(prevHistory => [
        ...prevHistory,
        { input: command, output: null },
        { output }
      ]);
    } else {
      // Handle empty command (just adds a new line)
      setHistory(prevHistory => [
        ...prevHistory,
        { input: '', output: null }
      ]);
    }
  };

  // Handle up/down arrows for command history
  const handleHistoryNavigation = (direction: 'up' | 'down', currentInput: string): string => {
    if (commandHistory.length === 0) return currentInput;

    let newIndex = historyIndex;

    if (direction === 'up') {
      newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
    } else {
      newIndex = historyIndex > -1 ? historyIndex - 1 : -1;
    }

    setHistoryIndex(newIndex);
    return newIndex >= 0 ? commandHistory[newIndex] : '';
  };

  // Handle completion of boot animation
  const handleBootComplete = () => {
    setBootComplete(true);
    // Add initial welcome message
    setHistory([
      { 
        output: (
          <div className="text-terminal-green mb-4">
            <div className="mb-2">Welcome to the terminal portfolio! Type 'help' to see available commands.</div>
            <div className="flex flex-wrap gap-2">
              <span 
                className="command-button"
                onClick={() => handleCommand('about')}
              >
                about
              </span>
              <span 
                className="command-button"
                onClick={() => handleCommand('projects')}
              >
                projects
              </span>
              <span 
                className="command-button"
                onClick={() => handleCommand('skills')}
              >
                skills
              </span>
              <span 
                className="command-button"
                onClick={() => handleCommand('contact')}
              >
                contact
              </span>
              <span 
                className="command-button"
                onClick={() => handleCommand('help')}
              >
                help
              </span>
            </div>
          </div>
        )
      }
    ]);
  };

  return (
    <div className="terminal-window" ref={terminalRef}>
      {!bootComplete ? (
        <BootSequence onComplete={handleBootComplete} />
      ) : (
        <>
          {/* Render terminal history */}
          {history.map((entry, index) => (
            <div key={index}>
              {entry.input !== undefined && (
                <div className="flex">
                  <span className="terminal-prompt">dev@portfolio:~$</span>
                  <span>{entry.input}</span>
                </div>
              )}
              {entry.output && <TerminalOutput>{entry.output}</TerminalOutput>}
            </div>
          ))}

          {/* Command input line */}
          <CommandLine 
            onCommand={handleCommand} 
            onHistoryNavigation={handleHistoryNavigation}
          />
        </>
      )}
    </div>
  );
};

export default Terminal;
