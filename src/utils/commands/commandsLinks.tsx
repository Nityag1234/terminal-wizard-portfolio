
import React from 'react';

export const resumeCommand = (): React.ReactNode => {
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

export const githubCommand = (): React.ReactNode => {
  window.open('https://github.com/username', '_blank');
  return (
    <span className="text-terminal-green">
      Opening GitHub profile in a new tab...
    </span>
  );
};

export const linkedinCommand = (): React.ReactNode => {
  window.open('https://linkedin.com/in/username', '_blank');
  return (
    <span className="text-terminal-green">
      Opening LinkedIn profile in a new tab...
    </span>
  );
};

export const emailCommand = (): React.ReactNode => {
  window.open('mailto:hello@example.com');
  return (
    <span className="text-terminal-green">
      Opening email client...
    </span>
  );
};
