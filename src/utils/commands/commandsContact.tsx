
import React from 'react';

export const contactCommand = (): React.ReactNode => {
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
