
import React from 'react';

export const THEMES = ['dark', 'light', 'matrix', 'retro'] as const;
export type Theme = typeof THEMES[number];

export const themeCommand = (themeName?: string): React.ReactNode => {
  const availableThemes = THEMES;
  
  // If no theme specified, show available themes
  if (!themeName) {
    return (
      <div className="space-y-2">
        <h2 className="text-xl text-terminal-green">Terminal Themes</h2>
        <p>Available themes:</p>
        <div className="flex flex-wrap gap-2">
          {availableThemes.map(theme => (
            <button 
              key={theme}
              onClick={() => applyTheme(theme)}
              className="px-3 py-1 bg-terminal-cyan/20 text-terminal-cyan border border-terminal-cyan rounded hover:bg-terminal-cyan/30"
            >
              {theme}
            </button>
          ))}
        </div>
        <p className="text-terminal-comment mt-2">
          Usage: theme [theme-name]
        </p>
      </div>
    );
  }

  return applyTheme(themeName as Theme);
};

const applyTheme = (theme: string): React.ReactNode => {
  // Check if the theme is valid
  if (!THEMES.includes(theme as Theme)) {
    return (
      <span className="text-terminal-red">
        Invalid theme. Available themes: {THEMES.join(', ')}
      </span>
    );
  }

  // Apply theme changes directly to CSS variables
  const rootEl = document.documentElement;
  document.body.setAttribute('data-theme', theme);
  
  switch (theme) {
    case 'dark':
      rootEl.style.setProperty('--terminal-background', '#1a1b26');
      rootEl.style.setProperty('--terminal-text', '#a9b1d6');
      rootEl.style.setProperty('--terminal-green', '#9ece6a');
      rootEl.style.setProperty('--terminal-cyan', '#7dcfff');
      rootEl.style.setProperty('--terminal-yellow', '#e0af68');
      rootEl.style.setProperty('--terminal-red', '#f7768e');
      rootEl.style.setProperty('--terminal-purple', '#bb9af7');
      rootEl.style.setProperty('--terminal-comment', '#565f89');
      break;
    case 'light':
      rootEl.style.setProperty('--terminal-background', '#f5f5f5');
      rootEl.style.setProperty('--terminal-text', '#333333');
      rootEl.style.setProperty('--terminal-green', '#4caf50');
      rootEl.style.setProperty('--terminal-cyan', '#00acc1');
      rootEl.style.setProperty('--terminal-yellow', '#ff9800');
      rootEl.style.setProperty('--terminal-red', '#f44336');
      rootEl.style.setProperty('--terminal-purple', '#9c27b0');
      rootEl.style.setProperty('--terminal-comment', '#9e9e9e');
      break;
    case 'matrix':
      rootEl.style.setProperty('--terminal-background', '#000000');
      rootEl.style.setProperty('--terminal-text', '#00ff00');
      rootEl.style.setProperty('--terminal-green', '#33ff33');
      rootEl.style.setProperty('--terminal-cyan', '#00ffff');
      rootEl.style.setProperty('--terminal-yellow', '#96ff00');
      rootEl.style.setProperty('--terminal-red', '#ff3300');
      rootEl.style.setProperty('--terminal-purple', '#cc00ff');
      rootEl.style.setProperty('--terminal-comment', '#006600');
      break;
    case 'retro':
      rootEl.style.setProperty('--terminal-background', '#2d2b55');
      rootEl.style.setProperty('--terminal-text', '#fad000');
      rootEl.style.setProperty('--terminal-green', '#a5ff90');
      rootEl.style.setProperty('--terminal-cyan', '#88deff');
      rootEl.style.setProperty('--terminal-yellow', '#ffcc00');
      rootEl.style.setProperty('--terminal-red', '#ff628c');
      rootEl.style.setProperty('--terminal-purple', '#c678dd');
      rootEl.style.setProperty('--terminal-comment', '#b0b0b0');
      break;
  }

  // Force the page to reapply styles by triggering a reflow
  void document.body.offsetHeight;

  return (
    <div className="text-terminal-green">
      Theme switched to <span className="font-bold">{theme}</span>
    </div>
  );
};
