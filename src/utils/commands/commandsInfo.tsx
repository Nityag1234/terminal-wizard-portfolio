
import React from 'react';

export const aboutCommand = (): React.ReactNode => {
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
