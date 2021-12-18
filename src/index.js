import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeContextProvider } from "./store/context/ThemeContext";
import { ToDoContextProvider } from "./store/context/TodoContext";
ReactDOM.render(
  <ThemeContextProvider>
    <ToDoContextProvider>
      <App />
    </ToDoContextProvider>
  </ThemeContextProvider>,
  document.getElementById("root")
);
