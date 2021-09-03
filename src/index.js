import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemContextProvider from "./context/ThemContext";
import ToDoContextProvider from "./context/TodoContext";
ReactDOM.render(
  <ThemContextProvider>
    <ToDoContextProvider>
      <App />
    </ToDoContextProvider>
  </ThemContextProvider>,
  document.getElementById("root")
);
