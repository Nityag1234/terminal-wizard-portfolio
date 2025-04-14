
import React, { useState, useRef, useEffect } from 'react';
import { getCommandSuggestions } from '../utils/terminalUtils';

interface CommandLineProps {
  onCommand: (command: string) => void;
  onHistoryNavigation: (direction: 'up' | 'down', currentInput: string) => string;
}

const CommandLine: React.FC<CommandLineProps> = ({ onCommand, onHistoryNavigation }) => {
  const [input, setInput] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Focus input when component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Handle key events
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'Enter':
        e.preventDefault();
        console.log('Submitting command:', input); // Debug log
        onCommand(input);
        setInput('');
        setSuggestion('');
        break;
      case 'ArrowUp':
        e.preventDefault();
        const prevCommand = onHistoryNavigation('up', input);
        setInput(prevCommand);
        break;
      case 'ArrowDown':
        e.preventDefault();
        const nextCommand = onHistoryNavigation('down', input);
        setInput(nextCommand);
        break;
      case 'Tab':
        e.preventDefault();
        if (suggestion) {
          setInput(suggestion);
          setSuggestion('');
        }
        break;
      default:
        break;
    }
  };

  // Update input and check for suggestions
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    
    // Get command suggestions for Tab completion
    if (value.trim()) {
      const suggestedCommand = getCommandSuggestions(value);
      setSuggestion(suggestedCommand !== value ? suggestedCommand : '');
    } else {
      setSuggestion('');
    }
  };

  // Keep focus on input when clicking terminal
  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex items-center mt-1" onClick={handleTerminalClick}>
      <span className="terminal-prompt">dev@portfolio:~$</span>
      <div className="relative flex-1">
        <input
          ref={inputRef}
          type="text"
          className="terminal-input w-full bg-transparent border-none outline-none text-terminal-text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          spellCheck="false"
        />
        {suggestion && (
          <span className="absolute left-0 text-terminal-comment opacity-50">
            {input}{suggestion.slice(input.length)}
          </span>
        )}
        {!input && <span className="terminal-cursor"></span>}
      </div>
    </div>
  );
};

export default CommandLine;
