import React from 'react';

export const ThemeContext = React.createContext({
  direction: localStorage.getItem('direction') || 'ltr',
  theme: localStorage.getItem('theme') || 'default'
});
