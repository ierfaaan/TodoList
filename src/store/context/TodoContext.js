import React, { createContext, useEffect, useReducer } from "react";
import { TodoReducer } from "../reducer/TodoReducer";

export const TodoContext = createContext();

function ToDoContextProvider(props) {
  const [tasks, dispatch] = useReducer(TodoReducer, [], () => {
    const localData = localStorage.getItem("tasks");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return <TodoContext.Provider value={{ tasks, dispatch }} {...props} />;
}

function useTodo() {
  const context = React.useContext(TodoContext);
  if (!context) {
    throw new Error("useCount must be used within a ToDoContextProvider");
  }
  return context;
}

export { ToDoContextProvider, useTodo };
