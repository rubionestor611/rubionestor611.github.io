// ThemeContext.js
import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext<any>('light');

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: any) => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('isDarkMode') == 'y');

  const toggleTheme = () => {
    const newVal = !isDarkMode;
    setIsDarkMode(newVal);
    localStorage.setItem('isDarkMode', newVal ? 'y' : 'n');
  };

  const theme = {
    isDarkMode,
    toggleTheme,
  };

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
