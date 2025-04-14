
import React from 'react';

export const skillsCommand = (): React.ReactNode => {
  const skills = {
    'Frontend': ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux'],
    'Backend': ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'RESTful APIs', 'GraphQL'],
    'DevOps': ['Git', 'Docker', 'CI/CD', 'AWS', 'Vercel', 'Netlify'],
    'Tools': ['VS Code', 'Webpack', 'Figma', 'Postman', 'Jest', 'npm/yarn']
  };

  return (
    <div className="space-y-2">
      <h2 className="text-xl text-terminal-green">Skills</h2>
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="mb-3">
          <h3 className="text-terminal-yellow">$ {category}/</h3>
          <div className="flex flex-wrap">
            {skillList.map((skill, idx) => (
              <span 
                key={idx} 
                className="mr-2 mb-2 px-2 py-1 bg-terminal-background border border-terminal-cyan rounded text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
