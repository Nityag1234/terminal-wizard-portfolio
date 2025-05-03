
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const aboutCommand = (): React.ReactNode => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl text-terminal-green">About Me</h2>
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="flex-shrink-0">
          <Avatar className="w-32 h-32 rounded-full border-2 border-terminal-green">
            <AvatarImage 
              src="/lovable-uploads/838175e0-577b-4e68-ab34-b98639d0be0e.png" 
              alt="Profile Photo" 
              className="object-cover"
            />
            <AvatarFallback className="bg-terminal-background text-terminal-green text-xl">ME</AvatarFallback>
          </Avatar>
        </div>
        
        <div className="space-y-3 text-left">
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
        </div>
      </div>
      
      <div className="mt-4 text-terminal-comment">
        Type <span className="text-terminal-cyan">contact</span> to find out how to reach me.
      </div>
    </div>
  );
};
