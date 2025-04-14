
import React, { useState, useEffect } from 'react';

// A simple text-based adventure game
export const gameCommand = (): React.ReactNode => {
  const [gameState, setGameState] = useState({
    started: false,
    currentScene: 'start',
    inventory: [],
    health: 100
  });

  // Game scenes/rooms configuration
  const scenes = {
    start: {
      description: "You wake up in a mysterious terminal-like environment. There are two paths ahead: a green glowing corridor [green] and a red pulsating door [red].",
      options: {
        green: { next: 'corridor', text: "Take the green corridor" },
        red: { next: 'danger', text: "Go through the red door" },
        look: { next: 'start', text: "Look around more carefully", action: () => "You notice a small key on the ground. You pick it up." }
      }
    },
    corridor: {
      description: "You're in a long corridor with lines of code flowing on the walls. At the end, there's a terminal [terminal]. There's also a side passage [back].",
      options: {
        terminal: { next: 'terminal', text: "Approach the terminal" },
        back: { next: 'start', text: "Go back to the start" }
      }
    },
    danger: {
      description: "The room is filled with error messages and warnings. Syntax errors start to materialize around you, dealing 20 damage! There's only one way out [back].",
      options: {
        back: { next: 'start', text: "Run back to the start", action: () => {
          setGameState(prev => ({ ...prev, health: prev.health - 20 }));
          return "You took damage from the syntax errors!";
        }}
      }
    },
    terminal: {
      description: "You found the ancient terminal of wisdom! You can [run] a command to escape or [back] away.",
      options: {
        run: { next: 'victory', text: "Run the escape command" },
        back: { next: 'corridor', text: "Go back to the corridor" }
      }
    },
    victory: {
      description: "Congratulations! You've successfully navigated through the terminal maze. Your coding journey has just begun.",
      options: {
        restart: { next: 'start', text: "Play again", action: () => {
          setGameState({ started: false, currentScene: 'start', inventory: [], health: 100 });
          return "Starting a new game...";
        }}
      }
    }
  };

  // Handle user choices
  const handleChoice = (choice: string) => {
    const scene = scenes[gameState.currentScene as keyof typeof scenes];
    const option = scene.options[choice as keyof typeof scene.options];
    
    if (option) {
      let message = '';
      if (option.action) {
        message = option.action();
      }
      
      setGameState(prev => ({
        ...prev,
        currentScene: option.next,
        message
      }));
    }
  };

  const currentScene = scenes[gameState.currentScene as keyof typeof scenes];

  // Start the game
  if (!gameState.started) {
    return (
      <div className="space-y-3">
        <h2 className="text-xl text-terminal-green">Terminal Adventure</h2>
        <p>A simple text-based adventure game. Navigate through the terminal world.</p>
        <button 
          onClick={() => setGameState(prev => ({ ...prev, started: true }))}
          className="px-3 py-1 bg-terminal-cyan/20 text-terminal-cyan border border-terminal-cyan rounded hover:bg-terminal-cyan/30"
        >
          Start Game
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h2 className="text-xl text-terminal-green">Terminal Adventure</h2>
      
      <div className="flex justify-between">
        <span>Location: <span className="text-terminal-yellow">{gameState.currentScene}</span></span>
        <span>Health: <span className={`${gameState.health > 50 ? 'text-terminal-green' : 'text-terminal-red'}`}>{gameState.health}%</span></span>
      </div>

      <div className="border border-terminal-comment p-3 rounded">
        <p>{currentScene.description}</p>
        
        {gameState.message && (
          <p className="text-terminal-yellow mt-2">{gameState.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <div className="text-terminal-cyan">Available actions:</div>
        <div className="flex flex-wrap gap-2">
          {Object.entries(currentScene.options).map(([key, option]) => (
            <button 
              key={key}
              onClick={() => handleChoice(key)}
              className="px-3 py-1 bg-terminal-background border border-terminal-comment rounded hover:bg-terminal-comment/10"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

