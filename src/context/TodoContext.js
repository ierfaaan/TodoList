import { createContext, useEffect, useReducer } from "react";
import { TodoReducer } from "../reducer/TodoReducer";

export const TodoContext = createContext();

function ToDoContextProvider({ children }) {
  const [tasks, dispatch] = useReducer(TodoReducer, [], () => {
    const localData = localStorage.getItem("tasks");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TodoContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export default ToDoContextProvider;
