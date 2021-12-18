import React, { createContext } from "react";
import useToggle from "../../hooks/useToggle";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [darkTheme, toggleTheme] = useToggle();
  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }} {...props} />
  );
}

function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useCount must be used within a ThemProvider");
  }
  return context;
}

export { ThemeContextProvider, useTheme };
