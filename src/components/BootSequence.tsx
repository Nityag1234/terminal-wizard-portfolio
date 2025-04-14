
import React, { useState, useEffect } from 'react';

interface BootSequenceProps {
  onComplete: () => void;
}

const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  
  const bootSteps = [
    { text: "Initializing system...", delay: 500 },
    { text: "Loading core modules...", delay: 700 },
    { text: "Establishing connection...", delay: 600 },
    { text: "Mounting file systems...", delay: 800 },
    { text: "Checking dependencies...", delay: 500 },
    { text: "Loading portfolio data...", delay: 900 },
    { text: "Starting UI services...", delay: 700 },
    { text: "Applying terminal preferences...", delay: 600 },
    { text: "System ready!", delay: 500 }
  ];

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    
    if (currentStep < bootSteps.length) {
      // Progress through boot steps
      timer = setTimeout(() => {
        setProgress(prev => {
          const increment = Math.floor(Math.random() * 15) + 5;
          return Math.min(prev + increment, 100);
        });
        setCurrentStep(prev => prev + 1);
      }, bootSteps[currentStep].delay);
    } else if (progress >= 100) {
      // Boot sequence complete
      timer = setTimeout(() => {
        onComplete();
      }, 500);
    }
    
    return () => clearTimeout(timer);
  }, [currentStep, progress, bootSteps, onComplete]);

  // Calculate the filled part of the loading bar
  const getLoadingBarWidth = () => {
    return `${progress}%`;
  };

  // Calculate which steps to display as completed
  const getCompletedSteps = () => {
    return bootSteps.slice(0, currentStep);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full animate-fade-in">
      <div className="w-full max-w-2xl">
        <div className="text-terminal-green mb-8 text-xl font-bold">Booting personal portfolio...</div>
        
        {/* Display completed boot steps */}
        <div className="mb-8 text-left">
          {getCompletedSteps().map((step, index) => (
            <div key={index} className="flex items-center mb-2">
              <span className="mr-2 text-terminal-green">✓</span>
              <span>{step.text}</span>
            </div>
          ))}
          
          {currentStep < bootSteps.length && (
            <div className="flex items-center mb-2 animate-pulse">
              <span className="mr-2 text-terminal-yellow">⟳</span>
              <span>{bootSteps[currentStep].text}</span>
            </div>
          )}
        </div>
        
        {/* Loading bar */}
        <div className="loading-bar-container mb-4">
          <div 
            className="loading-bar transition-all duration-300" 
            style={{ width: getLoadingBarWidth() }}
          />
        </div>
        
        {/* Loading progress text */}
        <div className="text-center">
          <span>Loading: [{progress}%]</span>
          <span className="terminal-cursor ml-1"></span>
        </div>
      </div>
    </div>
  );
};

export default BootSequence;
