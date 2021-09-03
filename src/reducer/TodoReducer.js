import { v4 as uuidv4 } from "uuid";

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        {
          id: uuidv4(),
          text: action.payload.text,
          category: action.payload.category,
          checked: false,
          date: new Date(),
          editing: false,
        },
        ...state,
      ];
    case "CHECK_TODO":
      return state.map((task) => {
        return task.id === action.payload.id
          ? { ...task, checked: !task.checked }
          : task;
      });

    case "DELETE_TODO":
      return state.filter((task) => {
        return task.id !== action.payload.id;
      });
    case "EDIT_TODO":
      return state.map((task) => {
        return task.id === action.payload.id
          ? {
              ...task,
              text: action.payload.text,
              category: action.payload.category,
            }
          : task;
      });
    case "EDITING_TODO":
      return state.map((task) => {
        return task.id === action.payload.id
          ? { ...task, editing: !task.editing }
          : { ...task, editing: false };
      });
    default:
      return state;
  }
};
