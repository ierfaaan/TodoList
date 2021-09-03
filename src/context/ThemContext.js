import { createContext } from "react";
import useToggle from "../hooks/useToggle";

export const ThemContext = createContext();

function ThemContextProvider({ children }) {
  const [darkThem, toggleThem] = useToggle();
  return (
    <ThemContext.Provider value={{ darkThem, toggleThem }}>
      {children}
    </ThemContext.Provider>
  );
}

export default ThemContextProvider;
